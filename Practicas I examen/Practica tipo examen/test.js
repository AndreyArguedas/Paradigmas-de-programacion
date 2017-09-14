let ite = (c, x, y) => c ? x : y;
console.log(ite(false, console.log('Yes'), console.log('No')));

/*La razon es ya que los consoles al ser pasador por paramentro
de una vez imprimen, y estos retorna undefined, por eso es que luego del yes
y el no se imprime undefined por el resultado del console.log(NO) */

function test(){

    const a = {
        me : function(){return this} //El this que se hace dentro del "a"
    }

    console.log('****************');
    console.log(a.me() === a);
    console.log(a.me() === this);
}

/* Ejercicio 4 */

const comp = f => g => x => g(f(x));

let f =  x => x + 1;

let g = x => x + 2;

console.log(comp(x => x + 1)(x => x + 2)(9));

console.log(comp(f)(g)(9));

const comp2 = f => x => f(x);

console.log(comp2(x => x + 1)(2))

const h = comp(x => x + x)(x => x * x);

console.log(h(9)); // h =  x  => g(f(x)) 