/*
  * Tests demo ac3
  * Allows several relations
  @author loriacarlos@gmail.com
  @since 2017
*/
:- [ac3].

test2(A, B, C, D, E, RDom) :-
     csp(
	     [
		  dom(A, [1,2,3,4]),
		  dom(B, [1,2,4]),
		  dom(C, [1,3,4]),
		  dom(D, [1,2,3,4]),
		  dom(E, [1,2,3,4])
		 ],
		 [
		  rel(A, true ),
		  rel(B, true ),
		  rel(C, true ),
		  rel(D, true ),
		  rel(E, true)
		  ],
		 [
		   rel([A, B], A=\=B),
		   rel([B, C], B =\= C),
		   rel([C, D], C < D),
		   rel([B, D], B =\= D),
		   rel([A, D], A =:= D),
		   rel([A, E], A > E),
		   rel([B, E], B > E),
		   rel([C, E], C > E),
		   rel([D, E], D > E)
		 ],
		 RDom
	 )
.

main(A, B, C, D, E) :- 
   nl,nl,
   writeln('>>> Test2 CSP Demo Starts <<<'),
   writeln([A=a, B=b, C=c, D=d, E=e]),   
   test2(A, B, C, D, E, Dom), 
   A=a, B=b, C=c, D=d, E=e,
   write('Solution='), writeln(Dom),
   writeln('>>> Test2 CSP Demo Ends <<<')
   ,!
.
