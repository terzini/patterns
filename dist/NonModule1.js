var State = {name: "File 1"};

var startFnTest = (function(){
    console.log(`Expect to log '1: Start'`);
    start();
});


function start(){
    console.log('1: Start');
}