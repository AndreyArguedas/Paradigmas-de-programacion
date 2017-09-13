/**
   Combinador Y
   @author loriacarlos@gmail.com
   @since 2017
   
*/

function Y(F){
	let U =  f => f(f);
    let Z =  f => x => U(f)(x)
	
	return U( f => F (Z(f)) )

};

let factGen = g => n => (n == 0) ? 1 : n * g( n - 1 );
  
const fact = Y(factGen);

module.exports = {
	Y : Y,
	fact : fact
}

