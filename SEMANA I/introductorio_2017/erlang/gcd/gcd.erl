% EIF400 loriacarlos@gmail.com
% Para compilar 
% erlc gcd.erl
% Correr por ejemplo
% erl -noshell -run gcd main  666 111 -s init stop
% O tambien
% escript gcd.erl 666 111
% 

-module(gcd).
-export([main/1, main/0]).

get_args(Args) ->
   case Args of
      [A, B | _] -> {string:to_integer(A), string:to_integer(B)};
	  [A] -> {string:to_integer(A), {0, ok}};
	   _ -> {{0,ok}, {0, ok}}
	end
.
gcd(A, B) -> %throw('*** gcd unimplemented ***')
   case {A, B} of
      {A, A} -> A;
      {0, B} -> B;
      {A, 0} -> A;
      {A, B} when A > B -> gcd(A - B, B);
       _     -> gcd(A, B - A)
   end	   
.
main() -> main([]).
main(Args) ->
    {{A, _EA}, {B, _EB}} = get_args(Args),
	io:format("gcd(~p, ~p)= ~p~n", [A, B, gcd(A, B)]),
	halt()
.