/**
   Aritmetica en el calculo lambda
   @author loriacarlos@gmail.com
   @since 2017
   
*/
let log = (...args) => console.log(...args)
// Numeros de Church : idea n = s => z => s(s(... s(z) ...)) con n s "estaqueadas"
let ZERO = s => z => z;

let SUCC = g => s => z => s(g(s)(z));

let ONE = SUCC(ZERO);
let TWO = SUCC(ONE);
let NATS = [ZERO, SUCC(ZERO), SUCC(SUCC(ZERO)), SUCC(SUCC(SUCC(ZERO)))];

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


let PLUS = (m) => (n) => ((m (SUCC))(n))

module.exports = {
	ZERO : ZERO,
	ONE : ONE,
	TWO : TWO,
	SUCC : SUCC,
	PLUS : PLUS,
	NATS : NATS,
	log : log,
	test1 : test1
}












