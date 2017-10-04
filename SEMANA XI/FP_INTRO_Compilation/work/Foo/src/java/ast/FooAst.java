/**
 @author loriacarlos@gmail.com
 
*/
package foo.ast;
import java.io.*;

public interface FooAst{
   default void genCode(){
      genCode(System.out);
   }
   default void genCode(PrintStream out){
   }
}