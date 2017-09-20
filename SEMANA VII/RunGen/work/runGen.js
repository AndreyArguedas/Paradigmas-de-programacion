/**
 Runs a generator which yields Promises
 @author loriacarlos@gmail.com
 @since 2016
 @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
      Promise.resolve(value) =
	      value if value is a Promise (bypass the Promise)
		  A new Promise resolving to value otherwise
		  (new Promise( t => t(value) ) )
		  
*/

function runGen(generator) {
	console.log("Entre a run gen");
	function handleValue(newValue){ // newValue = {value : _, done:_ }
	  console.log("Estoy haciendo handle value");
	  let {value, done} = newValue;
	  console.log("VALUE ES", value)
	  return  done  ? value
	                : Promise.resolve(value)
					         .then(value => Promise.resolve(it.next(value)))
							 .then(handleValue)
	   	
	}
	
	function start(){
		console.log("Hago start");
		return Promise.resolve(it.next())
	                  .then(handleValue)
	}
	//
	console.log("Haciendo lo de arguments")
	const args = Array.prototype.slice.call(arguments, 1); //Convierte arguments en array, mas elegante seria con array from
	const it = generator.apply(this, args) //Lama a main con 1,2,3, it es instancia de main e iterador de main
	console.log("Aun no he empezado")
	return start();
	
}

module.exports = {
	runGen
}