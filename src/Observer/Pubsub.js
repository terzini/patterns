const PubSub = (function() {
    var topics = {};

    var subUid = -1;

    publish = ( topic, args ) => {
       if ( !topics[topic] ) {
           return false;
       }

       const subscribers = topics[topic];
       subscribers.forEach( s => s.callback.call( null, args));

       return this;
   };

    subscribe = ( topic, callback ) => {
       if (!topics[topic]) {
           topics[topic] = [];
       }

       const id = ( ++subUid ).toString();
       topics[topic].push({id, callback});
       return id;
   };

   unsubscribe = ( id ) => {
       topics.forEach(t => {
           return t = t.filter( subscriber => subscriber.id !== id );
       })
       return this;
   };

   return {
       publish, 
       subscribe, 
       unsubscribe
   }
}( ));