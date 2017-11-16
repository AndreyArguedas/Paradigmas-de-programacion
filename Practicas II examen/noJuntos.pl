noJuntos(L, X, Y) :- append([X, _ | _], [Y | _], L).

solveList(N, L) :- findall(S, solve(N, S), L).

solve(N, S) :- solve_aux(X, Y, N),
               S = X + Y.

solve_aux(X, Y, N) :- numlist(0, N, NL),
                      member(X, NL),
                      Y is N - X.



foo(L, N) :- member(X, L), X = N, write(X), nl, fail.