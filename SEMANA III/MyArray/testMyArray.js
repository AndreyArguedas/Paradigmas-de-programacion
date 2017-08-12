/*
  @author loriacarlos@gmail.com
  @since 2017
*/
const {MyArray} = require('./MyArray')

let a = new MyArray(3, 5, 6, -5, 0, 8, -10, 0)

const testMap = new Map([
    ['reduce', {fun : (z, x) => z * x, init: 1}],
	['reduceBreak', {fun : (z, x) => z * x, init: 1, stop: x => x == 0}],
	['map', {fun : x => x * x}],
	['filter', {fun : x => x < 0}],
	['forEach', {fun : x =>  (x) ? console.log(x) : null}],
	['zip', {other : a.slice(0).reverse()}],
	['every', {fun : x => x < 0}],
	['some', {fun : x => x < 0}],
])
function test(){
	console.log(`Test MyArray : ${JSON.stringify(a)}`)
	for(let [tc, {other, fun, init, stop}] of testMap) {
		try { 
		     console.log('>>> Starts ' + tc )
			 let args = [fun, init, stop, other].filter(x => x)
			 console.log(`*** ${tc}(a) --> ${JSON.stringify(a[tc](...args))} ***`)
	    } catch (e){
			console.log('Failed ' + tc + '\n' + e);
		} finally {
		     console.log('>>> Ends ' + tc )
			 console.log()
		}
    }	
}
test()