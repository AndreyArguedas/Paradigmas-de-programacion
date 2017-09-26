/**
   Logica en el calculo lambda
   @author loriacarlos@gmail.com
   @since 2017
   
*/
let TRUE  = x => y => x;
let FALSE = x => y => y;

// ITE = If-Then-Else
let ITE = p => t => e => p(t)(e);

let NOT = p => x => y => p(y)(x)  //Working

let AND = x => y => ITE(x)(y)(FALSE) //Working

let OR = x => y => ITE(x)(TRUE)(y) //Working

let NAND = x => y => ITE(NOT(x)(TRUE)(FALSE))(TRUE)(NOT(x)(TRUE)(FALSE)) //WORKING


module.exports = {
	TRUE : TRUE,
	FALSE : FALSE,
    ITE : ITE,
    NOT : NOT,
    AND : AND,
    OR : OR,
    NAND : NAND,
    XOR : XOR
}