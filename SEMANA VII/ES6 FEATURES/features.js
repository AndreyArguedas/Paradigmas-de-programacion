/*  Suponga que dx se quiere que por default sea cero,
    pero si se setea x se quiere que dx sea x + x

    Se podria con una funcion, pero con setters mas elegante 
*/

a = { x : 0, dx : 0, get X(){ return this.x }, set X(v){ this.x = v; this.dx = 2 * this.x } };

/* Proteger a x de un acceso no valido */

const SX = Symbol('x')
const SDX = Symbol('dx')

class A {

    constructor(){
        this[SX] = 0;
        this[SDX] = 0;
    }

    get X(){ return this[SX]; }

    set X(v){ 
        this[SX] = v;
        this[SDX] = 2 * this.dx;
    } 
}

/* Con lo anterior se proteje SX y SDX de accesos externos al get y el set */

/*  Destructores */

function foo( {x} ) { return x } /* Quiere decir que vien un object que tiene x */

function foo({x=99}) {return x }

foo({y:100}) //Imprime 99 porque a foo solo le importa el x de lo que viene

module.exports = {
    A
}