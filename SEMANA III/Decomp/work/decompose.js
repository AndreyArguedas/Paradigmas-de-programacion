/*
  @author loriacarlos@gmail.com
  @since 2017
  Input: n odd integer
  Output:  s, d such that n = 2^s*d + 1 with d > 1
  ESTILO: ES5 imperativo (mover a ES6-FP)
  
*/
function decompose(n){
  let iterator = gen(n, 0, n - 1); //n, s, d
	return fun_decompose(iterator); 
}

function fun_decompose(iterator){
  let iteration = iterator.next()
  return iteration.value.d % 2 ? iteration.value : fun_decompose(iterator)

	//let dec = (n, s, d) => { return ( (d % 2) ) ? {s:s, d:d} : fun_decompose(n, ++s, d>>=1) };
	//return dec(n, s, d);
}

function* gen(n, s ,d){
  while(d % 2 == 0)
    yield {s : ++s, d : d>>= 1}
}


module.exports = {
   decompose
}