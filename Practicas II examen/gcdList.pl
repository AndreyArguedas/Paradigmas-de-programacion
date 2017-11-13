gcdList([X], X).

gcdList([X1, X2 | L], Z) :- D is gcd(X1, X2),
                            gcdList([D | L], Z).
                  
