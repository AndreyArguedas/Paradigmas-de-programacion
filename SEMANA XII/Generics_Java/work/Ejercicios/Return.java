
class A {}
 
class B extends A {}

 
class C {
     public A foo(int x) {
		 System.out.println("C::foo");
         return new A();
     }
 }
  
class D extends C {
     @Override 
     public B foo(int x) {
		 System.out.println("D::foo");
         return new B();
     }
 }
 
 public class Return {
	public static void main(String[] args){
	 C c = new D();
	 c.foo(666);
	}
 }