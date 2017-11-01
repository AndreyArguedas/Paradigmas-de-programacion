/*
  * Tests demo ac3
  * Only R1 y R2 types
  @author loriacarlos@gmail.com
  @since 2017
*/
:- [ac3].

test1(X, Y, Z, RDom) :-
     csp(
	     [
		  dom(X, [10, 1, 2, 30]),
		  dom(Y, [1, 30]),
		  dom(Z, [20])
		 ],
		 [
		  rel(X, true ),
		  rel(Y, true),
		  rel(Z, true)
		 ],
		 [
		   rel([X, Y], X = Y),
		   rel([Y, Z], Y < Z)
		 ],
		 RDom
	 )
.

main(X, Y, Z) :- 
   nl,nl,
   writeln('>>> Test1 CSP Demo Starts <<<'),
   writeln([x=X, y=Y, z=Z]),   
   test1(X, Y, Z, Dom), 
   X=x, Y=y, Z=z,
   write('Solution='), writeln(Dom),
   writeln('>>> Test1 CSP Demo Ends <<<')
   ,!
.
