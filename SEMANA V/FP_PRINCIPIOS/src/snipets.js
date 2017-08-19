///////////////////////

	function foo(a){
		let tail = (i, z) => (i < 0) ? z 
									 : tail(i - 1, z.concat( a[i] ))
		;
		
		return tail(a.length - 1, []);
	}
    console.log(foo([1, 2, 3]))

////////////////////////

	function f1(x){return x;}
	function f2(x){return x;}

	let z = 0;
	function g(x){
		return z+=x, z;
	}
	// Si z = g(666) Es f1(z) = f2(z) ?
	console.log(f1(g(666)) == f2(g(666)))


/////////////////////////
    function def(){
	   let y = 999;
	   return x => x + y;  //   lugar de creacion
	}
	function app(){
		let y = 665;
		return def()(1);    //   lugar de aplicacion 
	}

	console.log(app());


   





