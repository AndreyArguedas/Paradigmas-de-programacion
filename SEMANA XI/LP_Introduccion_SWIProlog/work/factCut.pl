/*
@author loriacarlos@gmail.com
@since EIF400-2017 
*Factorial (no recursivo de cola) con cut
*/
% fact(N+, F-) F (de salida) es el factorial de N (de entrada)

fact(0, 1) :- !.
fact(N, F) :- N1 is N - 1,  
		      fact(N1, F1), 
		      F is N * F1.  
%Goal
:- fact(7, F), format("fact(~d)=~d", [7, F]).
   
   
   
   
			   
		   
			   
			   