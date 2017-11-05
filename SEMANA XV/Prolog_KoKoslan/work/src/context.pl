/*
@author loriacarlos@gmail.com
@since 2017
*/
:- dynamic context/2.
:- dynamic context_key_value/3.

genId(Ctx) :- gensym("ctx_", Ctx).

context_clean :-
   retractall(context(_,_)),
   retractall(context_key_value(_,_,_)),
   reset_gensym
.

:- context_clean.

context_new(This) :-
   context_new(This, null)
.
context_new(This, Super) :-
     genId(This),
	 assert(context(This, Super))
.

context_new_from(This, LV, Super) :-
   context_new(This, Super),
   forall(member(Key, LV), context_add(This, Key, null)) 
.

context_parent(This, Super) :- 
    context(This, Super),
	Super \= null
.

context_has_key(This, Key) :-
   context_key_value(This, Key, _)
.

context_add(This, Key, Val) :-
   context_has_key(This, Key), !,
   retract(context_key_value(This, Key, _)),
   assert(context_key_value(This, Key, Val))
.	 
context_add(This, Key, Val) :-
      assert(context_key_value(This, Key, Val))
.

context_find(This, Key, Val) :-
	 context_key_value(This, Key, Val),!
.
context_find(This, Key, Val) :-
     context_parent(This, Super),
     context_find(Super, Key, Val) ,!
.
context_find(This, Key, _) :-	
     swritef(Msg, '*** Key ~q not found in context ~q***', [Key, This]),
     throw(exception(Msg))
.	 