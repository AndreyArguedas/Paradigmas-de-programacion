/*
  @author loriacarlos@gmail.com
  @since 2017
  Demo using a Generator and an Iterable. 
  Notice Symbol.iterator
*/

const NEVER = x => false;

function* iterator(start = 0, next = x => x + 1, stop = NEVER){
    for (let i = start; !stop(i); ){
		yield i;
		i = next(i);
	}
	return {done : true}
}

class Iterate {
	constructor(start, next, stop){
		[this.start, this.delta, this.stop] = [start, next, stop];
	}
	[Symbol.iterator](){
	  this.iter = iterator(this.start, this.delta, this.stop)
      return this;
	}
	next(){
		return this.iter.next();
	}
}
module.exports = {
   NEVER,
   Iterate,
   iterator
}