

const buildMiddleware = (...middlewares ) => env => context => {
        const error = message => console.log('ERROR:', message);
        const final = context => context;
        const chain = middlewares.reduceRight( (next, middleware) => middleware(error, env, next), final );
        return chain(context);
};

 
  // Middleware for authentication
  const authenticate = (err, env, next) => context => {
     console.log('--- authenticate ---');
    if( env.NODE_ENV === "production"){
        return err("Not authenticated");
    }

    return next(context);
  }
  
  // Middleware for checking if the request is JSON 
  const bodyParser = (err, env, next) => context => {
    console.log('--- body parser ---');
    if( !context.headers || !context.headers['Content-Type'] || (context.headers['Content-Type'] !== 'application/json')){
        return err("The request content type is not a JSON");
    }
    
    context.body = context.body.length && JSON.parse( context.body ) || {};
    return next(context);
  }

  // Middleware for setting the query params in the request body
   const setParams = (err, env, next) => context => {
     console.log('--- setParams ---');
    const start = ( context.url && context.url.indexOf('?') > -1 ) ? context.url.indexOf('?') + 1 : -1;
    
    if( start > -1 ){
        const params = context.url.substring(start).split('&');
        params.forEach( p => {
            const values = p.split('=');
            context.body[values[0]] = values.length > 0 ? values[1] : undefined;
        } )
    }
    
    return next(context);
  }

  const middlewareChain = buildMiddleware( authenticate, bodyParser, setParams );

  export default middlewareChain;
