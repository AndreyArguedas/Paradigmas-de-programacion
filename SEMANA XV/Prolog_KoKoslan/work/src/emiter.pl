/*
@author loriacarlos@gmail.com
@since 2017
*/

emit_prog(P, Filename) :-
    open(Filename, write, FileStream, [create([write])]),
	current_output(CurrentOutput),
	set_output(FileStream),
	emit(P),
	close(FileStream),
	set_output(CurrentOutput)
.
emit(prog(L, B)) :-
   forall(member(S, L), emit(S)),
   emit(B)
.

emit(let(X, V)) :- 
                   write('let '),
                   emit(X),
				   write('= '),
				   emit(V),
				   nl
.

emit(lambda(P, E)) :-
				   write('\\'),
				   write(P),
				   write('.'),
				   write(E),
				   nl				   

emit(biOper(Oper, L, R)) :- forall(member(E, [L, Oper, R]), emit(E))
.

emit(id(X)) :- format('~s ', [X]).
emit(num(N)) :- format('~d ', [N]).
emit(oper(O)) :- format(' ~s ', [O]).