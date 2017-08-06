#include <stdio.h>
#include <stdlib.h>

    // C plain
	int gcd(int a, int b){
	   if (a == 0) return b;
	   if (b == 0) return a;
		while ( a != b ){
			if ( a > b ) a = a - b;
			else b = b - a;	
		}
		return a;
	}



int  main (int argc, char *argv[]) {
	    int a = 0, b = 0;
		if ( argc >= 2  ){
			a = atoi(argv[1]);
		}
		if ( argc >= 3  ){
			b = atoi(argv[2]);
		}
		printf("gcd(%d, %d)= %d\n", a, b, gcd(a, b));
		return 0;
}

