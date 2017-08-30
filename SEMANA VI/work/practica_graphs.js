/**
  Practice Graphs ES6
  Testing module (@see practica_graphs.pdf)
  @author loriacarlos@gmail.com
  @since 2017
*/
const {
	 Graph,
	 Node,
	 Edge
	 } = require('./eif400.graph.js')
;
function main() {
	console.log('\n>>> Practice 2017 Graphs starts running <<<\n');

	// Test Graph_1
	let g = new Graph("graph_1");
	
	// Just show empty graph
	console.log()
	console.log('1.1) Empty Graph: ', g.toString());
	
	let nodes = ["a", "b", "c", "d", "e", "f", "g", "h"].map(x => new Node(x))
	;
	let [na, nb, nc, nd, ne, nf, ng, nh] = nodes;

	let  edges = [new Edge("ab", na, nb),
				  new Edge("ba", nb, na),
				  new Edge("bd", nb, nd),
				  new Edge("bc", nb, nc),
				  new Edge("ce", nc, ne),
				  new Edge("fa", nf, na),
				  new Edge("fb", nf, nb),
				  new Edge("hg", nh, ng)
				  ]
	;
	// Init nodes and edges in graph
	nodes.forEach(n => g.addNode(n));
	edges.forEach(e => g.addEdge(e));
	
	console.log();
	console.log('1.2) Built Graph: ', g.toString());
    console.log();
	
	console.log('2.0)', 'Graph= ', g.id, ':', 'Successors of node "a" = ', g.successors('a'))
	
	// Graph is iterable
	console.log();
	console.log('2.1)', 'Graph= ', g.id, ': Edges in graph =')
	for (let edge of g){
		console.log(edge.toString())
	}
	// Compute degrees
    console.log();
	console.log('2.2)', 'Graph= ', g.id, ':', 'All nodes and degrees   = \n', g.degrees())
	
	// Build a path = {n1: dfs1, ..., nk: dfsk} where ni is a node i and dfsi its dfs-number
	// The path is alpahtecally numbered
	console.log();
	console.log('2.3)', 'Graph= ', g.id, ':', 'An alphabetic dfs       = ', g.dfs().path)
	
	// Calculate connected components
	console.log();
	console.log('2.4)', 'Graph= ', g.id, ':', 'Number of connected components = ', g.components())
	console.log();

}

main();