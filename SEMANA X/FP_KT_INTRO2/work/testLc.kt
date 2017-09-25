package eif400.test

import eif400.lc.*
data class TestLine( val name:String, 
                     val term:Term, 
					 val method:String, 
					 val args:Array<Term>,
					 val opts:Array<Options>
					)
fun test(){
    println()
    println(">>> Testing Lambda Calculus (LC) <<<")
	/*
	val X = new Var("X");  // X
	val Y = new Var("Y");  // Y
	val Z = new Var("Z");  // Z
	val A = new App(X, Y)  // XY
    val F = new Lambda(Y, A); // \Y.XY
    val G = new Lambda(X, F); // \X.\Y.XY
    val a = new Atom("a"); // a
	val b = new Atom("b"); // b
    val W = new App(G, a); // (\X.\Y.XY)a
	val T = new App(W, b); // (\X.\Y.XY)a b
	val TC = T.clone(); // (\X.\Y.XY)a b*/

    println()	
	val T = Var("X")
	for ((label, term, method, args, opts) in 
	                   listOf<TestLine>(
					    TestLine("toString of T", T, "toString", arrayOf(), arrayOf()),
                        TestLine("T equals T", T, "equals", arrayOf(T), arrayOf())
						/*["not equals G", T,"equals", [G]],
						["equals clone", T, "clone", [TC]],
						["isClone of TC", T, "isClone", [TC]],
					    ["freeVars of T", T, "freeVars", []], 
						["depth of T", T, "depth", []] , 
	                    ["replace Y by b in F", F, "replace", [new ReplaceOpts({what:X, by:b, except:[]})]], 
						["reduce T Lazy", T, "reduce", [new ReduceOpts({strat: LAZY})]],
                        ["reduce T Eager",T, "reduce", [new ReduceOpts({strat: EAGER})]]*/					
					)) {
		try {
			 println()
			 println("Test Case: '${label}'")
			 println(">>> term.${method}( ${args.xToString()} ) = ${selectMethod(term, method, args, opts)} <<<")
			 println()
		} catch (e: Exception){
		    if (e is  ImplError)
			    System.err.println(e.message);
			else System.err.println(e);
			println()
		}
	
	}
}
fun <T> Array<T>.xToString(): String = java.util.Arrays.toString(this)


fun selectMethod(t: Term, method: String, args: Array<Term>, opts: Array<Options>): Any{
  return when (method){
         "toString" -> t.toString()
	     "equals"   -> t.equals(args[0])
	     else       -> "*** ERROR ***"
  }
}
fun main(args: Array<String>){
    test()
}

