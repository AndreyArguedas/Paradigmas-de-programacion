/**
  @author loriacarlos@gmail.com
  @since 2017
*/

class ImplError extends Error {
	constructor(...args) {
		super(...args);
	}
}
function fail(method) {
	let err = new ImplError(`ERROR *** Term.${method} not (correctly) implemented! ***`)
	//err.stack = '';
	throw err;
}

function reduce_lazy(t, opt) {
	return (
		t.isAtomic()
			|| (t instanceof Lambda)
			|| (opt && opt.level <= 0)
			? t
			: reduce_upper_beta(t, opt))
}

function reduce_upper_beta(app, opt) {
	if (app.isAtomic()
		|| (app instanceof Lambda)
		|| (opt && opt.level <= 0))
		return app;
	let [L, M] = app.args();
	let LR = reduce_lazy(L, opt.dec())

	if (!(LR instanceof Lambda))
		return new App(LR, M);

	let [X, B] = LR.args();

	let NX = newVar();
	return reduce_lazy(
		B.replace(new ReplaceOpts({ what: X, by: NX }))
			.replace(new ReplaceOpts({ what: NX, by: M })), opt.dec())

}

const EAGER = Symbol('eager');
const LAZY = Symbol('lazy');

class Term {
	isVar() {
		return false;
	}
	isAtomic() {
		return false;
	}
	freeVars() {
		console.log(reduce_lazy(this, new ReduceOpts({level : 10, strat : LAZY})))
		fail('freeVars') //Tira la excepcion de metodo no implementado
	}
	occurs(v) {
		fail('occurs')
	}
	depth() {
		fail('depth')
	}
	replace({ what = this, by }) {
		fail('replace')
	}
	reduce(opt) {
		return opt.strat == LAZY ? reduce_lazy(this, opt) : fail('reduce_eager')
	}
	equals(other) {
		return this == other; //Para el metodo #2 del test
	}
	isClone(other) { //No me parece lo correcto
		return (
			other
			&& (other instanceof App)
			&& other.fun != undefined)
	}
	clone() {
		fail('clone')
	}
	args() {
		return []
	}
}

class Atomic extends Term {
	constructor(name) {
		super()
		this.name = name
	}
	isAtomic() {
		return true;
	}
	toString() {
		return this.name
	}
	equals(other) {
		return (
			!other && false
			|| this == other
			|| (other instanceof Var)
			&& this.name == other.name);
	}



}

class Var extends Atomic {

	constructor(name) {
		super(name.toUpperCase())
	}

	isVar() {
		return true;
	}
	replace({ what, by, except }) {
		return (this.equals(what) && !except.some(v => v.equals(this))) ? by : this
	}
	clone() {
		return new Var(this.name);
	}
}
class Atom extends Atomic {
	constructor(name) {
		super(name.toLowerCase())
	}
	replace() {
		return this;
	}
	clone() {
		return new Atom(this.name);
	}
}

class App extends Term {
	constructor(fun, arg) {
		super()
		this.fun = fun; this.arg = arg
	}
	toString() {
		return `(${this.fun} ${this.arg})`
	}
	args() {
		return [this.fun, this.arg];
	}
	clone() {
		return new App(this.fun.clone(), this.arg.clone())
	}
	replace(opt) {
		return new App(this.fun.replace(opt), this.arg.replace(opt))
	}

}

class Lambda extends Term {
	constructor(arg, body) {
		super()
		this.arg = arg; this.body = body;
	}
	toString() {
		return `(\\${this.arg}.${this.body})`
	}
	args() {
		return [this.arg, this.body];
	}
	replace({ what, by, except }) {
		return new Lambda(this.arg,
			this.body.replace({ what, by, except: [this.arg].concat(except) }));
	}
	clone() {
		return new Lambda(this.arg.clone(), this.body.clone())
	}
}
class ReplaceOpts {
	constructor({ what, by, except = [] }) {
		this.what = what;
		this.by = by;
		this.except = except;
	}
	toString() {
		return `{what:${this.what},  by:${this.by} , except: ${this.except}}`;
	}
}
class ReduceOpts {
	constructor({ level = 10, strat = LAZY }) {
		this.level = level;
		this.strat = strat
	}
	toString() {
		return `{level:${this.level}}}`;
	}
	dec() {
		this.level--;
		return this;
	}
}
function* varGen(pre = 'X_') {
	for (let n = 0, s = false; !s; n++)
		s = yield new Var(pre + n);
}
const gen = varGen()

function newVar() {
	return gen.next().value;
}

module.exports = {
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

}