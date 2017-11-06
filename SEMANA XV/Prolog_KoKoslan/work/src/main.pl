/*
@author loriacarlos@gmail.com
@since 2017
*/
:- [compiler, emiter, evaluator].
outDir('output').
case('simple.kl',
     prog(
     [
        let(id(x), num(666)),
		let(id(y), id(x))
     ], 
	 biOper(oper('+'), id(x), id(y))
   )
).

case('mult.kl',
     prog(
     [
        let(id(x), num(666)),
		let(id(y), id(x))
     ], 
	 biOper(oper('+'), biOper(oper('*'), id(x), id(y)), id(x))
   )
).

case('cases_closure.kl',
     prog(
     [
        let(id(y), num(666)),
		let(id(f), lambda(id(x),biOper(oper('+'), id(x), id(y))))
     ], 
	 call(id(f), num(555))
   )
).

case('cases_lambda_apply.kl',
     prog(
     [
        let(id(y), num(666)),
		let(id(f), lambda(id(x),call(id(x), id(y)))),
        let(id(g), lambda(id(x),biOper(oper('+'), id(x), id(y))))
     ], 
	 call(id(f), id(g))
   )
).

get_test_case(File, Filename, SourceAst) :-
   outDir(OutDir),
   case(File, SourceAst),
   (exists_directory(OutDir) -> true ; (format('Create dir named ~q first', [OutDir]), flush_output, abort)),
   atomic_list_concat([OutDir, File], '/', Filename)
.

main(File) :-
   format('~n>>> Starting Kokoslan Demo in Prolog for ~q case <<<~n', [File]),
   % Get Test Case Parameters
   get_test_case(File, Filename, SourceAst),
   % Compile and Emit
   compile(SourceAst, TargetAst),
   emit_prog(TargetAst, Filename),
   eval_prog(TargetAst),
   format('~n>>> Ending Demo in Prolog <<<~n')
.