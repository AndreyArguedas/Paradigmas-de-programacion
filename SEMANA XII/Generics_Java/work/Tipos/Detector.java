public class Detector{
	public static void foo(int n){
		while( n-- > 0 );
	}
	public static void main(String[] args){
		Integer[] a = new Integer[10];
	    a[100] = 0;
		
		foo(20);
	}
} 