const y = 666;
function foo(x){
	return x + this.y;
	
}

function bind_foo(y){
	return foo.bind( {y} ); //Despues del bind bind_foo(8)(8) //16
}


module.exports = {
	y, foo, bind_foo
}