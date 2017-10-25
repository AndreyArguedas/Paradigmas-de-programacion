// Generated from grammar/Foo.g4 by ANTLR 4.7
package foo.compile;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link FooParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface FooVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link FooParser#a}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitA(FooParser.AContext ctx);
	/**
	 * Visit a parse tree produced by {@link FooParser#b}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitB(FooParser.BContext ctx);
	/**
	 * Visit a parse tree produced by {@link FooParser#d}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitD(FooParser.DContext ctx);
	/**
	 * Visit a parse tree produced by {@link FooParser#t}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitT(FooParser.TContext ctx);
	/**
	 * Visit a parse tree produced by {@link FooParser#f}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitF(FooParser.FContext ctx);
}