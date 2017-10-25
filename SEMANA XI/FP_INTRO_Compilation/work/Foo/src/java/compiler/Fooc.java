/**
 * Foo controller of compilation
 * Purpose is to start a compilation
 * Demo ANTLR
 @author loriacarlos@gmail.com 
 @version EIF400.II-2017
 @since 0.0
*/
package foo.compile;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;

import java.io.FileInputStream;
import java.io.InputStream;


public class Fooc {
	public static final String VERSION = "FooBitc v0.0 CR EIF400.II-2017";
	
    public static void main(String[] args) throws Exception {
		System.out.println("\n...............................................");
		System.out.println(">>> " + VERSION + " <<<");
		System.out.println("...............................................\n");
		// Get parameters
        String inputFile = null, 
		       outputFile = null;
        if (args.length > 0) 
		  inputFile = args[0];
	  
        InputStream is = System.in;
		
        if (inputFile != null){
 		   is = new FileInputStream(inputFile);
		   System.out.println("Fooc Reading from " + inputFile);
		} else{
		   System.out.println("Fooc Reading from console (enter CTRL-Z+ENTER to finish");
		}
		 // Setup Lexer/Parser
        CharStream input = CharStreams.fromStream(is);
        FooLexer lexer = new FooLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        FooParser parser = new FooParser(tokens);
		
		// Parse, Compile and Generate code
		// Starting point is rule (context) a (See grammar Foo.g4)
        ParseTree tree = parser.a(); 
        // Compile
		if (args.length > 1) 
		  outputFile = args[1];
		Compiler compiler = new Compiler(outputFile);
		compiler.compile(tree);
		// Write code
	    System.err.println("Fooc Writing to " + outputFile);
		compiler.genCode();
		
    }
}
