%largo(?L, -N) N es el largo de la lista L
 
largo([], 0).
largo([ _ | R], N) :- largo(R, NR), N is NR + 1.
 
largoRC(L, T) :- largoRC(L, 0, T).
largoRC([], C, C).
largoRC([ _ | R], C, T) :- C1 is 1 + C, largoRC(R, C1, T).
 
 
 
app([], B, B).
app([ F | R], B, [ F | C ]) :- app(R, B, C).
 
copy([], []).
copy([F | R], [F | B]) :- copy(R, B).
 
copy_app(A, B) :- append([], A, B).

 
find(X, [ X | _ ]) :- !.
find(X,  [_ | R ] ) :- find(X, R).
 
mayor(X, Y, X) :- X > Y, !.
mayor(_, Y, Y).
 
 
test12(X) :- X = 1 ; X = 2.
 
mayorITE(X, Y , Z) :- (X >= Y -> Z=X ; Z = Y).