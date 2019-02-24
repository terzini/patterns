function readonly(target, key, descriptor){
    // console.log( "target: ", target ); // the class or function 
    // console.log( "key: ", key ); // the name of the decorated method
    // // An Object that gives you access to the the decorated method itself through its value property. 
    // // This value is the method that gets decorated and executed when we call our decorated method. 
    // console.log( "descriptor: ", descriptor );
    descriptor.writable = false;
    return descriptor;
}

function uppercase(target, key, descriptor){
    const fn = descriptor.value;

    descriptor.value = () => {
      const result = fn.call(target);
      return result && result.toUpperCase();
    };
}

const withStyles = (value) => (target) => {
    console.log( "target: ", target ); 
    // in the case of decorating a Class, target is the constructor of the Class you’re decorating
   
    target.prototype.styles = value;
}

@withStyles({style1: "style1"})
class User{
    constructor(){
        this.username = "";
    }

    setUsername(value){
        this.username = value;
    }

    //@readonly
    // @uppercase
    getUsername(){
        // console.log( ' User: username: ', this.username );
        return this.username;
    }
}


export default User;