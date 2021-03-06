const PubSub = {};


(function(p) {
    var topics = {};
    var subUid = -1;

    p.publish = function( topic, args ) {
       if ( !topics[topic] ) {
           return false;
       }

       const subscribers = topics[topic];
       subscribers.forEach( s => s.callback.call( null, args));
       return this;
   };

    p.subscribe = function( topic, callback ) {
       if (!topics[topic]) {
           topics[topic] = [];
       }

       const id = ( ++subUid ).toString();
       topics[topic].push({id, callback});
       return id;
   };

   p.unsubscribe = function( id ) {
        Object.keys(topics).forEach( k => {
            return topics[k] = topics[k].filter( subscriber => subscriber.id !== id );
        })
    return this;
   };
})(PubSub);

export default PubSub;