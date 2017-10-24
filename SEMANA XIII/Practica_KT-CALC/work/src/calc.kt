/**
  @author loriacarlos@gmail.com
  @since 2017
  @see https://kotlinlang.org/docs/reference/sealed-classes.html
*/
package eif400.calc;

sealed class Expr
class Num( val value: Double ) : Expr()
class Add( vararg val args: Expr ) : Expr()
class Times( vararg val args: Expr ) : Expr()
//... add more here if needed
object NullExpr : Expr(){
   override fun toString()="nullExpr"
}

fun eval(expr: Expr): Double =
   when (expr){
     is Num   -> expr.value
	 is Add   -> expr.args.fold(0.0, {sum, e -> sum + eval(e)})
     is Times -> expr.args.fold(1.0, {mul, e -> mul * eval(e)})
	 //... add more here
	 is NullExpr -> Double.NaN
   }
fun test1(){
   println("test1: (666 + 999) * 100")
   val num1 = Num(666.0)
   val num2 = Num(999.0)
   val num3 = Num(100.0)
   val expr = Times( Add( num1, num2 ), num3 )
   val res = eval(expr)
   val expected = (num1.value + num2.value) * num3.value
   println("test1: eval --> $res (expected=$expected)")
}
fun test2(){
   println("test2: (666 - 999) / 100")
   val num1 = Num(666.0)
   val num2 = Num(999.0)
   val num3 = Num(100.0)
   //... modify to make it work
   val res = NullExpr
   val expected = (num1.value - num2.value) / num3.value
   println("test2: eval --> $res (expected=$expected)")
}
fun main(args: Array<String>){
   println()
   println(">>> Testing Sealed Classes and When")
   test1()
   println()
   test2()
}