import java.util.*;
class A {}
class B extends A{}
class C extends A{}
class Z<T extends A> {}

public class Assign{ 
	
	public static void main(String[] args){
		List<? extends A> leb = Arrays.asList();
		List< B > lb = Arrays.asList();
		B b = new B();;
		
		// 1) por que compila?
		List< ? extends A > lea = lb; 
		lea = leb;
		
		List< ? super  A > lsa = Arrays.asList();
		A  a = new A();
		
		List< C > lc = Arrays.asList();;
		C c = new C();
		// 2 por que compilan
		lsa.add(a);
		lsa.add(b);
		lsa.add(c);
		
		// 3) Que metodos se pueden usar de 'lea' y 'lsa' ?
		List<A> la = Arrays.asList();
		lea = la;
		lsa = la;
		
		// 4) por que la siguiente linea no compilaria ?
		//Z<A> z = new Z<B>();
		
	}
} 