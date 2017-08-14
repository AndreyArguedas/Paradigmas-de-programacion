/*
  @author loriacarlos@gmail.com
  @since 2017
  ES5 used intentionally as exercise
*/
let assert = require('assert'),
    {A, B} = require('./classes')
;
// Implement A and B using ES5 following classes A and B from Model.java
function testModel(){
	    // With A
		var a; var r;
		a = new A(666);
		r = a.f();
		assert.ok( 666 * 666  == r,  "Test of A fails");
		console.log(">>> r of A = " + r);
		// With B
		a = new B(666);
		r = a.f();
		assert.ok( 666 * 666 / 2 == r, "Test of B fails");
		console.log(">>> r of B = " + r);
}
try { 
     console.log("*** Testing Model ***");
     testModel()
} catch (e){
	console.log('*** Sorry: Your answer is not working yet ***')
}