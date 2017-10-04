
app([], M, M).
app([F | R], M, [F | N]) :- app(R, M, N).