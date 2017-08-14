class A {
	constructor(w){
	   this.w = w;
    }
	
	f(){
	   return this.w * this.w;
    }
}

class B extends A{
	constructor(w, h){
		super(w);
		this.h = h;
	}
	
	f(){
		return super.f() / 2;
	} 
	
}

B.prototype.f = function(){
		return A.prototype.f.call(this) / 2;
}

module.exports =  {
   A, B
}