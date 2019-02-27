  // Promise for authentication
  const authenticate = (env) => context => {
      return new Promise( (resolve, reject) => {
        if( env.NODE_ENV === "production"){
            return reject("Not authenticated");
        } else{
            return resolve(context);
        }});
 }
 
 // Promise for checking if the request is JSON 
 const bodyParser = (env) => context => {
    return new Promise( (resolve, reject ) => {
        if( !context.headers || !context.headers['Content-Type'] || (context.headers['Content-Type'] !== 'application/json')){
            return reject("The request content type is not a JSON");
        }
        
        context.body = context.body.length && JSON.parse( context.body ) || {};
        return resolve(context);
    });
 }

 // Promise for setting the query params in the request body
const setParams = (env) => context => {
    return new Promise(() => {
        const start = ( context.url && context.url.indexOf('?') > -1 ) ? context.url.indexOf('?') + 1 : -1;
    
        if( start > -1 ){
        const params = context.url.substring(start).split('&');
        
        params.forEach( p => {
            const values = p.split('=');
            context.body[values[0]] = values.length > 0 ? values[1] : undefined;
            })
        }
    
        return resolve(context);
    });
 }

 const promiseChain = env => context => Promise.resolve(context)
    .then(authenticate)
    .then(bodyParser)
    .then(setParams)
    .catch(err => console.log('ERROR: ', err));

export default promiseChain;