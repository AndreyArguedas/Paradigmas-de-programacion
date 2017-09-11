p = Promise.resolve(666);

p.value  //No tendria sentido, la promesa pudiera no haber terminado

p.then( res => console.log(res) ) //Crea un promesa

p.then( z => z + 1).then( console.log )

p = new Promise( (t, c) => t(665) ) //T es el 665