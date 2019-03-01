import { BaseModule, RevealingModule } from './Module';
import CommandManager from './Command';
import Receiver from './Command/Receiver';
import User from './Decorator';
import { Observable, PubSub } from './Observer';
import { middlewareChain, promiseChain } from './Chain';
import { SimpleLogger, EnhancedLogger, LoggerAdapter } from './Adapter'


console.log('---Base Module: Age: ',  BaseModule.addAge(20));
BaseModule.initAge = () => {console.log( '---Base: custom initAge()')}
console.log('---Base Module: Age: ',  BaseModule.addAge(20));
BaseModule.initAge();

console.log("  ");

console.log( "---Revealing Module: Age: ", RevealingModule.addAge(20));
RevealingModule.initAge = () => { console.log( '---Revealing: custom initAge()')};
console.log( "---Revealing Module: Age: ", RevealingModule.addAge(20));
RevealingModule.initAge();

console.log("  ");

const item1 =  {name: 'item1'};
CommandManager.execute( Receiver, {action: "add", payload: item1 });
CommandManager.execute( Receiver, {action: "getAll"});
CommandManager.execute( Receiver, {action: "removeAt", payload: 0 });
CommandManager.execute( Receiver, {action: "getAll"});

console.log("  ");

var user = new User();
user.setUsername("nikoleta");
console.log( "Decorator: decorated name: ", user.getUsername() );
console.log( "Decorator: property injected to class with decorator: ", user.styles );
// user.getUsername = () => { console.log('Try to override getUsername')};


console.log("  ");

const topics = {
    CLICK: "CLICK",
    SCROLL: "SCROLL",
}

// const idClick_1 = Observable.subscribe( topics.CLICK, () => { console.log("On CLICK: cb 1")});
// const idClick_2 = Observable.subscribe( topics.CLICK, () => { console.log("On CLICK: cb 2")});
// const idScroll_1 = Observable.subscribe( topics.SCROLL, () => { console.log("On SCROLL: cb 1")});

// Observable.publish(topics.CLICK);
// Observable.publish(topics.SCROLL);
// Observable.unsubscribe(idClick_1);


const idClick_1 = PubSub.subscribe( topics.CLICK, () => { console.log("On CLICK: cb 1")});
const idClick_2 = PubSub.subscribe( topics.CLICK, () => { console.log("On CLICK: cb 2")});
const idScroll_1 = PubSub.subscribe( topics.SCROLL, () => { console.log("On SCROLL: cb 1")});

PubSub.publish(topics.CLICK).publish(topics.SCROLL);
PubSub.unsubscribe(idClick_1);

console.log("  ");

const request = { method: "GET", url: 'htp://test.com?param1=value1&param2&param3=value3', headers: {'Content-Type': 'application/json'}, body: {}};
const env = { NODE_ENV: "dev"};

const middlewareChainProduction = middlewareChain(env);
middlewareChainProduction(request);
console.log("CHAIN M: request: ", request );


const promiseChainProduction = promiseChain(env);
promiseChainProduction(request)
console.log("CHAIN P: request: ", request);


console.log("  ");

const message = "simple message";
const messageWithError = { error: "Error message"};
const data = { data: { title: "some stuff"}};

let logger = new SimpleLogger();
logger.log( message );
logger.log( messageWithError );

logger= new EnhancedLogger();
logger.logWithData( message );
logger.logWithData( messageWithError);
logger.logWithData( message, data )

logger = new LoggerAdapter();
logger.log( message );
logger.log( messageWithError );
logger.logWithData(message, data);


