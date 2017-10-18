/**
  @author loriacarlos@gmail.com
  @since 2017
*/
package eif400.algebra

interface Evaluable<T> {
   fun eval(ctx: Context<T>): Evaluable<T>
}

class Context<T> : HashMap<Variable, T>()

fun <T> contextOf ( vararg varsVals: Pair<Variable, T> ): Context<T> {
    val ctx = Context<T>()
    for ( (variable, value) in varsVals )
	    ctx[variable] = value
	return ctx
}
data class Variable(val value: String){
   override fun toString() = value
   companion object {
      val X = Variable("x")
	  val Y = Variable("y")
	  val Z = Variable("z")
	  val NONE = Variable("")
   
   }
}

val X = Variable.X
val Y = Variable.Y
val Z = Variable.Z
val NONE = Variable.NONE

class SimpleMonom( val coef: Double = 1.0, val variable: Variable = NONE ) : Evaluable<Double>{
  val isValue: Boolean  
      get() = variable == NONE
  override fun eval(ctx: Context<Double>): Evaluable<Double> {
    val value = ctx[variable] 
	return if ( value == null ) this 
	       else SimpleMonom(coef * value)
  }
  
  override fun toString() = "${coef}${variable}"
}



