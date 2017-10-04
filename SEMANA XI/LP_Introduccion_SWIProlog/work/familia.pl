/*
@author loriacarlos@gmail.com
@since EIF400-2017 
*/
%%%%%%%%%%%%%%%%%%%%%%%%% PRACTICA FAMILIA %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                  Nociones de predicados y recursion
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% FACTS
%
mujer(catalina).
mujer(dora).
mujer(raquel).
mujer(ana).
mujer(birgit).
%
hombre(beto).
hombre(chico).
hombre(juan).
hombre(carlos).
hombre(pedro).
%
% padre(?P, ?H): P es el padre/madre de H
padre(catalina, beto).
padre(catalina, chico).
padre(catalina, raquel).
padre(pedro, beto).
padre(pedro, chico).
padre(pedro, raquel).
padre(beto, ana).
padre(beto, juan).
padre(beto, carlos).
padre(dora, ana).
padre(dora, juan).
padre(birgit, carlos).

% PROGRAMAS SON  REGLAS (clausulas)
% definimos: papa, mama, hermano, abuelo, tio, primo, ancestro.
% papa(?P, ?H) P es un hombre y es padre de H

papa(X, Y) :-  hombre(X), padre(X, Y).
abuelo(X, Y)  :- hombre(X), padre(X, Z), padre(Z, Y).
sonHermanos(X, Y) :- padre(P, X), padre(P, Y), X\=Y.

ancestro(X, Y) :- padre(X, Y).
ancestro(X, Y) :- padre(X, Z), ancestro(Z, Y).
% Nota no funciona si hay recursion a la izquierda!
% ancestro(X, Y) :- ancestro(X, Z), ancestro(Z, Y).
% Se cicla infinitamente
%
% Colectando soluciones con "findall"
todos_los_hermanos(X, LS) :-
  findall(H, sonHermanos(X, H), L),
  sort(L, LS).

%Ejercicio: Elimine la llamada a sort. Explique por qué salen repetidos.

%Ejercicio: escriba sonPrimos(X, Y): X y Y son primos: hijos de padres hermanos