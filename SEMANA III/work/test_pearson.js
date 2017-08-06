let test1 = require('./test_x_y_01.js');
let test2 = require('./test_x_y_02.js');

let {pearson} = require('./pearson.js')

function test_pearson(test, x, y){
	let r = pearson(x, y);
	console.log(`*** test ${test} has r_xy = ${r} ***`);	
}
test_pearson('test_x_y_01', test1.x, test1.y)
test_pearson('test_x_y_02', test2.x, test2.y)