/**
 * Foo Emiter
 * Helps at compiling
 * Demo ANTLR
 @author loriacarlos@gmail.com 
 @version EIF400.II-2017
 @since 0.0
 
*/
package foo.compile;

import foo.ast.*;
import java.util.*;

public interface FooEmiter{
	
   
   default FooAst A(List<FooAst> b){ return new FooA(b);}
   default FooNum NUM(double value){ return new FooNum(value);}
   
   
   final FooBool TRUE = new FooBool(true);
   final FooBool FALSE = new FooBool(false);
   
   
}