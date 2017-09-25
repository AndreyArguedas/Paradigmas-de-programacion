package eif400.lc

class ImplError(override val message:String) :  Exception(message) {
}

internal fun fail(method: String){
  val err = ImplError("ERROR *** Term.${method} not (correctly) implemented! ***")
  throw err;
}
enum class Strategy {
   LAZY, EAGER
}
fun reduce_lazy(t: Term, opt: ReduceOptions): Term {
    fail("reduce_lazy")
    return t
}

fun reduce_eager(t: Term, opt: ReduceOptions): Term {
    fail("reduce_eager")
    return t
}

sealed class Options{
}
data class ReduceOptions(val strat:Strategy): Options(){

}
data class ReplaceOptions( val what: Term, val by: Term, val except: List<Term>): Options(){

}

open class Term {
    open fun isVar(): Boolean{
	   return false;
	}
	
	open fun isAtomic(): Boolean{
	   return false;
	}
	
	open fun freeVars(): List<Term>{
	   fail("freeVars")
	   return listOf()
	}
	
	open fun occurs(v: Term): Boolean{
	    fail("occurs")
		return false;
	}
	open fun depth():Int{
	   fail("depth")
	   return -1;
	}
	open fun replace(opt: ReplaceOptions):Term {
	   fail("replace")
	   return this
	}
	open fun reduce(opt: ReduceOptions): Term{
	  return when (opt.strat) {
	              Strategy.LAZY -> reduce_lazy(this, opt) 
				  Strategy.EAGER -> reduce_eager(this, opt) 
			 }
	}
	open fun equals(other: Term): Boolean{
	  return this === other;
	}
	
	open fun isClone(other: Term): Boolean{
	  fail("isClone")
	  return false
	}
	open fun clone() : Term{
	  fail("clone")
	  return this
	}
	open fun args(): List<Term>{
	   return mutableListOf();
	}
}

open class Atomic( val name: String) : Term() {
	
	override fun isAtomic(): Boolean{
	   return true
	}
	override fun toString(): String{
		return this.name
	}
	override fun equals(other: Term): Boolean{
	  return (
        this === other		  
	    || (other is Atomic 
		    && this.name == other.name ))
	}
	
}

class Var( name: String ):  Atomic(name.toUpperCase()) {
	override fun isVar(): Boolean{
	   return true;
	}
	override fun replace(opts: ReplaceOptions): Term{
	  return if (this.equals(opts.what) && !opts.except.any({it.equals(this)}))
             opts.by 
	         else this
	}
	override fun clone(): Term{
	  return Var(this.name);
	}
}
