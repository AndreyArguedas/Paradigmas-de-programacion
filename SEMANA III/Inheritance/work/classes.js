/*
  @author loriacarlos@gmail.com
  @since 2017

*/

function A(w){
	this.w = w;
}

A.prototype.f = function(){
	return this.w * this.w;
}

function B(w, h){
	A.call(this, w);
	this.h = h;
}

B.prototype.f = function(){
		return A.prototype.f.call(this) / 2;
}

module.exports =  {
   A, B
}