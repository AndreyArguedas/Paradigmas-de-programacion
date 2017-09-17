/**
  @author loriacarlos@gmail.com
  @since 2017
*/

let {
	Atomic,
	Var,
	Atom,
	App,
	Lambda,
	EAGER,
	LAZY, 
	ImplError,
	newVar,
	ReplaceOpts,
	ReduceOpts
	
} = require('./lc')

function test(){
    console.log()
    console.log('>>> Testing Lambda Calculus (LC) <<<')
	
	let X = new Var('X');  // X
	let Y = new Var('Y');  // Y
	let Z = new Var('Z');  // Z
	let A = new App(X, Y)  // XY
    let F = new Lambda(Y, A); // \Y.XY
    let G = new Lambda(X, F); // \X.\Y.XY
    let a = new Atom('a'); // a
	let b = new Atom('b'); // b
    let W = new App(G, a); // (\X.\Y.XY)a
	let T = new App(W, b); // (\X.\Y.XY)a b
	let TC = T.clone(); // (\X.\Y.XY)a b

    console.log()	
	
	for (let [label, term, method, args] of 
	                   [
					    ['toString of T', T, 'toString', []],
                        ['T equals T', T, 'equals', [T]],
						['not equals G', T,'equals', [G]],
						['equals clone', T, 'clone', [TC]],
						['isClone of TC', T, 'isClone', [TC]],
					    ['freeVars of T', T, 'freeVars', []], 
						['depth of T', T, 'depth', []] , 
	                    ['replace Y by b in F', F, 'replace', [new ReplaceOpts({what:X, by:b, except:[]})]], 
						['reduce T Lazy', T, 'reduce', [new ReduceOpts({strat: LAZY})]],
                        ['reduce T Eager',T, 'reduce', [new ReduceOpts({strat: EAGER})]]					
					]) {
		try {
			 console.log()
			 console.log(`Test Case: "${label}"`)
			 console.log(`>>> term.${method}( ${args} ) = ${term[method].apply(term, args)} <<<`)
			 console.log()
		} catch (e){
		    if (e instanceof ImplError)
			    console.error(e.message);
			else console.error(e);
			console.log()
		}
	
	}
}

test();

