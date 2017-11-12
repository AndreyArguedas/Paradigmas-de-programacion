/*
@author loriacarlos@gmail.com
@since 2017
*/
defaultId(id('#x')).

path(P, Lets) :- defaultId(I), 
                 path(P, [], I, Lets)
.
path(id(X), Route, I, [let(id(X), V)]) :- 
   pack(I, Route, V)
.
path([], Route, I, [let(id('_'), V == [] )] ) :- 
    pack(I, Route, V)
.
path([P | Q], Route, I, Path) :-
   path(P,  [head | Route], I, PPath),
   path(Q,  [tail | Route], I, QPath),
   append(PPath, QPath, Path)
.
      
pack(I, [], I).
pack(I, [O | R], T) :- pack(I, R, TR), T =.. [O, TR].