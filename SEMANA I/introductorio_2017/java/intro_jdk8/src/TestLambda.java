/**
 <p>Simple samples of FP
 @author Carlos Loría-Sáenz
 @since 2015
*/
package eif400fp.demo.basic;
import java.util.Hashtable;
import java.util.function.*;
public class TestLambda{
   public static void main(String[] args){
     Hashtable<String, Function<Integer, Integer>> ht = new Hashtable<>();
	 ht.put("foo", x -> x);
	 System.out.println(ht.get("foo").apply(0));
	 Function<Integer, Integer> foo = x -> x+1;
	 foo.apply(new Integer(1));
	 System.out.println(foo.getClass().getName());
   }
}