/**
  Computar es simplificar
  @author loriacarlos@gmail.com
  @since 2017
  
*/

// Defina algunas lambdas
const id  = x => x
const id1 = y => y
const add = x => y => x + y
const addOneToList = a => a.map( add(1) )

/*
  Pruebe formalmente:
  
  0)  id(f) == f para todo f
  
  1)  id(f) == id1(f) para todo f
  
  2)  addOneToList(a)[i] ==  a[i] + 1  para todo array a y todo indice i (0 <= i < a.length )
  
*/

module.exports = {
	id, id1, add, addOneToList
	
}