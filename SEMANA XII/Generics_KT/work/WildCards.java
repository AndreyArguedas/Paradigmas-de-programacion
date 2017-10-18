import java.util.function.*;
class A {
	public R x;
	public A(){
		this.x = new R();
	}
	
}
class B extends A {
	
}
class T {
	
}
class R  extends T{
	public Integer x;
	public R(){
		
		this.x = 999;
	}
}
public class WildCards {
	
	static public void main(String[] args){ 
	    Function<A, R> f = a -> a.x;
		Function<T, Integer> after = x -> 666;
		Function<A, Integer> h = f.andThen(after);
		System.out.println(h.apply(new A()));
		Function<B, R> z = b -> b.x;
		// Por que no compila?
		// f = z; 
	}
	
	
}