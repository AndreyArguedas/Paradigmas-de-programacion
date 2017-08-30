/**
*/
function main(a, b, c, d){
 // ...	 @return d(a(), b(a()), c())	
};

const assert = require('assert');

function main(){
	var y = 666;

	const z = () => 200;

	function f(){
		let y = 0;
		return this.y * 10;
	}

	const a = {
		y : 777,
		z : f,
		w : () => f(),
		f : (x = 1) => 999 + x + z(),
		me : function(){return this},
		self : () => this
	}
	console.log('0) a =', a)
	console.log('1) a.z              =', a.z())
	console.log('2) a.w              =', a.w())
	console.log('3) a.f()            =', a.f())
	console.log('4) a.me() == a      =', a.me() == a)
	console.log('5) a.self() == this =', a.self() == this)

	assert.ok(this == global)
}

main()