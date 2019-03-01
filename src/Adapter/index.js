// Something that already exists and is used in the old parts of the software
function SimpleLogger(){
    this.log = (message) => {
        console.log("Simple logger -> log message: ", {"message": message });
    }
}

// New logger that should be used in the refactored code
function EnhancedLogger( ){
    this.logWithData = (message, data) => {
        if( message.error ){
            console.error( "Enhanced logger -> logWithData: ", message.error)
        }else if( message.warning ){
            console.trace( "Enhanced logger -> logWithData: ", message.warning);
        }
        else{
            console.log( "Enhanced logger -> logWithData: ", message, data );
        }
    }
}

// Adapter  - exposes the same method as the old logger so we can call the log as we did in the past
function LoggerAdapter() {
    var logger = new EnhancedLogger();
   
    return {
        log: (message) => logger.logWithData(message, {}), 
        logWithData: (message, data) => logger.logWithData(message, data)
    }
};


export { LoggerAdapter, EnhancedLogger, SimpleLogger };
