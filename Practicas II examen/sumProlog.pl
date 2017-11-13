sumB(M, E) :- sumB(M, E, 0, 0).
sumB(0, _, Acumulador, Acumulador).
sumB(Max, Epsilon, Acumulador, Cont) :- Acumulador > Epsilon,
                                        Min is Cont - 1,
                                        pow(Epsilon, Min, Z),
                                        Acumulador is Cont * Z,
                                        Max1 is Max - 1,
                                        Cont1 is Cont + 1,
                                        sumB(Max1, Epsilon, Acumulador, Cont1).

pow(_, 0, 1).
pow(1, _, 1).
pow(X, 1, X).
pow(X, Y, Z) :-  Y > 1,
                 Y1 is Y - 1,
                 pow(X, Y1, Z1),
                 Z is Z1 * X.


todosiguales([]).
todosiguales([X | R]) :- select(X, R, L), todosiguales(L).


factorial(1, 1).
factorial(N, Y) :-
                   N > 1,
                   N1 is N - 1,
                   factorial(N1, Y1),
                   Y is N * Y1.

fibonacci(0, 0).
fibonacci(1, 1).
fibonacci(N, Y) :- N > 1,
                   N1 is N - 1,
                   fibonacci(N1, Y1),
                   N2 is N -2,
                   fibonacci(N2, Y2),
                   Y is Y1 + Y2.


mcd(X, X, X).
mcd(X, Y, Z) :- X > Y,
                X1 is X - Y,
                mcd(X1, Y, Z).

mcd(A, B, C) :- B > A,
                mcd(B, A, C).

longitud([], 0).
longitud([_ | R], Y) :- longitud(R, NR),
                        Y is 1+ NR.

maximo([X], X).
maximo([X1, X2 | L] , Y) :- X3 is max(X1, X2),
                           maximo([X3 | L], Y).


ordenada([]).
ordenada([_]).
ordenada([X1, X2 | T]) :- X1 < X2,
                          ordenada([X2 |T]).

listaN(N, L) :- lista_aux(N, N, L).
lista_aux(_, 0, []).
lista_aux(E, M, [E |L]) :- M > 0,
                      M1 is M - 1,
                      lista_aux(E, M1, L).



k_esimo(1, [H | _], H).
k_esimo(K, L, R) :- aux(K, 1, L, R).
aux(K, K, [H | _], H).
aux(K, C, [_ | L], R) :- K > C,
                         C1 is C + 1,
                         aux(K, C1, L, R).