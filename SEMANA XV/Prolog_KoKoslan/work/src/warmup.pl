% first(+L, ?F) F es el primero de L

first([F | _], F).     % F es el primero de [F | R]

% second(+L, ?F) F es el segundo de L

% second([_ | [S | _ ] ], S). mas eficiente

second([_, S | _], S).

% second([_ | R], S) :- first(R, S). No lo mas eficiente

largo([], 0).
largo([_ | R], N) :- largo(R, NR), N is 1 + NR.

sumarLista([], 0).
sumarLista([F | R], S) :- sumarLista(R, SR), S is F + SR.

sumarListaRC(L, T) :- sumarListaRC(L, 0, T).
sumarListaRC([], C, C).
sumarListaRC([F | R], C, T) :- C1 is F + C, sumarLista(R, C1, T).


app([], B, B).
app([F | R], B, [F |C ]) :- app(R, B, C).