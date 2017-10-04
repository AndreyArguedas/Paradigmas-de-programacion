/*
@author loriacarlos@gmail.com
@since EIF400-2017 
*Factorial (no recursivo de cola)
*/
% fact(N+, F-) F (de salida) es el factorial de N (de entrada)

fact(0, 1). %  FACT: 1 es el factorial de 0
fact(N, F) :- N > 0,        % N es mayor que cero
		      N1 is N - 1,  % y N1 es N menos 1
		      fact(N1, F1), % y F1 es el factorial de N1
		      F is N * F1.  % F es N veces F1
%Goal
:- fact(7, F), format("fact(~d)=~d", [7, F]).
   
   
   
   
			   
		   
			   
			   