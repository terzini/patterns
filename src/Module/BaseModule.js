const BaseModule = (function(){
    var _privateAge = undefined;
    
    return {
        initAge: function(value){
            console.log('---Base: original initAge()');
            _privateAge = value;
        },
        addAge: function(value){
            this.initAge(0);
            _privateAge += value;
            return _privateAge;
        },
        getAge: function(){
            return _privateAge;
        }
    }
})()

export default BaseModule;
