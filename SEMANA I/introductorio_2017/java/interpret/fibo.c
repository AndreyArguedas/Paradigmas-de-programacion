/*
 From https://stackoverflow.com/questions/10192903/time-in-milliseconds
 http://pubs.opengroup.org/onlinepubs/7908799/xsh/systime.h.html
*/
#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>

 
	long fib( int n ) {
		return n <= 1 ? 1 : fib(  n - 1 ) + fib ( n - 2 );
	}
	
	long fibo( int n ){
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
int  main (int argc, char *argv[]) {
	struct timeval stop, start;
	int init = 0, max = 5;
	long sum = 0;
	if (argc > 1 ){
			init = atoi(argv[1]);
			max = atoi(argv[2]);
		}
	gettimeofday(&start, NULL);
	for (int n = init; n <= max; n++) {
		    sum += fibo(n); sum += fib(n);
			//printf("fibo( %3d ) = %3d =? %3d = fib( %3d ) \n", n, fibo(n), fib(n), n);
		}
	gettimeofday(&stop, NULL); 
	printf("\nEllapsed(sum=%d) %ds\n",  sum, (stop.tv_sec - start.tv_sec));
}