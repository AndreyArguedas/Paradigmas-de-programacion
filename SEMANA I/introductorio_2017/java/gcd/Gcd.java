public class Gcd {	
	
	static int gcd(int a, int b){
	   if (a == 0) return b;
	   if (b == 0) return a;
		while ( a != b ){
			if ( a > b ) 
				 a = a - b;
			else b = b - a;	
		}
		return a;	
	}
	static public void  main (String[] args) {
	    int a = 0, b = 0;
		if ( args.length >= 1  ){
			a = Integer.parseInt(args[0]);
		}
		if ( args.length >= 2  ){
			b = Integer.parseInt(args[1]);
		}
		System.out.printf("gcd(%d, %d)= %d\n", a, b, gcd(a, b));
		return;
    }

}