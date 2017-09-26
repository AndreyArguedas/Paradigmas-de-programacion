/* Generealizar la pregunta 3 para n generadoras */

/*function* union(f,g){ //Version del examen
    for(;;){
        [fret, gret] = [f.next(), g.next()]
        if(fret.done && gret.done)
            return
        if(!fret.done)
            yield fret.value
        if(!gret.done)
            yield gret.value
    }
    return
}*/

function* union(gens) {
    for (; ;) {
        let currents = gens.reduce((z, x) => z.concat(x.next()), [])
                           .filter(x => !x.done)
        if (!currents.length) //Todos se acabaron
            return
        while (currents.length)
            yield currents.shift().value
    }
    return

}

function* f() { //Genera primeros 10 pares
    for (let i = 0; i < 10; i++)
        yield 2 * i

    return
}

function* g() { //Genera primeros 10 potencias de 2
    for (let i = 0; i < 10; i++)
        yield Math.pow(2, i)

    return
}

function* h() { //Genera primeros 10 impares
    for (let i = 0; i < 10; i++)
        yield 2 * i + 1

    return
}

function test() {
    let curr = union([f(), g(), h()])
    let iteration = curr.next()
    while (!iteration.done) {
        console.log(iteration.value)
        iteration = curr.next()
    }
}

test()