function Foo(x){
	this.x = x;
}

var foo = new Foo(6); //Aqui apunta al this de Foo
var wtf = Foo(9); //Aqui apunta al this de global/window

var obj = {x : 0};
var foo2 = Foo.call(obj, 777); //Aqui falta new
console.log(foo2, obj); //Foo2 da indefinido por la falta de new arriba

var updater = Foo.bind(obj); //Si la llaman actualiza obj
updater(99);
console.log(obj); // {x : 99}
console.log(updater);//[Function: bound Foo]