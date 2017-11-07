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

eval(lambda(X, Body), CTX, closure(X, Body, LambdaCTX)) :- 
    context_new(LambdaCTX, CTX)
.

eval(call(F, Arg), CTX, Result) :-
    eval(F, CTX, Closure),
    eval(Arg, CTX, ValueOfArg),
    beta_reduce(Closure, ValueOfArg, Result) 
.


eval(biOper(Oper, L, R), CTX, OV) :- 
   eval(L, CTX, LV),
   eval(R, CTX, RV),
   apply_oper(Oper, LV, RV, OV)
.



eval(id(X), CTX, VX) :- context_find(CTX, id(X), VX).
eval(num(N), _, N).
eval(listP(L), _,L).

apply_oper(oper('+'), L, R, V) :- V is L + R. 

apply_oper(oper('*'), L, R, V) :- V is L * R.

beta_reduce(closure(X, Body, CTX), ValueOfArg, Result) :-
    writeln(X),
    writeln(Body),
    writeln(ValueOfArg),
    context_add(CTX,X,ValueOfArg),
    eval(Body, CTX, Result)
.

