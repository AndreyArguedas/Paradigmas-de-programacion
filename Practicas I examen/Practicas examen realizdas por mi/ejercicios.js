//Ejercicio 7

let b = [50, 6, 18, 5];

let maxMin = (a) => {

    let m = a.reduce( (z, x) => {
        if(x < z.min) z.min = x;
        if(x > z.max) z.max = x;
        return z;
    },  {min : a[0], max : a[0]} );

    return (m.max + m.min) / 2;
}

console.log(maxMin(b));

//Ejercicio 8

//Con reduce
function contains(x, l, f = (elem, comp) => elem == comp){
    return l.reduce( (z, e) => f(e, x) ? z = true : z = z , false);
}

let l = [87,57,99];
console.log(contains(57, l));
console.log(contains(120, l));

//Con rec de cola

function containsCola(x, l, f = (elem, comp) => elem == comp){
    function cola(x, l, f){
        console.log(l[0]);
        if(!l.length) return false;
        if(f(x, l[0])) return true;
        return cola(x, l.slice(1,l.length), f);
    }
    return cola(x, l, f);
}

let l = [87,57,99];
console.log(containsCola(57, l));
console.log(containsCola(120, l));

//Merge sort

let m = [108, 15, 50, 4, 8, 42, 23, 16];

function mergesort(m){
    let result = [];

    function minBetweenLists(l1, l2){
        let sortedlists = [];
        for(let i = 0; i < l1.length + l2.lenght; i++){
            if(l1.length > 0 && l2.length > 0)
                let minLeft = Math.min(...l1);
                let minRight = Math.min(...l2);
                //Estoy pegado mejor sigo con otro xdxdxd

        }
            
    }

    function domerge(left, right, result){
        if(left.length)
            let minLeft = Math.min(...left);
        if(right.length)
            let minRight = Math.min(...right);
        result.push(Math.min(minLeft, minRight))
    }

    function merge(left, right){
        if(left.length > 1 && right.length > 1) 
            merge(left.slice(0, left.length /2), right.slice(right.length /2 + 1, right.length));
        domerge(left, right, result);
        return result;
    }

    return m.length <= 1 ? m : merge(m.slice(0, m.length /2), m.slice(m.length /2 + 1, m.length));

}

// Ejercicio 10

//Recursiva

function copy(x, n){

    function copyCola(x, times, list){
        if(times == n)
            return list;
        else
            return copyCola(x, ++times, list.concat(x));
    }

    return copyCola(x, 0, []);
}

console.log(copy(54,5));

//Combinador

function copy(x, n){
    return Array.from( new Array(n), (e) => x);
}

console.log(copy(54,5));

//Ejercicio 11

//Combinador

function innerProd(l1, l2){
    if(!l1.length && !l2.length)
        return 0;
    else{
        return l1.reduce( (z, x, i) => z + x * l2[i] , 0);
    }
}

let l1 = [50, 98, 100];
let l2 = [47, 16, 57];

console.log(innerProd(l1, l2));

//Recursivo

function innerProdRec(l1, l2, acum){
    if(!l1.length && !l2.length)
        return acum;
    return innerProdRec(l1.slice(1,l1.length),l2.slice(1,l2.length),acum += l1[0] * l2[0]);
}

let l3 = [50, 98, 100];
let l4 = [47, 16, 57];

console.log(innerProdRec(l3, l4, 0));

//Ejerccio 12

function split(l, pivot, f = (x, piv) => x < piv){
    return l.reduce( (z, x) => {f(x, pivot) ? z[0].push(x) : z[1].push(x); return z}, [new Array, new Array]);
}

let l = [89,57,21,12,35,1457,964,984];

console.log(split(l, 100));

//Testing with objects

let l = [{name : "a"}, {name: "g"}, {name: "l"}]

console.log(split(l, "b", (x, piv) => x.name > piv));

//Ejercicio 13

function majority(l){
    return Math.abs(l.filter((x) => x == true).length - l.filter( (x) => x == false).length);
}

let l = [true, false, false, true, false];

console.log(majority(l));

//Ejercicio 14

function frecuencias(l, g, n){
    return l.reduce( (z, x) => { g(x) !== 0 ? z[g(x)]++ : z[n]++; return z;},
                               Array.from(new Array(n + 1), x => 0));
}

let grupo = [{gender : "male"}, {gender : "female"}, {gender : "male"}, {gender : "undefined"}];

function agrupacion(x){
    let group = 0;
    
    switch (x.gender){
        case "male" : group = 1; break;
        case "female" : group = 2; break;
    }

    return group;
}

console.log(frecuencias(grupo, x => agrupacion(x), 3));

//Ejercicio 15

let l = [5, 9, 14];

console.log(l.map( (x) => Math.pow(x, 3) )); //Con map

console.log(l.reduce( (z, x, i) => { l[i] = Math.pow(x, 3); return z; }, l)); //Con reduce

//Ejercicio 16


//Ejercicio 17

function gcd(n, m){
    function cola(n, m){
        if( n === m)
            return n;
        else{
            if(n > m)
                return cola(n - m, m);
            else
                return cola(n, m - n);
        }
    }
    return cola(n, m);
}

console.log(gcd(100,24));

//Ejercicio 18

class Person{

    constructor(name, edad, telefono){
        this.name = name;
        this.edad = edad;
        this.tel = telefono;
        this.friends = [];
    }

    addFriend(f){
        this.friends.push(f);
    }
}

let p1 = new Person("andrey", 21, "892-6543-7865");
let p2 = new Person("chen", 21, "992-7676-7676");
let p3 = new Person("guns", 21, "292-9090-9090");
let p4 = new Person("kim", 20, "911-1111-1221");

p1.addFriend(p2);
p2.addFriend(p1);
p2.addFriend(p3);
p2.addFriend(p4);
p3.addFriend(p4);
p4.addFriend(p3);
p1.addFriend(p3);

function contactosDe(p, criterio, extra = x => x){
    return extra(p.friends.reduce( (z, x) => {if(criterio(x, p)) z.push(x); return z}, []));
}

console.log(contactosDe(p2, (x, p) => p.friends.includes(x)));
console.log(contactosDe(p2, (x, p) => x.tel.match(/^[89]/)));
console.log(contactosDe(p1, (x, p) => !x.friends.includes(p)));
console.log(contactosDe(p1, (x, p) => p.friends.includes(x), (a) => a.reduce( (z, x, i) => z + x.edad, 0) / a.length ));


//Ejetcicio 20

function pascal(n){ //Version que se me ocurrio, bastante larga

    function cola(n, acum, result){
        if(n < 0) //Al llegar a una fila inferior a 0
            return result;
        else{
            result.push(sacarFila(acum, result));
            return cola(n - 1, acum + 1, result);
        }
    }

    function sacarFila(acum, result){
        if(result.length === 0) //Caso base - Fila 0
            return [1];  
        else
            return rellenarFila(acum, 0, result[result.length - 1], []);
    }

    function rellenarFila(acum, index, last, arr){ //Llenar la fila acum con los numeros correspondientes
        if(index == acum + 1)
            return arr;
        else{
            if(index - 1 == -1 || index  == last.length)
                arr.push(1);
            else
                arr.push(last[index - 1] + last[index]);
            return rellenarFila(acum, index + 1, last, arr);
        }
    }

    return cola(n, 0, []).join('\n');
}

console.log(pascal(0));
console.log(pascal(4));


/* SECCION 2 */

//Ejercio 2.1
function cuadrados(n){
    let i = 1;
    return Array.from( new Array(n), x => i++ ).map( x => x * x)
}

console.log(cuadrados(4));

//Ejercio 2.2
function cuantosPrimos(a){

    function isPrimo(x, count, times){
        if(count >= x / 2)
            return times == 1;
        else
            return (x % count == 0) ? isPrimo(x, count + 1, times + 1) : isPrimo(x, count + 1, times);
    }

    return a.filter( x => isPrimo(x, 1, 0) ).length;
}

console.log(cuantosPrimos([7, 23, 35, 60, 98, 3, 100]));

console.log(cuantosPrimos([10, 48, 74, 88, 100]));

//Ejercio 2.3

function diag(l){
    l.reduce( (z, x) => {console.log(z + x); z += " "; return z}, "");
}

console.log(diag(['a','b','c','d','e']));

//Ejercicio 2.4

function aproxSeno(eps, x){

    function cola(eps, x, y = 0){
        if( Math.abs(taylor(x) - y) < eps) //La vara era no usar Math, pero para el abs me dio pereza
            return y;
        else
            return cola(eps, x, y + 1);
    }

    function taylor(x){
        //Duda con la n de la formula, es infinita?
    }
    
    return cola(eps, x);
}

//Ejercicio 2.5

function esSegmento(xs, ys){
    if(ys.length < xs.length)
        return false;
    else
        return xs.reduce( (z, x, i) =>  {if(x != ys[i]) z = false; return z}, true) ? true : esSegmento(xs, ys.slice(1, ys.length));        
}

console.log(esSegmento([1, 2, 3], [7, 4, 1, 65, 1, 2, 3]));
console.log(esSegmento([1, 2, 3], [7, 4, 1, 9, 1, 2, 5]));

//Ejercicio 2.6

//La idea es ir por cada elemento, sacarlo del array y preguntar si hay otro igual, si no lo hay se vuelve a meter al array

function eliminarDuplicados(a) {
    return a.reduce( (z, x, i) => {
        z.splice(i, 1);
        if(!z.includes(x))  z.push(x);
        return z;
    }, a); 
}

console.log(eliminarDuplicados([4,6,9,5,4,9,6,3]));

//Ejercicio flatten diagnostico

function flatten(a){
    
    function flat(a, result){
        if(!Array.isArray(a))
            return result.concat(a);
        else{
            return a.length == 0 ? result : flat(a.slice(1), flat(a[0], result));
        }
    }

    return flat(a, []);
}

console.log(flatten([[[1, [2]], [[]], [[[3]]],4]]));

//Ejercicio 2.7
function sc(a){ 

    function cola(a, index, result, anterior) {
        if(index >= a.length)
            return result;
        else{
            result.push(subLista(index, anterior)); //Las sublistas de cantidad index*/
            anterior = result[result.length - 1].length == 0 ? [[]] : result[result.length - 1];
            return cola(a, index + 1, result, anterior);
        }
    }

    function subLista(index, anterior){
        return a.reduce( (z, x) => z.concat(grupos(x, index, anterior)),[]);
    }

    function grupos(x, index, anterior){
        return anterior.filter( f => allowed(x, f, index)).map( e => e.concat(x));
    }

    function allowed(x, e, index){
        if(e.length < index){
            if(!e.length)
                return true;
            else if(x > e[e.length - 1])
                return true;
        }
        return false;
    }

    return cola(a, 0, [], []);

}

console.log(sc([6, 1, 4, 8]));

/* chen version */

Array.prototype.first = function() {
    return this[0];
}
Array.prototype.last = function() {
    return (this.length === 0) ? -Infinity
                               : this[this.length - 1];
}

let sc = (l) => {
    let fillOne = (l, act, total) => {
        console.log(`   --- list: ${l} - act: ${act} - total: ${total}`)
        if(l.length === 0)      return total;
        if(l.first() > act.last()) {
            act = act.concat(l.first());
            total = total.concat([act]);
        }
        return fillOne(l.slice(1), act, total);
    }
    let fillAll = (l, total) => {
        if(l.length === 0)  return total.concat([[]]);
        console.log(`Filling ${l.first()}`)
        total = total.concat(fillOne(l, [l.first()], [[l.first()]] ));
        return fillAll(l.slice(1), total);
    }
    return fillAll(l, []);
}


let test = () => {
    console.log(sc([6,1,4,8]));
}

test();

//Ejercicio 2.8

function segrec(a) {

    function cola(a, curr, res){
        if(!a.length){
            return curr.lenght == 0 ? curr : res.concat([curr]);
        } 
        if(allowed(a[0], curr))
            return cola(a.slice(1, a.length), curr.concat(a[0]), res);
        else{
            
            res.push(curr);
            return cola(a.slice(1, a.length), [a[0]], res);
        }
            
    }

    function allowed(a, curr){
        if(curr.length == 0)
            return true;
        if(a > curr[curr.length - 1])
            return true;
        return false;
    }

    return cola(a, [], [])
}

console.log(segrec([1,3,5,2,9,0,6]));
//Ejerccio 2.10

function mapAlt(list, f1, f2){
    return list.map( x => list.indexOf(x) % 2 == 0 ? f1(x) : f2(x));
}

console.log(mapAlt([40, 20, 95], x => x + x, x => x - x));

///Llamando a array.prototype

Array.prototype.mapAlt = function(f1, f2)  {
    return this.map( x => this.indexOf(x) % 2 == 0 ? f1(x) : f2(x));
}

let rest = [40, 20, 95].mapAlt(x => x + x, x => x - x);
console.log(rest);

//Ejercicio 2.11

function luhm(card) {
    return card.mapAlt(x => x, x => (2 * x > 9) ? 2 * x - 9 : 2 * x)
                .reduce( (z, x) => z + x, 0) % 10 == 0;
}

console.log(luhm([1, 2, 3, 4, 5, 6, 7]));

//Ejercicio 2.12

function multiplicar(b, lista){
    function cola(b, lista, result, acarreo){
        if(!lista.length){
            acarreo > 0 ? result.unshift(acarreo) : result;
            return result;
        } 
        else{
            let operacion = lista.pop() * b + acarreo;
            acarreo =  operacion >= 10 ? Math.floor(operacion / 10) : 0;
            operacion = operacion >= 10 ? operacion % 10 : operacion;
            result.unshift(operacion);
            return cola(b, lista, result, acarreo);
        }   
    }

    return cola(b, lista, [], 0);
}

console.log(multiplicar(3, [9, 8, 4]));
console.log(multiplicar(5, [6, 4, 1, 9, 9, 9]));

//Ejercicio 2.14

function numDifAsc(a) {

    function cola(a, result){
        if(!a.length)
            return result;
        else{
            if(!result.includes(a[0])) 
                result.push(a[0]);
            return cola(a.slice(1, a.length), result);
        }
            
    }

    return cola(a, []).length;
}

console.log(numDifAsc([1,2,2,5,5,5,5,7,8])); //Es O(n) y sirve con listas desordenadas
console.log(numDifAsc([5,1,4,3,8,8,8]));

//Ejercicio 2.15

function numDifAscCombinador(a){
    return a.reduce( (z, x) => {if(!z.includes(x)) z.push(x); return z;},[]).length
}

console.log(numDifAscCombinador([1,2,2,5,5,5,5,7,8])); //Es O(n) y sirve con listas desordenadas
console.log(numDifAscCombinador([5,1,4,3,8,8,8]));

//Ejercicio 2.16

function lcs(n){

    function cola(original, result, index) {
        if(index == original.length)
            return result;
        else {
            result.push(lista(original, result, index, index + 1,[])); //Saca las listas de los elementos que empiezan con index
            return cola(original, result, index + 1);
        }
    }

    function lista(original, result, index, count, aux) {
        if(count == original.length)
            return aux;
        else{
            if(sumInArray(aux) === n)
                return aux;
            else{
                //Repensarlo
            }
        }
    }

    function sumInArray(aux){
        return aux.reduce( (z, x) => z + x, 0);
    }
    let i = 1
    return cola(Array.from( new Array(n - 1), x => i++ ), [], 0);
}

