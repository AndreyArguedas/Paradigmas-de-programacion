// Generated from Lists.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ListsParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, NUMBER=4, SLC=5, MLC=6, WS=7;
	public static final int
		RULE_program = 0, RULE_main_expr = 1, RULE_lists_expr = 2, RULE_list_expr = 3, 
		RULE_pat_expr = 4, RULE_number = 5;
	public static final String[] ruleNames = {
		"program", "main_expr", "lists_expr", "list_expr", "pat_expr", "number"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "','", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "NUMBER", "SLC", "MLC", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Lists.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ListsParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public List<Main_exprContext> main_expr() {
			return getRuleContexts(Main_exprContext.class);
		}
		public Main_exprContext main_expr(int i) {
			return getRuleContext(Main_exprContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			main_expr();
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(13);
				match(T__0);
				setState(14);
				main_expr();
				}
				}
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Main_exprContext extends ParserRuleContext {
		public Lists_exprContext lists_expr() {
			return getRuleContext(Lists_exprContext.class,0);
		}
		public Main_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterMain_expr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitMain_expr(this);
		}
	}

	public final Main_exprContext main_expr() throws RecognitionException {
		Main_exprContext _localctx = new Main_exprContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_main_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			lists_expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Lists_exprContext extends ParserRuleContext {
		public List<List_exprContext> list_expr() {
			return getRuleContexts(List_exprContext.class);
		}
		public List_exprContext list_expr(int i) {
			return getRuleContext(List_exprContext.class,i);
		}
		public Lists_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lists_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterLists_expr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitLists_expr(this);
		}
	}

	public final Lists_exprContext lists_expr() throws RecognitionException {
		Lists_exprContext _localctx = new Lists_exprContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_lists_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(T__1);
			setState(26);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1 || _la==NUMBER) {
				{
				{
				setState(23);
				list_expr();
				}
				}
				setState(28);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(29);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class List_exprContext extends ParserRuleContext {
		public List<Pat_exprContext> pat_expr() {
			return getRuleContexts(Pat_exprContext.class);
		}
		public Pat_exprContext pat_expr(int i) {
			return getRuleContext(Pat_exprContext.class,i);
		}
		public List_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterList_expr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitList_expr(this);
		}
	}

	public final List_exprContext list_expr() throws RecognitionException {
		List_exprContext _localctx = new List_exprContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_list_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			pat_expr();
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(32);
				match(T__0);
				setState(33);
				pat_expr();
				}
				}
				setState(38);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pat_exprContext extends ParserRuleContext {
		public Lists_exprContext lists_expr() {
			return getRuleContext(Lists_exprContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public Pat_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pat_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterPat_expr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitPat_expr(this);
		}
	}

	public final Pat_exprContext pat_expr() throws RecognitionException {
		Pat_exprContext _localctx = new Pat_exprContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_pat_expr);
		try {
			setState(41);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				lists_expr();
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ListsParser.NUMBER, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ListsListener ) ((ListsListener)listener).exitNumber(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\t\60\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\7\2\22\n\2\f\2\16\2\25"+
		"\13\2\3\3\3\3\3\4\3\4\7\4\33\n\4\f\4\16\4\36\13\4\3\4\3\4\3\5\3\5\3\5"+
		"\7\5%\n\5\f\5\16\5(\13\5\3\6\3\6\5\6,\n\6\3\7\3\7\3\7\2\2\b\2\4\6\b\n"+
		"\f\2\2\2-\2\16\3\2\2\2\4\26\3\2\2\2\6\30\3\2\2\2\b!\3\2\2\2\n+\3\2\2\2"+
		"\f-\3\2\2\2\16\23\5\4\3\2\17\20\7\3\2\2\20\22\5\4\3\2\21\17\3\2\2\2\22"+
		"\25\3\2\2\2\23\21\3\2\2\2\23\24\3\2\2\2\24\3\3\2\2\2\25\23\3\2\2\2\26"+
		"\27\5\6\4\2\27\5\3\2\2\2\30\34\7\4\2\2\31\33\5\b\5\2\32\31\3\2\2\2\33"+
		"\36\3\2\2\2\34\32\3\2\2\2\34\35\3\2\2\2\35\37\3\2\2\2\36\34\3\2\2\2\37"+
		" \7\5\2\2 \7\3\2\2\2!&\5\n\6\2\"#\7\3\2\2#%\5\n\6\2$\"\3\2\2\2%(\3\2\2"+
		"\2&$\3\2\2\2&\'\3\2\2\2\'\t\3\2\2\2(&\3\2\2\2),\5\6\4\2*,\5\f\7\2+)\3"+
		"\2\2\2+*\3\2\2\2,\13\3\2\2\2-.\7\6\2\2.\r\3\2\2\2\6\23\34&+";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}