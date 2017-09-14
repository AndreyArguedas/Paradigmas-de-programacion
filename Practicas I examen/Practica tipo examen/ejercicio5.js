function a(){
	console.log('Estoy en A')
	return Promise.resolve("a");
}

function c(){
	console.log('Estoy en C')
	return Promise.resolve("c");
}

function b(anterior){
    console.log('Estoy en B')
	return Promise.resolve("b" + anterior);
}

function d(first, second, third){
    console.log('Estoy en D')
	return Promise.resolve(first + second + third + "d");
}


async function main(){
    let aResult = await a();
    console.log(aResult)
    let baResult = await b(aResult);
    console.log(baResult)
    let cResult = await c();
    console.log(cResult)
    return d(aResult, baResult, cResult);
    //return d(a(), b(a()), c());
}

function test() {
    main().then( res => console.log("Resultado final: " + res + " "))
}

test()

