/*
	To test decompose with a bunch of numbers we are trying to achieve 
	something similar to Java 8 Streams. For example:
	IntStream.range(0, n).filter(element -> element % 2 != 0);
*/

function oddNumbers() {

  let _stream = n => { return { value: n, next() { return _stream(n + 2); } }; }
 
  return () => _stream(3);
}

function numbersToArray(n, str){
	let toArr = (n, str, accum) =>{ if (n === 0) return accum; 
								  else {const { value, next } = str();
								  return toArr(n - 1, next, accum.concat(value))};
  }
 
  	return toArr(n, str, []);
}
 


/* This function returns how many recursion calls are necesary to find 
   s, d such that n = 2^s*d + 1 with d > 1
*/

function counterDecompose(n) {
	return count_decompose(n, 0, n - 1); 
}

function count_decompose(n, s, d, c = 1) {
	let count = (n, s, d) => { return ( (d % 2) ) ? c : count_decompose(n, ++s, d>>=1, ++c) };
	return count(n, s, d, c);
}


module.exports = {
   counterDecompose, oddNumbers, numbersToArray
}

