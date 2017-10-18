public class Tipo{ 
	public static void test(Object obj, Integer[] a){
		a[0] = (Integer)obj;
	}
	public static void main(String[] args){
		Integer[] a = {1,2,3};
	    test("csh", a);
	}
} 