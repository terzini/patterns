const CommandManager = (function(){
    return {
        execute: ( receiver, {action, payload}) => {
            let params = [];
            if( !Array.isArray(payload)){
                params = params.concat(payload);
            }
           return receiver[action] && receiver[action].apply(null, params);
        }
    }
})();

// var action = {action: ACTION_NAME, payload: ACTION_PARAMS };
// CommandManager.execute( State, action );

export default CommandManager;