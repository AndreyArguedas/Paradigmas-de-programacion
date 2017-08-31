/*
  @author loriacarlos@gmail.com
  @since 2017
  Fibo estilo imperativo OO-ES5.
  Tecnica de MEMOIZATION (cache)  
  Mover a estilo FP-ES6 usando combinadores, generadores y features de ES6 DRY
*/

function *generateFibo(start = 0, next = (last, current) => last + current, stop = Infinity) {
	let current = start;
	for (let i = start; i <= stop; i++){
		current = next(current, start);
		yield current;
		start = current- start;
	}
	return {done : true}
}

class Fibo{

	constructor(max) {
		this.max = max || Infinity;
		this.gen = generateFibo(1, (last, current) => last + current ,max);
	}

	next() {
		return this.gen.next().value;
	}

	hasNext() {
		return !this.gen.done;
	}

}


module.exports = {
	Fibo : Fibo
}