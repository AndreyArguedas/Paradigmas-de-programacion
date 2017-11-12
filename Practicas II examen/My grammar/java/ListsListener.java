// Generated from Lists.g4 by ANTLR 4.7
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ListsParser}.
 */
public interface ListsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ListsParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(ListsParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(ListsParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link ListsParser#main_expr}.
	 * @param ctx the parse tree
	 */
	void enterMain_expr(ListsParser.Main_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#main_expr}.
	 * @param ctx the parse tree
	 */
	void exitMain_expr(ListsParser.Main_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ListsParser#lists_expr}.
	 * @param ctx the parse tree
	 */
	void enterLists_expr(ListsParser.Lists_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#lists_expr}.
	 * @param ctx the parse tree
	 */
	void exitLists_expr(ListsParser.Lists_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ListsParser#list_expr}.
	 * @param ctx the parse tree
	 */
	void enterList_expr(ListsParser.List_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#list_expr}.
	 * @param ctx the parse tree
	 */
	void exitList_expr(ListsParser.List_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ListsParser#pat_expr}.
	 * @param ctx the parse tree
	 */
	void enterPat_expr(ListsParser.Pat_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#pat_expr}.
	 * @param ctx the parse tree
	 */
	void exitPat_expr(ListsParser.Pat_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ListsParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(ListsParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link ListsParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(ListsParser.NumberContext ctx);
}