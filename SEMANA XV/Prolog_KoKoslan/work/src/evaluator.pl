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

eval(let(X, V), CTX, VV) :-
   eval(V, CTX, VV),
   context_add(CTX, X, VV)
.
eval(biOper(Oper, L, R), CTX, OV) :- 
   eval(L, CTX, LV),
   eval(R, CTX, RV),
   writeln(LV),
   writeln(RV),
   apply_oper(Oper, LV, RV, OV)
.

eval(call(H, A), CTX, CV) :-
    eval(A, CTX, CV),
    writeln(CV),
    eval(H, CTX, HV),
    writeln(HV)
.

eval(id(X), CTX, VX) :- writeln(id(X)), context_find(CTX, id(X), VX).
eval(lambda(P, E), CTX, LV) :- writeln(lambda(P, E)), context_has_key(CTX, lambda(P, E)) -> context_find(CTX, lambda(P, E), LV) ; context_add(CTX, lambda(P, E), LV).
eval(num(N), _, N).

apply_oper(oper('+'), L, R, V) :- V is L + R. 

apply_oper(oper('*'), L, R, V) :- V is L * R. 