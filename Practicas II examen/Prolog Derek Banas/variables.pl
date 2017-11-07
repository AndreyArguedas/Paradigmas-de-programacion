male(albert).
male(bob).
male(carl).
male(bill).

female(alice).
female(betsy).

brother(bob, bill).

parent(albert, bob).
parent(albert, betsy).
parent(bob, carl). %Note que Carl es nieto de alber
parent(bob, alice).

%Hacer predicados propios

get_grandchild :-
    parent(albert, X),
    parent(X, Y),
    write('Albert granchild is '),
    write(Y), nl.

grand_parent(X, Y) :-
    parent(Z, X),
    parent(C, Z).


what_grade(5) :-
    write('Go to Kindergarden').

what_grade(6) :-
    write('Go to School').

what_grade(Other) :-
    Grade is Other - 5,
    format('Go to grade ~w', [Grade]).