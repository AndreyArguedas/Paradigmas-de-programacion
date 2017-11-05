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
    varsVals.forEach{it -> ctx[it.first] = it.second}
    /*for ( (variable, value) in varsVals )
	    ctx[variable] = value*/
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

class SimpleMonom( val coef: Double = 1.0, val variable: Variable = NONE, val exp: Double = 1.0 ) : Evaluable<Double>{
  val isValue: Boolean  
      get() = variable == NONE
  override fun eval(ctx: Context<Double>): Evaluable<Double> {
    val value = ctx[variable] 
	return if ( value == null ) this 
	       else SimpleMonom(coef * Math.pow(value, exp))
  }

  fun derivate() : Evaluable<Double>{
    return SimpleMonom(coef * exp , variable, if(exp > 1.0) exp - 1.0 else exp)
  }
  
  override fun toString() :String{
    val nexp = if(exp == 1.0) "" else "^" + exp.toString() 
    return "${coef}${variable} ${nexp}"
  } 
}



