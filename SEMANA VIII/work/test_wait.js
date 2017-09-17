/**
  Demo para estudiar el event loop (en node)
  @author loriacarlos@gmail.com
  @since 2017
  @see wait.js
*/
let fs = require('fs')
;
let {wait, schedule} = require('./wait')
;
const WAIT_TIME = 5000;
const WAIT_START = 100;
const DEFAULT_CB = 
      filename => 
	      data => console.log(`>>> File: ${filename}  -> ${data.length} bytes were read ${(new Date())} <<<`);
	  
function readFile(filename, cb = DEFAULT_CB(filename)){
	// Schedule a wait
	schedule(() => wait(WAIT_TIME, 'Async-1'), WAIT_START);
	// Request kernel to read the file async
	fs.readFile( filename, (err, data) => {
		console.log(filename + ' was read at ' + (new Date()));
		if (err){
			console.log(err.Error);
			return;
		}
		return cb(data);
	});
	console.log('>>> readFile scheduled ' +  filename +  '  at ' + (new Date()));
	
}
try {
     var file = process.argv[2];
     readFile('../data/' + file);
} catch (e){
	console.error('>>> Invalid or not given parameter <<<')
}

