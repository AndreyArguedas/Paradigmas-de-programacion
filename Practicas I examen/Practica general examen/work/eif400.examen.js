const fs = require('fs')

const readFileWithFS = (filename, handleData, handleError) =>
	fs.readFile(filename, (error, data) => (error) ? handleError(error) : handleData(data))
;
function testReadFileWithFS(filename){
	console.log(`>>> Reading ${filename} <<<`);
	readFileWithFS(filename, data => console.log(`*** ${filename} bytes read: ${data.length} ***`)
	                       , error => console.error(error))
	console.log(`>>> Reading was deferred <<<`);
};

testReadFileWithFS('eif400.examen.js');


function readFileWithFSPromise(filename){ // Hacer!!
	return new Promise ( (t, c) => {
		fs.readFile(filename, (error, data) => (error) ? c(error) : t(data));
	})
}

function testReadFileWithFSPromise(filename){
	console.log(`>>> Reading ${filename} <<<`);
	readFileWithFSPromise(filename)
	  .then (data => console.log(`*** ${filename} bytes read: ${data.length} ***`))
	  .catch(error => console.error(error));
	console.log(`>>> Reading was deferred <<<`);
}
testReadFileWithFSPromise('eif400.examen.js');





