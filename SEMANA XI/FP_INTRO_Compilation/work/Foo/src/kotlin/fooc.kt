/**
 * Foo toy compiler
 * Demo ANTLR (suing visitors)
 @author loriacarlos@gmail.com 
 @version EIF400.II-2017
 @since 0.0
*/

package foo.kotlin.compile;
import foo.compile.*;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;
import java.io.*;

const val VERSION = "FooBitc v0.0 CR EIF400.II-2017.kotlin"

fun main(args : Array<String>){
    println("\n...............................................")
	println(">>> $VERSION <<<");
	println("...............................................\n")
	
	var inputFile : String? = null
	var outputFile : String? = null
	
	if (args.size > 0) 
		  inputFile = args[0]
	  
	var  inStream : InputStream = System.`in`
	
	if (inputFile != null){
	   inStream = FileInputStream(inputFile);
	   System.err.println("Fooc Reading from $inputFile");
	} else {
	   System.err.println("Fooc Reading from console (enter CTRL-Z+ENTER to finish");
	}
	 // Setup Lexer/Parser
	val input = ANTLRInputStream(inStream);
	val lexer = FooLexer(input);
	val tokens = CommonTokenStream(lexer);
	val parser = FooParser(tokens);
	
	// Parse, Compile and Generate code
	// Starting point is rule (context) a (See grammar Foo.g4)
	val tree = parser.a(); 
	
	// Compile
	if (args.size > 1) 
	  outputFile = args[1];
	val compiler = Compiler(outputFile);
	compiler.compile(tree);
	// Write code
	System.err.println("Fooc Writing to $outputFile");
	compiler.genCode();
        
}