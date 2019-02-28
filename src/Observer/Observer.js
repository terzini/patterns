const Observer = (function() {
    var topics = {};

    var subUid = -1;

    const publish = ( topic, args ) => {
       if ( !topics[topic] ) {
           return false;
       }

       const subscribers = topics[topic];
       subscribers.forEach( s => s.callback.call( null, args));

       return this;
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
       console.log("--- topics: ", topics );
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
})();

export default Observer;