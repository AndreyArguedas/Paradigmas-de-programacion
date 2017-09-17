/*
  Demo para verificar el event loop (en node)
  Compara timers y nextTick
  @author loriacarlos@gmail.com
  @see  https://nodejs.org/api/process.html#process_process_nexttick_callback_args
*/
function main1() {
	console.log()
	console.log('*** 1) MAIN 1: On top of the main script ***')
	console.log('1) start');
	process.nextTick(() => {
	  console.log('1) nextTick');
	});
	setTimeout(() => console.log('1) timeout'), 0)
	setImmediate(() => console.log('1) immediate'))
	console.log('1) end');
}
// main1()
/* 
*** 1) MAIN 1: On top of the main script ***
1) start
1) end
1) nextTick
1) timeout
1) immediate
*/
function main2(){
	console.log()
	console.log('*** 2) MAIN 2: Inside I/O callback ***')
	let fs = require('fs');
	fs.readFile(__filename, (err, data) =>{
		console.log('2) start ');
		process.nextTick(() => {
		  console.log('2) nextTick');
		});
		setTimeout(() => console.log('2) timeout'), 0)
		setImmediate(() => console.log('2) immediate'))
		console.log('2) end');
	});
}
//main2()
/* *** 2) MAIN 2: Inside I/O callback ***
2) start
2) end
2) nextTick
2) immediate
2) timeout 
*/

if (process.argv.length <= 2){
	main1()
}
else {
	main2()
}