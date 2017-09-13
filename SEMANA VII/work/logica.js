/**
   Logica en el calculo lambda
   @author loriacarlos@gmail.com
   @since 2017
   
*/
let TRUE  = x => y => x;
let FALSE = x => y => y;

// ITE = If-Then-Else
let ITE = p => t => e => p(t)(e);

module.exports = {
	TRUE : TRUE,
	FALSE : FALSE,
	ITE : ITE
	
}