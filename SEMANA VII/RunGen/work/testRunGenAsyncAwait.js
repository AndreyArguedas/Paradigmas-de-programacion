/**
 Tests runGen
 @author loriacarlos@gmail.com
 @since 2017
 @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
      Promise.resolve(value) =
	      value if value is a Promise (bypass the Promise)
		  A new Promise resolving to value otherwise
		  (new Promise( t => t(value) ) )
		  
*/

// Some steps
function paso1(){
	console.log('Paso1 empieza')
	return Promise.resolve('paso1')
}

function paso2(value){
	console.log('Paso2 empieza')
	return Promise.resolve('paso2 ' + value);
}


// A simple linear work flow
async function main(){
	console.log("Entre a main")
	let p1 = await paso1();
	console.log(p1)
	let p2 = await paso2(p1);
	console.log(p2)
	return p2;
}
function test() {
	console.log('>>> Testing runGen <<<')
     main()
	      .then( value => console.log('Resultado final: ' + value) );
}

test();