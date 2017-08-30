/**
 Exercise with Promise
 @author loriacarlos@gmail.compile
 @since 2017
*/
class PPromise extends Promise {
	static from(value){
		return this.resolve(value)
	}
	static in() {return x => x};
	
	static log(...args){
		return console.log(...args);
	}
	
	constructor(ex = (t, e) => t() ){
		super(ex);	
	}
	continue(s){
		return this.then(it => it);
	}
	
	if (c, t, e){
		return this.then(it => c(it) ? t(it) : e(it));
	}
	static case(c){
		return (typeof c == 'function') ? c : (it => c == it);
	}
	static default(){
		return _ => true;
	}
	switch(...cases){
		return this.then(it => cases.map(c => c[0](it) ? c[1](it) : undefined)
		                            .find(it => it))	                            
	}
	thenAll(...funs){
		throw new Error('thenAll not implemented')
	}
}

module.exports = {
	PPromise
}