/*
  @author loriacarlos@gmail.com
  @since 2017
*/

const {decompose} = require('./decompose'),
      assert = require('assert')
;
const DEFAULT = 91534337;
function test(){
    let ns = process.argv[2];
	let n = ns ? parseInt(ns) : DEFAULT;
	
	console.log(`*** Testing decompose with n=${n}`);
	assert.ok(n % 2 == 1, ns + ' Must be odd integer')
	
	let {s, d} = decompose(n);
	assert(Math.pow(2, s)*d + 1 == n, `Decompose FAIL n=${n}, s=${s}, d=${d}`)
	
	console.log(`>>>R/ ${n} = (2^${s}) * ${d} + 1 (s=${s} d=${d})<<<`)
	
}
try {
  test()
} catch (e){
  console.log(`*** ERROR: ${e.message} ***`)
}