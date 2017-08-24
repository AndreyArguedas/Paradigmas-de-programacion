/*
  @author loriacarlos@gmail.com
  @since 2017
  Fibo estilo imperativo OO-ES5.
  Tecnica de MEMOIZATION (cache)  
  Mover a estilo FP-ES6 usando combinadores, generadores y features de ES6 DRY
*/

function Fibo(max){
	this.cache = [1, 1];
	this.max = max || Infinity;
}
// Memoized calculation
Fibo.prototype.nth = function(n){
	var cache = this.cache;
	var last = cache.length - 1;
	this.check(n);
	
	if ( n <= last ) {
		return cache[n];
	}
	for (var i = last + 1; i <= n; this.next(), i++){
	}
	return cache[n];
}

Fibo.prototype.check = function(n){
	if ( n >= 0 && n <= this.max );
	else {
		throw new Error('Out of range:' + n)
	}
}
// Iterator/Iterable Pattern
Fibo.prototype.hasNext = function (){
	return this.cache.length <= this.max
}

Fibo.prototype.next = function (){
	var cache = this.cache,
		last  = cache.length - 1; 
	this.check(last + 1);
	;
	cache.push(cache[last] + cache[last - 1]);
	return  cache[last + 1];	
}

Fibo.prototype.current = function (){
	var last = this.cache.length - 1;
	return {n : last, value : this.cache[last]}
}
// End of Fibo

module.exports = {
	Fibo : Fibo
}