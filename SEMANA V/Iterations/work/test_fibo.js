/*
  @author loriacarlos@gmail.com
  @since 2017
  Testing Fibo iterator ES5 style
*/

var fib = require('./fibo_iter')
var Fibo = fib.Fibo;

function test(){
	var n   = parseInt(process.argv[2]) || 10,
	    max = parseInt(process.argv[3]) || (n + 1);
	console.log('>>> Testing fibo iterator : n = ' + n + ' max = ' + max )
	var f50 = new Fibo(max);
	for (var i = 2; f50.hasNext() && i <= n; i++){
		console.log(i + ') ' + f50.next())
	}
	
}

test();