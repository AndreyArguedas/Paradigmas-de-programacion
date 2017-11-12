/*
@author loriacarlos@gmail.com
@since 2017
@status TO DO!! (Exercise)
*/
new_id(id(Id)) :- gensym("x_", Id).
new_case_id(id(Id)) :- gensym("case_", Id).
new_else_id(id(Id)) :- gensym("else_", Id).

compile_all(L, M) :- findall(P, (member(X, L), compile(X, P)), M).

compile( prog(L, B), prog(LC, BC) ) :- !,
          compile_all(L, LC),
		  compile(B, BC)
.
compile( block(L, B), block(LC, BC) ) :- !,
          compile_all(L, LC),
		  compile(B, BC)
.
compile(let(X, B), let(X, BC) ) :- !,
   compile(B, BC)
.
compile(lambda(P, B), NewLambda ) :- !,
    compile(B, BC),
    compile_lambda_pat(P, BC, pcall(fail, null), NewLambda)
.
compile(when(Arrows), Lambda) :- !,
   new_id(Id),
   compile_when(Arrows, lambda(Id, pcall(fail, Id)), Lambda)
.
% compile last case. Don't move it from here!!
compile(S, S) :-
    format('~n***[WARNING] Compiler of ~q must be (probably) implemented! *** ~n', [S])
.
% Lambda Pattern
compile_lambda_pat(num(N), B, Else, lambda(Id, Body) ) :- !,
    new_id(Id),
	Body = ite(biOper(oper('=='), Id, num(N)), B, Else)
.
compile_lambda_pat(id(X), B, _, lambda(id(X), B) ).

% When block
compile_when(Arrows, ElseLambda, lambda(Id, block(Lets, Result) )) :-
     compile_when_arrows(Arrows, ElseLambda, Lets),
	 reverse(Lets, [let(X, _) | RevLets]),
	 new_id(Id),
	 pack_lets(Id, call(X, Id), RevLets, Result)
.
compile_when_arrows([], ElseLambda, [let(RId, ElseLambda)] ) :- new_else_id(RId)
.
compile_when_arrows([lambda(Pat, Body) | Arrows], ElseLambda, [XLet, NextLet | Lets] ) :-
    compile_when_arrows(Arrows, ElseLambda, [NextLet | Lets] ),
	NextLet = let(N, _),
	compile_lambda_pat(Pat, Body, call(N, X), lambda(X, XBody)),
	new_case_id(RX),
	XLet = let(RX, lambda(X, lambda(N, XBody)) )
.

pack_lets(_, Call, [], Call).
pack_lets(Id, LastCall, [let(X, _)  | RevLets], Result) :-
    pack_lets(Id, call(call(X, Id), lambda(Id, LastCall)), RevLets, Result )
.










