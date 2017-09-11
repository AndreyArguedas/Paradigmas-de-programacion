let addTo = (passed) => {
    let inner = 2;
    return passed + inner;
}

console.log(addTo(3)); //Retorna 5

var passed = 3; //Algo afuera, es alcanzable dentro de una funcion

let addTo2 = () => {
    let inner = 2;
    return passed + inner;
}

console.log(addTo2()); //Imprime 5

var passed = 4;

console.log(addTo2()); //Imprime 6

/* INNER FUNCTIONS */

let adding = function(passed){
    console.log(passed);
    let add = function(inner){
        console.log(inner);
        return passed + inner;
    }

    return add;
}

console.log(adding(8)); //8 es el valor de passed

var addThree = new adding(3);
var addFour = new adding(4);

console.log(addThree(8)); //Ahora el 8 llega hasta inner
console.log(addFour(10)); //Ahora el 10 llega hasta inner

/* */

let addingWithout = function(){
    console.log(passed);
    let add = function(){
        console.log(inner);
        return passed + inner;
    }

    return add;
}

var passed = 9;
var inner = 10;

console.log(addingWithout()); //Solo el 9 llega, a inner no llega


