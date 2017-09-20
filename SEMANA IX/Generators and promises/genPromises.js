/* En este ejercicio se explica un poco mas el ejemplo de runGen proporcionado en clases */

function paso1(){
	console.log('Paso1 empieza')
	return Promise.resolve('paso1')
}

function paso2(value){
	console.log('Paso2 empieza')
	return Promise.resolve('paso2 ' + value)
}

function* main(){
	console.log("Entre a main")
	let p1 = yield paso1();
	console.log('Estoy en main con p1', p1)
	let p2 = yield paso2(p1);
	console.log('Estoy en main con p2', p2)
	return p2;
}

//Solo para ejemplificar que darian los logs

/*function runGen(gen){
    //console.log(gen) //[GeneratorFunction: main]
    //console.log(gen()) //{}
    const ite = gen()
    //console.log(ite.next()) //{ value: Promise { 'paso1' }, done: false }
    //Si paso 1 o 2 usaran return newPromise imprime lo mismo
    const iteration = ite.next()
    const promise = iteration.value
    console.log(promise) //Pomise{'paso1'}
    promise.then( x => ite.next(x)) //Con esto ya llega al yiel de paso2
            .then(console.log) //{ value: Promise { 'paso2 paso1' }, done: false }
    return Promise.resolve("hola")
}*/

function runGen(gen){ //Mi version recursiva
    const ite = gen()
    const iteration = ite.next()

    function iterate(iteration){
        let value = iteration.value // Promise { 'paso x' }
        return iteration.done ? value : value.then(x => iterate(ite.next(x)))
    }

    return iterate(iteration)
}

function iteRunGen(gen){ //Mi version iterativa
    let iteration = gen().next()

    while(!iteration.done)
        return iteration.value.then(x => gen().next(x))
    return value

}

function test() {
	console.log('>>> Testing runGen <<<')
    iteRunGen( main )
	      .then( value => console.log('Resultado final: ' + value) );
}

test();