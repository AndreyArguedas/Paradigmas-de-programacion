/**
  @author loriacarlos@gmail.com
  @since 2017
*/
package eif400.algebra.test
import  eif400.algebra.*

fun main(args: Array<String>){
   println(">>> Testing Monoms and Polinoms <<<")
   // Asuma que el exponente (exp) es Double
   val mList = listOf(SimpleMonom(5.0, X, 3.0),  // 5x^3 
                      SimpleMonom(10.0),       // 10
					  SimpleMonom(20.0, Y, 1.0), // 20y
					  SimpleMonom(40.0, Z)     // 40z
   )
   val ctx   = contextOf(X to 25.0, Y to 9.7)
   val vList = mList.map{ it.eval(ctx)}
   println(">>> EVAL: With ctx=$ctx mList=$mList yields vList=$vList <<<")
   
   val dList  = mList.map{ it.derivate()}
   val vdList = dList.map{ it.eval(ctx) }
   println(">>> DERIVATE: With ctx=$ctx dList=$dList yields vdList=$vdList <<<")
   
}