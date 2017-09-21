/*
*Curso EIF400 II-2017 Prof. Carlos Loria
*autor: Andrey Arguedas Espinoza
*id: 402310255
*firma: 
*horario: 1 pm
*fecha 21/09/201
*Declaro en forma jurada que he realizado de manera individual este ejercicio sin ayuda alguna de otra persona
*/

function* iterator({start = 0, until, by = 1, value = ID}){
    let current = start
    for (let i = start; i != until; i += by, current += by)
		yield value(current)
}

const ID = x => x

class Range {

    constructor(obj) {
        this.obj = obj
        this.iter = iterator(this.obj)
    } 
    
    [Symbol.iterator]() {
        this.iter = iterator(this.obj)
        return this;
    }

    next() {
        return this.iter.next()
    }

    forEach(fun) {
        let iteration = this.next()
        
        if(!iteration.done) {
            fun(iteration.value)
            this.forEach(fun)
        }
    }

}

function range(obj) { return new Range(obj) }

module.exports = {
    range
} 