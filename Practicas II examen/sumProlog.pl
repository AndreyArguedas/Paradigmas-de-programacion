sumB(M, E) :- sumB(M, E, 0).
sumB(0, _, 0).
sumB(Max, Epsilon, Res) :- RES < Epsilon -> RES ; Res2 is Res + Max * Epsilon, sumB(Max is Max - 1, Epsilon, Res2).


todosiguales([]).
todosiguales([X | R]) :- select(X, R, L), todosiguales(L).