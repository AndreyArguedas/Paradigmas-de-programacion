loves(romeo, juliet).

loves(juliet, romeo) :- loves(romeo, juliet).

male(albert).
male(bob).

female(alice).
female(betsy).

happy(albert). %Necesario para que corra lo de abajo
happy(alice).

with_albert(alice).

runs(albert) :-
    happy(albert).

dances(alice) :-
    happy(alice),
    with_albert(alice).

does_alice_dance :- dances(alice),
                    write("When alice is happy and with Albert she dances").
