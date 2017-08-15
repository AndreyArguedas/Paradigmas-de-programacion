/*
  @author loriacarlos@gmail.com
  @since 2017

*/

class A {
	public int w;
	public A(int w){
			this.w = w;
	}
	public int f(){
		return w * w;
	}
}

class B extends A {
	public int h;
	
	public B(int w, int h){
		super(w);
		this.h = h;
	}
	public B(int w){
		this(w, w);
	}
	public int f(){
		return super.f() / 2;
	}
}

public class Model{
	
	public static void testModel(){
		// With A
		A a; int r;
		a = new A(666);
		r = a.f();
		assert 666 * 666  == r : "Test of A fails";
		System.out.println(">>> r of A = " + r);
		// With B
		a = new B(666);
		r = a.f();
		assert 666 * 666 / 2 == r : "Test of B fails";
		System.out.println(">>> r of B = " + r);
	}
	
	public static void main(String[] args){
		System.out.println("*** Testing Model ***");
		testModel();
	}
	
}