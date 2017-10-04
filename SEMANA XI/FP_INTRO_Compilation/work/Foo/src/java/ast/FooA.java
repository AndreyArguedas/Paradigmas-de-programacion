/**
 @author loriacarlos@gmail.com
 
*/
package foo.ast;
import java.util.*;
import java.io.*;
public class FooA implements FooAst{
   private List<FooAst> b;
   
   public FooA(List<FooAst> b){
      this.b = b;
	  
   }
   public void genCode(PrintStream out){
       this.b.stream().forEach( t -> t.genCode());
   }
}