
(*
   Ver https://ocaml.org/learn/tutorials/data_types_and_matching.html
   
*)
	type 'a binary_tree =
		| Leaf of 'a
		| Tree of 'a binary_tree * 'a binary_tree
	;;
		
	type expr =
		| Plus of expr * expr        (* means a + b *)
		| Minus of expr * expr       (* means a - b *)
		| Times of expr * expr       (* means a * b *)
		| Divide of expr * expr      (* means a / b *)
		| Value of string            (* "x", "y", "n", etc. *)
	;;

	let rec to_string e =
		match e with
		| Plus (left, right) ->
		   "(" ^ to_string left ^ " + " ^ to_string right ^ ")"
		| Minus (left, right) ->
		   "(" ^ to_string left ^ " - " ^ to_string right ^ ")"
		| Times (left, right) ->
		   "(" ^ to_string left ^ " * " ^ to_string right ^ ")"
		| Divide (left, right) ->
		   "(" ^ to_string left ^ " / " ^ to_string right ^ ")"
		| Value v -> v
	;;


	
	
	