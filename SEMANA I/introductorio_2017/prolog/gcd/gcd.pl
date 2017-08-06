/*
  Run: swipl gcd.pl -- 33 66 
*/
% Prolog reglas sabor imperativo
	gcd(A, A, A) :- !.
	gcd(0, B, B) :- !.
	gcd(A, 0, A) :- !.
	gcd(A, B, D) :- A > B, !, 
					A1 is A - B, gcd(A1, B, D).
	gcd(A, B, D) :- B1 is B - A, 
					gcd(A, B1, D).
					
				
				
:- 
    current_prolog_flag(argv, Argv),
	(Argv = [AS |_]    -> atom_number(AS, A) ; A = 0 ),
	(Argv = [_, BS |_] -> atom_number(BS, B) ; B = 0 ),
	gcd(A, B, D),
    format('gcd(~d, ~d)= ~d~n', [A, B, D]),
	halt
	
.





