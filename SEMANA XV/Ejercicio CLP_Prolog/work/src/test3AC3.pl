:- use_module(library(clpfd)).

test3(A, B, C, D, E) :-
           throw('test3 not implemented: Do it!')
.

main(A, B, C, D, E) :- 
   nl,nl,
   writeln('>>> Test3 CSP Demo Starts <<<'),
   test3(A, B, C, D, E), 
   writeln('>>> Test3 CSP Demo Ends <<<')
.