package eif400.work;

import java.util.*;
public class Snippets {
	
	String foo(Object x){
		return (String)x;
	}
		
	ArrayList<String> goo(){
		return new ArrayList<String>();	
	}	
	
	public void main(){
		int x = 0;
		if ( x - 1 > 0)
			x = 1;
		
		// ...
		//foo( new Integer(666) ); // OK
		
		List<Integer> list = Arrays.asList(1, 2, 3);
		
		Arrays.asList(1, 2, 3)
		    .stream()
		    .map( n -> String.format("n=%d", n) )
		    .forEach( s -> System.out.println(s) );
		    
		
	}
	
}