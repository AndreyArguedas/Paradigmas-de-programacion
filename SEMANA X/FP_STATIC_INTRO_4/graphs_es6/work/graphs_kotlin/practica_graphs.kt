package eif400.graphs

import eif400.graph.*

fun main() {
	println('\n>>> Practice 2017 Graphs starts running <<<\n');

	// Test Graph_1
	var g = Graph("graph_1");
	
	// Just show empty graph

	println("1.1) Empty Graph: ${g.toString()}")
	
	var nodes = ["a", "b", "c", "d", "e", "f", "g", "h"].map(x => new Node(x))

	var [na, nb, nc, nd, ne, nf, ng, nh] = nodes;

	var  edges = [new Edge("ab", na, nb),
				  new Edge("ba", nb, na),
				  new Edge("bd", nb, nd),
				  new Edge("bc", nb, nc),
				  new Edge("ce", nc, ne),
				  new Edge("fa", nf, na),
				  new Edge("fb", nf, nb),
				  new Edge("hg", nh, ng)
				  ]

	// Init nodes and edges in graph
	nodes.forEach{g.addNode(it)}
	edges.forEach{g.addEdge(it)}
	
	println()
	println("1.2) Built Graph: ${g.toString()}")
    println()
	
	println("2.0) Graph=${g.id} : Successors of node ${a} = ${g.successors('a')}")
	
	// Graph is iterable
	println();
	println("2.1) Graph=${g.id} : Edges in graph =")

	for (edge in g){
		println(edge.toString())
	}
	// Compute degrees
    println();
	println("2.2) Graph= ${g.id} : All nodes and degrees = ${g.degrees()}")
	
	// Build a path = {n1: dfs1, ..., nk: dfsk} where ni is a node i and dfsi its dfs-number
	// The path is alpahtecally numbered
	println();
	println("2.3) Graph= ${g.id} : An alphabetic dfs = ${g.dfs().path}")
	
	// Calculate connected components
	println();
	println("2.4) Graph= ${g.id} : Number of connected components = ${g.components()}")
	println();

}