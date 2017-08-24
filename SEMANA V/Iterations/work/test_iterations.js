/*
  @author loriacarlos@gmail.com
  @since 2017
  Demo/Tests iterations.js
  
*/
const {Iterate, iterator} = require('./iterations')

function test() {
	console.log('>>> Test Iterations <<<')
	///////////////////////////////////////////////
	// Case 1: Using the generator called iterator
	const one = iterator(3, x => x + 3, x => x > 30);
	console.log('*** Generate (testing iterator) ***')	
	for( var v of  one ) 
		console.log(v)

	////////////////////////////////////////////////
	// Case 2: Same as 1 but Using as an  ES6 class
	const two = new Iterate(3, x => x + 3, x => x > 30 )

	console.log('*** Iterate (Testing Iterable Class) ***')	
	for( var v of  two ) 
		console.log(v)
	
	///////////////////////////////////////////////
	// Case 3
	//////////////// Exercise (Question 1)/////////////////////
	// Writing your own generator
	// It must generate integers less than a maximun and not multiple of any element of a given list
	// Using FP. Be DRY.
	try {
		const {q1Generator} = require('./question1')
		const list = [2, 3, 5, 7], 
		      max = 50;
		const three = q1Generator(list, max);
		console.log('*** Iterate (Q1 generator) ***')
        console.log('list = ' + JSON.stringify(list), 'max = ' + max)		
		for( var v of  three ) 
			console.log('v = ' + v)
	} catch (e){
	    console.log('*** Your "q1Generator" iterator is not working yet !!! ***')
        console.log(e);			
	}
}

test();