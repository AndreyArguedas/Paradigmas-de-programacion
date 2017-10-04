/*
@author loriacarlos@gmail.com
@since EIF400-2017 
* not casero
*/

nein(P) :- call(P), !, fail.
nein(_).

