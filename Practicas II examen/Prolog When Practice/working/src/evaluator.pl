/*
@author loriacarlos@gmail.com
@since 2017
*/
:- [context].

eval_prog(P) :-
   format('~n>>> Evaluator starts <<<~n~n',[]),
   context_new(CTX),
   eval(P, CTX, Result),
   format('>>> ~q~n', [Result])
.
eval(prog(L, B), CTX, VB) :-
   forall(member(S, L), eval(S, CTX, _)),
   eval(B, CTX, VB)
.
eval(block(L, B), CTX, VB) :-
   context_new(BCTX, CTX),
   forall(member(S, L), eval(S, BCTX, _)),
   eval(B, BCTX, VB)
.

eval(let(X, V), CTX, VV) :- 
   eval(V, CTX, VV),
   context_add(CTX, X, VV)
.
eval(call(Lambda, Arg), CTX, V) :-
     eval(Lambda, CTX, Closure),
	 eval(Arg, CTX, Varg),
	 apply_closure(Closure, Varg, V)
.

eval(pcall(Prim, Arg), CTX, VP) :-
     eval(Arg, CTX, Varg),
	 apply_prim(Prim, Varg, VP)
.
eval(lambda(X, B), CTX, closure(X, B, LambdaCTX) ) :-
    context_new(LambdaCTX, CTX)
.

eval(biOper(Oper, L, R), CTX, OV) :- 
   eval(L, CTX, LV),
   eval(R, CTX, RV),
   apply_oper(Oper, LV, RV, OV)
.
eval(ite(Cond, L, R), CTX, TV) :- 
   eval(Cond, CTX, Test),
    (Test = true -> 
          eval(L, CTX, TV);
          eval(R, CTX, TV)
    )
.

eval(null, _, null).
eval(id(X), CTX, VX) :- context_find(CTX, id(X), VX).
eval(num(N), _, N).
eval(bool(B), _, B).
eval([], _, []).
eval([X | R], CTX, [VX | VR]) :-
     eval(X, CTX, VX),
	 eval(R, CTX, VR)
.

% APPLY
apply_oper(oper('+'), L, R, V) :- V is L + R. 
apply_oper(oper('=='), L, R, B) :- (L = R -> B=true ; B=false). 

apply_closure(closure(X, B, CCTX), Varg, VB) :-
    context_add(CCTX, X, Varg),
	eval(B, CCTX, VB)
.
apply_prim(fail, V, V) :-
    throw(exceptio('Pattern-matching failure'))
.
apply_prim(first, [F |_], F).
apply_prim(rest,  [_ |R], R).
