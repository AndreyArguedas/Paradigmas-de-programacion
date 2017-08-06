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
		int init = 0, max = 5;
		long sum = 0;
		if (args.length > 1 ){
			init = Integer.parseInt(args[0]);
			max = Integer.parseInt(args[1]);
		}
		long before = System.currentTimeMillis();
		for (int n = init; n <= max; n++) {
			sum += fibo(n); sum += fib(n);
			//System.out.printf("fibo( %3d ) = %3d =? %3d = fib( %3d ) %n", n, fibo(n), fib(n), n);
		}
		long after = System.currentTimeMillis();
		System.out.printf("%nEllapsed(sum=%d) %d s%n",  sum, (after - before)/1000);
	}	
}
