package eif400fp.demo.primes;
import java.util.stream.*;
import java.util.*;

/**
	<p> find the first prime between a and b using imperative and FP style
	<p>Illustrates lazyness and iteration styles
	<p>Collection versus iteration
@author Carlos Loría-Sáenz
@since 2016
*/
public class FirstPrime {
    static public boolean isPrime(int n){
	   if(n <= 1) return false;
	   for(int i = 2; i*i <= n; i++){
	      if(n%i == 0) return false;
	   };
	   
	   return true;
	  
	}
	/**
	  *FP Version of isPrime
	  *@param n number to test
	  *@return true if n is prime
	*/
	static public boolean isPrimeFP(int n){
	   return IntStream.range(2, (int)Math.sqrt(n))
					   .noneMatch( i-> n % i == 0);
	                   
	}
	static public int findFirstPrime(int a, int b){
	    OptionalInt f = IntStream.range(a, b)
						         .filter(i -> isPrimeFP(i))
						         .findFirst();
						  
		if(f.isPresent()) return f.getAsInt();
		else return -1;

	}
	public static void main(String[] args) throws Exception {
	   long before, after;
	   before = System.currentTimeMillis();
	   int fp = 0;
	   long times = 1000;
	   for(long i = 1; i < times; i++){
	     fp = findFirstPrime(3002005, 15000000);
	   }
	   after = System.currentTimeMillis();
	   System.out.format("%n*** Results ***%n");
	   System.out.format("First prime: %d", fp);
	   System.out.format("Average Ellapsed time: %f ms%n", (double)(after - before)/times);
	
	}
	
	
}