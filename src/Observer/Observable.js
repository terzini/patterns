const Observable = (function() {
    var topics = {};

    var subUid = -1;

    const publish = ( topic, args ) => {
       if ( !topics[topic] ) {
           return false;
       }

       const subscribers = topics[topic];
       subscribers.forEach( s => s.callback.call( null, args));
   };

    const subscribe = ( topic, callback ) => {
       if (!topics[topic]) {
           topics[topic] = [];
       }

       const id = ( ++subUid ).toString();
       topics[topic].push({id, callback});
       return id;
   };

   const unsubscribe = ( id ) => {
        Object.keys(topics).forEach( k => {
            return topics[k] = topics[k].filter( subscriber => subscriber.id !== id );
        })
   };

   return {
       publish, 
       subscribe, 
       unsubscribe
   }
})();

export default Observable;