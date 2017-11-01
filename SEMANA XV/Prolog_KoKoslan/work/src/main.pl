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
	 biOper(oper('+'),biOper(oper('*'), id(x), id(y)),id(x))
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