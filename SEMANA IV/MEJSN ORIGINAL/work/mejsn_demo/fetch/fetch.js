/*
  @author loriacarlos@gmail.com
  @since 2017
  @see https://www.npmjs.com/package/node-fetch
*/
var fetch = require('node-fetch');

const PORT = process.env.PORT || 8080;
const URL_API = `http://localhost:${PORT}/api`;
const URL_API_BEARS = `http://localhost:${PORT}/api/bears`;
const BEEP_BACK = '\7\b'

function testAPI(){
	let timer = setInterval(()=> console.log(BEEP_BACK), 1000);
	setTimeout(()=> timer.close(), 10000)
	fetch(URL_API)
		.then(function(res) {
			return res.json();
		}).then(function(json) {
			console.log(json);
		}).catch(err => {
			console.error('Server Error ')
		})
	;	
}

function insert(name){
    return fetch(URL_API_BEARS, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body : JSON.stringify({name : name}) });
}


if (process.argv.length > 2) {
   let name = process.argv[2];
   console.log(`"${name}" will be inserted`);
   insert(name)
        .then(function(res) {
			return res.json();
		})
		.then(function(json) {
			console.log(json);
		})
		
} else {
   console.log('API will be tested');
   testAPI()
}