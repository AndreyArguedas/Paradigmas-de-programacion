/**
   Aritmetica en el calculo lambda
   @author loriacarlos@gmail.com
   @since 2017
   
*/
let log = (...args) => console.log(...args)
// Numeros de Church : idea n = s => z => s(s(... s(z) ...)) con n s "estaqueadas"
let ZERO = s => z => z;

let SUCC = g => s => z => s(g(s)(z));

let PLUS = (m) => (n) => ((m (SUCC))(n))

let MULT = m => n => y => m((n)(y)) //NOT WORKING YET

let ONE = SUCC(ZERO);
let TWO = SUCC(ONE);
let NATS = [ZERO, SUCC(ZERO), SUCC(SUCC(ZERO)), SUCC(SUCC(SUCC(ZERO)))];
let SUMS = [PLUS(ZERO)(ONE), PLUS(ONE)(TWO), PLUS(TWO)(TWO)];
let MULTS = [MULT(ONE)(ONE)(ONE), MULT(TWO)(ONE)(ONE), MULT(TWO)(TWO)(ONE), MULT(ONE)(TWO)(ONE)] //NOT WORKING YET
let PRED = [PRED(ONE),PRED(TWO)]

// Tools para convertir numeros de Church a numeros visibles

let s = n => (typeof n == 'function') ? n : ("s(" + n + ")");

let see = nat => nat(s)("0");

let stack = n => (typeof n == 'function') ? n : [n];

function seePacked(nat){
	let down = a => (a.length == 0) ? 0 
	                                : (1 + down(a[0]));
		
	return down(nat(stack)([]))
};

function test1(){
  NATS.forEach(n => log(see(n) + " = " + seePacked(n)));
}

function test2(){
	SUMS.forEach( n => log(see(n) + " = " + seePacked(n)))
}

function test3(){
	MULTS.forEach( n => log(see(n) + " = " + seePacked(n)))
}

function generalTest(){
	console.log("Testing NATS")
	test1()
	console.log("\nTesting SUMS")
	test2()
	console.log("\nTesting MULTS")
	test3()
	console.log("\nFinished!")
}

generalTest()

module.exports = {
	ZERO : ZERO,
	ONE : ONE,
	TWO : TWO,
	SUCC : SUCC,
	PLUS : PLUS,
	MULT : MULT,
	NATS : NATS,
	log : log,
	test1 : test1,
	test2 : test2,
	test3 : test3
}












