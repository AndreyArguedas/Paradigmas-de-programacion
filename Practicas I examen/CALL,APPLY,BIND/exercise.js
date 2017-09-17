var obj = {num : 2}

var addToThis = function(a){
    console.log(this)
    return this.num + a
}

console.log(addToThis.call(obj, 4)) //First parameter is "this"

var arr = [4];

console.log(addToThis.apply(obj, arr)) //First parameter is "this"

//Note: apply is for arrays

var bound = addToThis.bind(obj, 9) //Al hacer bind no hay porque pasar los args pero igual sirve
var bound = addToThis.bind(obj) //Esto tambien sirve
console.log(bound)

console.log(bound())

/*    This and bind object creation   */

let dog = {
    sound : "woof",
    talk : function(){
        console.log(this.sound)
    }
}

dog.talk() ///woof

let talkFunction = dog.talk

talkFunction() //UNDEFINED

//So we do this

let boundFunction = talkFunction.bind(dog)

boundFunction() //woof

/***************** MORE EXAMPLES **********************/

let talk =  function() {
    console.log(this.sound)
}

let boromir = {
    speak: talk,
    sound: "talking..."
}

let talkBoundToBormir = talk.bind(boromir)

talkBoundToBormir() //Esto servira

talk() //Esto no

boromir.speak() //talking...
