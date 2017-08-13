/*
  @author loriacarlos@gmail.com
  @since 2017
  Input: n odd integer
  Output:  s, d such that n = 2^s*d + 1 with d > 1
  ESTILO: ES5 imperativo (mover a ES6-FP)
  
*/
function decompose(n){
	return fun_decompose(n, 0, n - 1); 
}

function fun_decompose(n,s,d){
	console.log("ss");
	var dec = (n, s, d) => {return ((d % 2)) ? {s:s, d:d} : fun_decompose(n, ++s, d>>=1)};
	return dec(n, s, d);
}

function def(n){
	let s = 0;
	let d = n - 1;
}

module.exports = {
   decompose
}