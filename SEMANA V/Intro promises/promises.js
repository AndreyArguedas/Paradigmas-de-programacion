let promiseToCleanRoom = new Promise( 
	(resolve, reject) => {
							let isClean = true;
							if(isClean)
								resolve('Clean');
							reject('Not clean');
						});

promiseToCleanRoom.then( (fromResolve) => {
	console.log("Room is " + fromResolve);
}).catch( (fromReject) => {
	console.log("ERROR OCURRED " + fromReject);
})

/* Different examples */

let cleanRoom = () => { return new Promise( (resolve, reject) => {
										resolve("Cleaned"); 
})};

let removeGarbage = (p) => { return new Promise( (resolve, reject) => {
										resolve(p + "Removed");
})};

let winIceCream = (p) => { return new Promise( (resolve, reject) => {
										resolve(p + "Won IceCream");
})};

cleanRoom().then( (res) => {return removeGarbage(res)}).then( (res) => {return winIceCream(res)}).then( (res) => console.log("finished " + res));

/* Doing all of them simultaneously */

Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then( () => {
	console.log("All finished perros");
})