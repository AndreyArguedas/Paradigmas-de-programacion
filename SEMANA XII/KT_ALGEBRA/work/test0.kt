/**
  @author loriacarlos@gmail.com
  @since 2017
*/
package eif400.algebra.test
import  eif400.algebra.*

fun main(args: Array<String>){
   println(">>> Testing Monoms and Polinoms <<<")
   
   val mList = listOf(SimpleMonom(5.0, X),  // 5x 
                      SimpleMonom(10.0),    // 10
					  SimpleMonom(20.0, Y), // 20y
					  SimpleMonom(40.0, Z)  // 40z
   )
   val ctx   = contextOf(X to 25.0, Y to 9.7)
   val vList = mList.map{ it.eval(ctx)}
   println(">>> With ctx=$ctx mList=$mList yields vList=$vList <<<")
   
}