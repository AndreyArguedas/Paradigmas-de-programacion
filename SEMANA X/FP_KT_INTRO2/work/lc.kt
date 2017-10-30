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

class Atom(name: String): Atomic(name.toLowerCase()){

	override fun replace(){
	  return this
	}

	override fun clone(){
	  return new Atom(this.name);
	}
}

/*class App (fun, args)extends Term {
	constructor(fun, arg){
		super()
		this.fun = fun; this.arg =arg
	}
	toString(){
		return `(${this.fun} ${this.arg})`
	}
	args(){
	  return [this.fun, this.arg];
	}
	clone(){
	  return new App(this.fun.clone(), this.arg.clone())
	}
	replace(opt){
	  return new App(this.fun.replace(opt), this.arg.replace(opt))
	}
	
}

class Lambda extends Term {
     constructor(arg, body){
		super()
		this.arg = arg; this.body = body; 
	}
	toString(){
		return `(\\${this.arg}.${this.body})`
	}
	args(){
	  return [this.arg, this.body];
	}
	replace({what, by, except}){
	   return this.arg.equals(what) ? this
	          : new Lambda(this.arg, 
	                       this.body.replace({what, by, except: [this.arg].concat(except)}));
	}
	clone(){
	  return new Lambda(this.arg.clone(), this.body.clone())
	}
}
class ReplaceOpts {
  constructor({what, by, except=[]}){
    this.what = what;
	this.by = by;
	this.except = except;
  }
  toString(){
     return `{what:${this.what},  by:${this.by} , except: ${this.except}}`;
  }
}
class ReduceOpts {
   constructor({level=10, strat=LAZY}){
     this.level = level;
	 this.strat = strat
   }
   toString(){
     return `{level:${this.level}}}`;
   }
   dec(){
     this.level--;
	 return this;
  }
}
function* varGen(pre = 'X_'){
	 for (let n = 0, s=false; !s; n++) 
	       s = yield new Var(pre + n);
}
const gen = varGen()

function newVar(){
	return gen.next().value; 
}*/
