import java.util.*;
public class Orthogonal {
	
	public static void fun(Integer x){
		System.out.println("fun Integer");
	}
	public static void fun(int x){ // Ojo !!
		System.out.println("fun int");
	}
	
	public static void main(String[] args) {
		// Integer vs int Orthogonal?
		int x = 1; 
		Integer y = x; // Ok
		Integer z = 1;
		
		System.out.println("\nCase 1)");
		System.out.format("x == %s ^ y==%s ^ z == %s%n", x, y, z);
		System.out.format("x == y --> %b <-- %s == %s %n", x == y, x, y); // true
		System.out.format("y == z --> %b <-- %s == %s %n", y == z, y, z); // true
		System.out.format("y.toString() == z.toString() --> %b <-- %s == %s %n", 
		                   y.toString() == z.toString(), y, z); // false
		
		System.out.println("\nCase 2)");
		fun(x); // Ok
		fun(y); // Ok
		
		System.out.println("\nCase 3)");
		List<Integer> a = new ArrayList<>();
		a.add(x); // ok
		
		/*System.out.println("\nCase 4)");
		  List<int> b = new ArrayList<>();
		  b.add(x);
		*/
		
	}
	
}