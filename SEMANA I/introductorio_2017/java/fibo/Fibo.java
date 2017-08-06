public class Fibo {
	
	static 
	long fib( int n ) {
		return n <= 1 ? 1 : fib(  n - 1 ) + fib ( n - 2 );
	}
	static
	public long fibo( int n ){
		// returns fib(n)
		if ( n <= 1 ) 
			return 1;
		long a = 2, b = 1;
		for (int i = 2; i <= n; i++){ 
			long t = a;
			a += b;
			b = t;
		}
		return a;	
	}
	public static void main(String[] args){
		int max = 5;
		if (args.length > 0 ){
			max = Integer.parseInt(args[0]);
		}
		for (int n = 0; n <= max; n++) {
			assert(fib(n) == fibo(n));
			System.out.printf("fibo( %3d ) = %3d =? %3d = fib( %3d ) %n", n, fibo(n), fib(n), n);
		}
	}	
}
