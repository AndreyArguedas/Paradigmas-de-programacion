/*
  @author loriacarlos@gmail.com
  @since 2017
  Input: n odd integer
  Output:  s, d such that n = 2^s*d + 1 with d > 1
  ESTILO: ES5 imperativo (mover a ES6-FP)
  
*/
function decompose(n){
	var s = 0, 
	    d = n - 1;
	while ( !(d % 2) ){
		d >>= 1;
		++s;
	}
	return {s:s, d:d}
}
module.exports = {
   decompose
}