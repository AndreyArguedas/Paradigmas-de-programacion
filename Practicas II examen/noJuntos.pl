solve(0, 0).
solve(N, S) :- solve_aux(N, 0, S).
solve_aux(0, I, 0 + I).
solve_aux(N, I, S) :- 
                      N1 is N - 1,
                      I1 is I + 1,
                      solve_aux(N1, I1, S1),
                      S = N1 + I1.


foo(L, N) :- member(X, L), X = N, write(X), nl, fail.