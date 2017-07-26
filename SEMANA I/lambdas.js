function sum(init,a){
  return operation(init,a,(s,x)=>s+x);
}

function mult(init,a){
  return operation(init,a,(s,x)=>s*x);
}

function max(init,a){
  return operation(init,a,(s,x)=>Math.max(s,x));
}

function min(init,a){
  return operation(init,a,(s,x)=>Math.min(s,x));
}


function operation(init,a,fun){
  var s = init;
  for(var i = 0; i < a.length; i++)
    s = fun(s,a[i]);
  return s;
}

function test(){
  var a = [4,6,7,8,15];
  console.log(sum(0,a));
  console.log(mult(1,a));
  console.log(max(-Infinity,a));
  console.log(min(Infinity,a));
}

function evens(a,fun){
  return numbers(a,fun);
}

function notEvens(a,fun){
  return numbers(a,fun);
}

function numbers(a,fun){
  var result = [];
  for(var i = 0; i < a.length; i++){
    fun(a[i]) == true ? result.push(a[i]) : 0;
  }
  return result;
}

function testNumbers(){
  var a = [3,4,6,7,8,15];
  console.log(evens(a,(x) => {if(x % 2 === 0) return true;}));
  console.log(notEvens(a,(x) => {if(x % 2 !== 0) return true;}));
}
