/* EJERCICIO OPTATIVO DE UN EXAMEN DE LORIA SOBRE REPRODUCCION DE CONEJOS */
function rec(n){
	if(n==0)
		return 5;
	return((n%2==0)?rec(n-1)+3:rec(n-1)-1);
}

/* 2^n recursivo */
function g(n){
	if(n<=1)return n;
	return g(n-1)+g(n-1);
}

/*Binary search recursivo retorna la posicion donde encuentra el elemento*/

function recursiveBinarySearch(a,element){
	if(a.length > 0){
		var half = Math.floor(a.length / 2);
		if(a[half] === element)
			return half;
		else{
			if(element < a[half])
				return recursiveBinarySearch(a.slice(0,half),element);
			else
				return recursiveBinarySearch(a.slice(half + 1,a.length),element);
		}
	}
	return -1;
}

function testrbs(){
	var a = [4,8,15,19,25];
	console.log(recursiveBinarySearch(a,4));
	console.log(recursiveBinarySearch(a,8));
	console.log(recursiveBinarySearch(a,19));
	console.log(recursiveBinarySearch(a,15));
	console.log(recursiveBinarySearch(a,25));
	console.log(recursiveBinarySearch(a,3));
}

/* Ulam es una sucesion que hace que cualquier entero psitivo vuelva a 1 */

function printUlam(n){
	if(n === 1)
		console.log("ARRIVED TO 1!");
	else{
		if(n % 2 === 0){
			console.log('Ulam (' + n +' ) = ' + n );
			printUlam(n /2);
		}
		else{
			console.log('Ulam (' + n +' ) = ' + n );
			printUlam(n * 3 + 1);
		}
	}
}

function testUlam(){
	console.log('Ulam de 10');
	printUlam(10);
	console.log('Ulam de 5');
	printUlam(5);
}

function printBinary(n,str){
	if(n === 0 || n === 1){
		str = n + str;
		console.log(str);
	}
	else{
		str = n % 2 + str;
		printBinary(Math.floor(n / 2),str);
	}
}

function voltear(n){
	if(n < 10)
		return n;
	else{
		var x = "" + n;
		return (n % 10) * Math.pow(10,x.length - 1) + voltear(Math.floor(n / 10));
	}
}

function sumaDigitos(n){
	if(n < 10)
		return n;
	else{
		return n % 10 + sumaDigitos(Math.floor(n / 10));
	}
}
