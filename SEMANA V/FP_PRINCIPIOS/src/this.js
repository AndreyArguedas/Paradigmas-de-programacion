const y = 666;
function foo(x){
	return x + this.y;
	
}

function bind_foo(y){
	return foo.bind( {y} );
}

module.exports = {
	y, foo, bind_foo
}