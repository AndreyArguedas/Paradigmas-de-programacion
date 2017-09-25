function * generator() {
	let i = 0;
	while(true){
		yield Math.pow(i,10);
		i++;
	}
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function *composeGenerator() {
	yield 1;
	yield * anotherGenerator();
	//A return here will stop it
	yield 3;
}

function * anotherGenerator() {
	yield 2;
}

let iterator = composeGenerator();

console.log(iterator.next()); 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());