/*
 @autor
 @autor
 @autor
 @autor
 Generates integers less than a maximun and not multiple of elements from a given list
*/
const {iterator} = require('./iterations')

function q1Generator(list, max){
	return generator(list, max);
}

function *generator(list, max){
	let i = 0;
	while( i <= max){
		if(list.every( (e) => i % e))
			yield i;
		i++;
	}
}

module.exports = {
	q1Generator	
}