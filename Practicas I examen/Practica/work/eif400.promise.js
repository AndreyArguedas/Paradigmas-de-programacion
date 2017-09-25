/**
 Exercise with Promise
 @author loriacarlos@gmail.compile
 @since 2017
*/
class PPromise extends Promise {
	static from(value){
		return this.resolve(value) //promise.resolve
	}
	static in() {return x => x};
	
	static log(...args){
		return console.log(...args);
	}
	
	constructor(ex = (t, e) => t() ){
		super(ex);	//Lo mismo que con new Promise( (t, c) => t() )
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
		console.log(this) //this = La promesa con 6
		console.log(funs)
		return funs[0].reduce( (z, x) => {return Promise.resolve(this).then(res => x(res))},this)
		//funs[0].reduce( (z, x) =>  x(z), 6); 
		//return Promise.resolve(finalValue);
	}
}

function test(){
	PPromise.from(6).thenAll([x => x * x, x => x + 10]).then(x => console.log(x))
}

test()

module.exports = {
	PPromise
}