/**
 @author loriacarlos@gmail.com
 
*/
package foo.ast;
import java.io.*;
public class FooAtom<T> implements FooAst{
   private T value;
   public T getValue(){return this.value;}
   
   public FooAtom(T value){
      this.value = value;
   }
   public void genCode(PrintStream out){
      out.print(this.value);
   }
}