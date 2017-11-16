factCola(N, F) :- factColaAux(N, 1, F).

factColaAux(0, A, A).
factColaAux(1, A, A).
factColaAux(N, A, F) :-    N > 1,
                           N1 is N - 1,
                           A1 is N * N1 * A,
                           NF is N1 - 1, 
                           factColaAux(NF, A1, F).