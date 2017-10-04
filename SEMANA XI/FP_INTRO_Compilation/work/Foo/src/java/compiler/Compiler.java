/**
 * Foo toy compiler
 * Demo ANTLR (suing visitors)
 @author loriacarlos@gmail.com 
 @version EIF400.II-2017
 @since 0.0
*/
package foo.compile;


import foo.ast.*;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;

import java.util.*;
import java.util.stream.*;
import java.io.*;

public class Compiler extends FooBaseVisitor<FooAst> implements FooEmiter{
	
   protected String outputFile = null;
   protected FooAst program;
   
   public Compiler(){
	   this(null);
   }
   public Compiler(String outputFile){
	   this.outputFile = outputFile;
   }
   public FooAst getProgram(){
	   return A(this.statements);
   }
   protected List<FooAst> statements = new ArrayList<>();
   
   public void genCode(){
	   try {
	    genCode(outputFile == null ? System.out : new PrintStream(outputFile));
	   } catch (Exception e){
		   throw new RuntimeException(e.getMessage());
	   }
   }
   public void genCode(PrintStream out){
      this.statements.stream()
	                 .forEach( t -> t.genCode(out));
   }
   public FooAst compile(ParseTree tree){
      return visit(tree);
   }
   @Override
   public FooAst visitA(FooParser.AContext ctx){
	   ctx.b().stream()
	          .map(fun -> visit(fun))
	          .forEach( fun -> this.statements.add(fun) );
	   return this.program = A(this.statements);
   }
  
   
   @Override
   public FooAst visitD(FooParser.DContext ctx){
	  return NUM(Double.valueOf(ctx.NUMBER().getText()));
   }
   @Override
   public FooAst visitT(FooParser.TContext ctx){
      return TRUE;
   }
   
   
}
  