/*
  @author loriacarlos@gmail.com
  @since 2017
*/

const neuters = {
    'number' : () => 0,
	  'string' : () => '',
	  'boolean' : false,
	  'object' : x => Array.isArray(x) ? [] : undefined
}
class MyArray extends Array {
   constructor(...vals){
	   super()
	   vals.forEach(e => this.push(e))
   }
   neuter(){
     if (this.length == 0) return;
	   let c =  neuters[typeof this[0]]
	   return c && c(this[0]);
   }
   reportError(name){
      throw new Error(`MyArray.${name} not implemented`)
   }
   reduce(f, z = neuter()){ // Implemente imperativo
	    for(var i = 0; i < this.length; i++)
        z =  f(z, this[i], i);
      return z; 	   
   }
   reduceBreak(f, init = neuter(), brk){ // Implemente imperativo
	    for(var i = 0; i < this.length; i++){
        console.log(this[i]);
        if( brk(this[i]) ) break;
        else init = f(init, this[i]);
      }
      return init;
    }

   map(f){ // Implemente usando MyArray.reduce
		  return this.reduce( (z, x) => {z.push( f(x) );return z;}, []);
   }
   forEach(f){ // Implemente usando MyArray.reduce
		  return this.reduce( (z, x) => { f(x) }, this.neuter() );
   }
   filter(f){ // Implemente usando MyArray.reduceBreak
	    return this.reduce( (z, x) => {if( f(x) ) z.push(x); return z;}, [] );
   }
   zip(other){ // Implemente usando MyArray.reduce
	    return this.reduce( (z, x, i) => { z.push( [x, other[i]] ); return z;}, []);
   }
   every(f){ // Implemente usando MyArray.reduceBreak
	    return this.reduceBreak( (z, x) => f(x), false, x => !f(x));
   }
   some(f){ // Implemente usando MyArray.reduceBreak
      let pass = false;
      this.reduceBreak( (z, x) => x, false, x => pass = f(x));
      return pass;
   }
   
}

module.exports = {
	MyArray
	
}