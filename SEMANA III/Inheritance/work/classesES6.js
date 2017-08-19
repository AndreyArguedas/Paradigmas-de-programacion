class A {
	constructor(w){
	   this.w = w;
    }
	
	f(){
	   return this.w * this.w;
    }
}

class B extends A{
	constructor(w, h = w){
		super(w);
		this.h = h;
	}
	
	f(){
		return super.f() / 2;
	} 
	
}

module.exports =  {
   A, B
}