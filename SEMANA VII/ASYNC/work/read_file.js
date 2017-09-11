/*
 @author loriacarlos@gmail.com
 @since 2017
*/

fs = require('fs')
var file = process.argv[2] || 'read_file.js';
console.log('Reading ' + file);
// Reading sync
fs.readFile(file, 'utf8', (err, data) => { // Callback
  if (err) {
    return console.log(err);
  }
  console.log('OK ' + data.length + ' bytes were read');

});
console.log('\n*** Look! Not blocked ***\n');

function readFileAsPromise(file, enc){
	 return new Promise((res, rej) => {
			 fs.readFile(file, enc,  
			   (err, data) => {
				 if (err) rej(err)
				 else res(data)
	 })});
	 					 
}  