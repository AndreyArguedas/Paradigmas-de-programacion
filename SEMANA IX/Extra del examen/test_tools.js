/*
*Curso EIF400 II-2017 Prof. Carlos Loria
*autor: Andrey Arguedas Espinoza
*id: 402310255
*firma: 
*horario: 1 pm
*fecha 21/09/201
*Declaro en forma jurada que he realizado de manera individual este ejercicio sin ayuda alguna de otra persona
*/
 
let tools = require('./tools')
const Range = tools.range
 
function test(){
    console.log('Case (0) 0,1,...,9 (by 1 default)');
    Range({start: 0, until: 10}).forEach( console.log )
     
    console.log('Case (1) 0,2,4...,8 (by 2)');
    Range({start: 0, until: 10, by: 2}).forEach( console.log )
     
    console.log('Case (2) 10, 9,...,1 (by -1)');
    Range({start: 10, until: 0, by: -1}).forEach( console.log )
     
    console.log('Case (3) for-of 0,4,16,36,64 (by 2 squared)');
    let rang3 = Range({start: 0, until: 10, by:2, value: i => i*i});
    for(let val of rang3){
        console.log(val)
    }
    console.log('Caso (4) for-of 0,2,4,16,36,64 same range');
    for(let val of rang3){
        console.log(val)
    }       
}
test();