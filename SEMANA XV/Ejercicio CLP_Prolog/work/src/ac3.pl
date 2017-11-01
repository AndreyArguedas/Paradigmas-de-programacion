/*
  @author loriacarlos@gmail.com
  @since 2017
  @see https://en.wikipedia.org/wiki/AC-3_algorithm
*/

% csp(+Doms, +R1, +R2, -RDoms)

csp(Doms, R1, R2, RDoms) :-
    reduce_doms_using_unary_relations(Doms, R1, R1Doms),
	build_arcs_from_binary_relations(R2, Arcs),
	do_arc_consistency(R1Doms, Arcs, RDoms)
.

build_arcs_from_binary_relations([], []).
build_arcs_from_binary_relations([rel([X, Y], RXY) | R], [arc(X, Y, RXY), arc(Y, X, RXY) | A]) :-
   build_arcs_from_binary_relations(R, A)
.

%
reduce_doms_using_unary_relations([], _, []).
reduce_doms_using_unary_relations([dom(X, DX) | R1Doms], R1, [dom(X, NDX) | R1Doms]) :-
   member(rel(X, RX), R1),!,
   findall(V, (member(V, DX), X=V, call(RX)), NDX)
.

%
do_arc_consistency(Doms, Arcs, RDoms) :-
    do_arc_consistency(Doms, [], Arcs, RDoms)
.

do_arc_consistency(Doms, ConsistentArcs, WorkList, RDoms) :-
    reduce_domains(Doms, RDoms, ConsistentArcs, WorkList)
.

%reduce_domains(+Doms, -RDoms, ConsistentArcs, +WorkList)
reduce_domains(Doms, Doms, _, []) :-  !.

reduce_domains(Doms, RDoms, ConsistentArcs, WorkList) :-
   choose_arc_fromWorkList(WorkList, ArcXY, WorkListWithoutXY),
   ArcXY = arc(X, Y, R),
   get_dom_of(Doms, X, DX),
   get_dom_of(Doms, Y, DY),
   reduce_domX_of_arc(X, DX, R, Y, DY, NDX, _),
   (DX=NDX -> 
               ( 
				  reduce_domains( Doms, RDoms,  [ArcXY | ConsistentArcs], WorkListWithoutXY )	
				)
			   ;
			   (  
				  updateWorkList(X, Y, ConsistentArcs, NewConsistentArcs, WorkListWithoutXY, NewWorkList),
				  updateDoms(Doms, X, NDX, NewDoms),
				  reduce_domains( NewDoms, RDoms, [ArcXY | NewConsistentArcs], NewWorkList )
				)
				
    )			
.
%
choose_arc_fromWorkList([ArcXY | WorkList], ArcXY, WorkList)
.
%
get_dom_of(Doms, X, DX) :- (member(dom(V, DX), Doms), V == X)
.
%
reduce_domX_of_arc(_, [], _, _, _, [], _).
reduce_domX_of_arc(X, [V | DX], R2, Y, DY, NDX, _) :-
   \+((X = V, member(Y, DY), call(R2) )), !,
   reduce_domX_of_arc(X, DX, R2, Y, DY, NDX, true)
.
reduce_domX_of_arc(X, [V | DX], R2, Y, DY, [V |NDX], Change) :-
   reduce_domX_of_arc(X, DX, R2, Y, DY, NDX, Change)
.

%
updateWorkList(_, _, [], [], WorkList, WorkList)
.
updateWorkList( X, Y, [ArcUV | ConsistentArcs], 
                      [ArcUV | NewConsistentArcs], 
					  WorkList, 
					  NewWorkList ) :-
			ArcUV = arcv(U, V, _),
			( X \== V ; X == V, Y == U ),!, 
			updateWorkList(X, Y, ConsistentArcs, NewConsistentArcs, WorkList, NewWorkList)
.
updateWorkList( X, Y, [ArcUV | ConsistentArcs], 
                      NewConsistentArcs, 
					  WorkList, 
					  [ArcUV | NewWorkList] ) :-
			updateWorkList( X, Y, ConsistentArcs, NewConsistentArcs, WorkList, NewWorkList )
.
%
updateDoms([], _, _, [] ).
updateDoms([dom(V, _) | Doms], X, NDX, [dom(X, NDX) | Doms]) :-  X == V, !
.
updateDoms([D | Doms], X, NDX, [ D | NewDoms] ) :- updateDoms( Doms, X, NDX, NewDoms )
.

