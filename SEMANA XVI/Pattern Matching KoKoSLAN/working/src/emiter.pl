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

emit(block(L, B)) :-
   write('{'),
   forall(member(S, L), emit(S)),
   emit(B),
   write('}')
.

emit(let(X, V)) :- 
                   write('let '),
                   emit(X),
				   write('= '),
				   emit(V),
				   nl
.
emit(call(L, A)) :- emit_parent(L),
                    write('('), emit(A), write(')')
.
emit(pcall(N, A)) :- emit_parent(id(N)),
                    write('('), emit(A), write(')')
.
emit(lambda(X, B)) :-
                    write('\\ '), emit(X), write('. '),
					emit(B)
.
emit(biOper(Oper, L, R)) :- forall(member(E, [L, Oper, R]), emit(E))
.
emit(ite(C, T, E)) :-  emit(C), 
                       write(' ? '),
					   emit(T),
					   write(' : '),
					   emit(E)
.
emit(null) :- format('~s ', [null]).
emit(id(X)) :- format('~s ', [X]).
emit(num(N)) :- format('~d', [N]).
emit(bool(X)) :- format('~s ', [X]).
emit(oper(O)) :- format('~s ', [O]).


emit_parent(id(X)) :- !, emit(id(X)).
emit_parent(L) :- write('('), emit(L), write(')').