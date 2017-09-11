function stopWatch() {
    let startTime = Date.now();

    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }

    return getDelay;
}

var timer = stopWatch(); //Hace el start time

for(let i = 0; i < 1000000; i++) //Para hacer un delay
    var foo = Math.random() * Math.pow(i, 2) - i

timer() //Hace el getDelay