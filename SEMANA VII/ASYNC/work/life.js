/**
 Demo for EventEmitter
 run: node life n (n a number of listeners)
 @author loriacarlos@gmail.com
 @since 2017
 @see https://nodejs.org/api/events.html
*/
const events = require('events');
const eventEmitter = new events.EventEmitter();

const WORK = Symbol('work');
let life = {}
function genSomeValue(){
   return Math.floor((Math.random() * 10))
   
}
function createOneListener(name){
	function listener(){
		console.log(`Listener ${name} starts working with ${life[name].value}`);
		life[name].value--;
		if (life[name].value < 0){
			 console.log(`*** Listener ${name} is now dying ***`);
			 eventEmitter.removeListener(WORK, life[name].listener) //Se desregistra la lista de bingos que juegan
			 
		}
	};
	life[name] = {value : genSomeValue(), listener};
	return listener;
}
function createSomeListeners(n, life){
  return Array.from({ length: n }, (_, i) => createOneListener(i, life))
}

function bindListeners(listeners){
	listeners.forEach( h => eventEmitter.addListener(WORK, h));
}
function report(){
	let listenerCounter = eventEmitter.listenerCount(WORK);
    console.log(`>>> There are ${listenerCounter} listening to event <<<`);	
}
function notifyAll(event){
    eventEmitter.emit(event); //Emite evento y el que lo escucha lo agarra
}

function showLife(time){
  console.log()
  console.log(`------ ${time} ------`);
  console.log(life)
  console.log()
}
function main(argv) {
	let n = (argv.length > 2) ? parseInt(argv[2]) : 3;
	console.log(`>>> Testing Events (${n} listeners) <<<`)
	
	bindListeners(createSomeListeners(n));
    showLife('Starting Life');
	
	for(notifyAll(WORK); eventEmitter.listenerCount(WORK); notifyAll(WORK)){
	    console.log();
		report();
	}
	showLife('Final Life');	
	
}

main(process.argv)