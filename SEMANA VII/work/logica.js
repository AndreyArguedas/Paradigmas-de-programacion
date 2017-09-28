/**
   Logica en el calculo lambda
   @author loriacarlos@gmail.com
   @since 2017
   
*/
let TRUE  = x => y => x;
let FALSE = x => y => y;

// ITE = If-Then-Else
let ITE = p => t => e => p(t)(e);

let NOT = p => p(FALSE)(TRUE)  

let AND = x => y => ITE(x)(y)(FALSE) 

let OR = x => y => ITE(x)(TRUE)(y) 

let NAND = x => y => NOT(AND(x)(y))

let NOR = x => y => NOT(OR(x)(y))

let XOR = x => y => ITE(x)(ITE(y)(FALSE)(TRUE))(ITE(y)(TRUE)(FALSE))

/*
    let {TRUE, FALSE, ITE, NOT, AND, OR, NAND, NOR, XOR} = require('./logica')

    AND(FALSE)(FALSE)
    AND(TRUE)(FALSE)
    AND(FALSE)(TRUE)
    AND(TRUE)(TRUE)
    OR(FALSE)(FALSE)
    OR(TRUE)(FALSE)
    OR(FALSE)(TRUE)
    OR(TRUE)(TRUE)
    NAND(FALSE)(FALSE)
    NAND(FALSE)(TRUE)
    NAND(TRUE)(FALSE)
    NAND(TRUE)(TRUE)
    NOR(FALSE)(FALSE)
    NOR(FALSE)(TRUE)
    NOR(TRUE)(FALSE)
    NOR(TRUE)(TRUE)
    XOR(FALSE)(FALSE)
    XOR(FALSE)(TRUE)
    XOR(TRUE)(FALSE)
    XOR(TRUE)(TRUE)
    NOT(TRUE)
    NOT(FALSE)
*/

module.exports = {
	TRUE : TRUE,
	FALSE : FALSE,
    ITE : ITE,
    NOT : NOT,
    AND : AND,
    OR : OR,
    NAND : NAND,
    NOR : NOR,
    XOR : XOR
}