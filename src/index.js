import {BaseModule, RevealingModule} from './Module';
import CommandManager from './Command';
import Receiver from './Command/Receiver';
import User from './Decorator';

console.log('---Base: Age: ',  BaseModule.addAge(20));
BaseModule.initAge = () => {console.log( '---Base: custom initAge()')}
console.log('---Base: Age: ',  BaseModule.addAge(20));
BaseModule.initAge();

console.log("  ");

console.log( "---Revealing: Age: ", RevealingModule.addAge(20));
RevealingModule.initAge = () => { console.log( '---Revealing: custom initAge()')};
console.log( "---Revealing: Age: ", RevealingModule.addAge(20));
RevealingModule.initAge();

console.log("  ");

const item1 =  {name: 'item1'};
CommandManager.execute( Receiver, {action: "add", payload: item1 });
CommandManager.execute( Receiver, {action: "getAll"});
CommandManager.execute( Receiver, {action: "removeAt", payload: 0 });
CommandManager.execute( Receiver, {action: "getAll"});

var user = new User();
user.setUsername("nikoleta");
user.getUsername();
//user.getUsername = () => { console.log('Try to override getUsername')};
//user.getUsername();
console.log( "User: styles added with decorator: ", user.styles );