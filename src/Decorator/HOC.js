const SimpleHeader = (props) => <h1>{props.text}</h1>


// HOC: Returns function that accepts component as a parameter and creates another React component 
// that brings new functionality to the wrapped component
function withStyles( styles ){
    
    return (WrappedComponent) =>
  
    class WrappedComponenttWithStyles extends Component{
      render(){
        return <WrappedComponent {...this.props} styles={styles.container} />
      }
    };
}

export default withStyles({ container: { fontWeight: 'normal' }})(SimpleHeader);