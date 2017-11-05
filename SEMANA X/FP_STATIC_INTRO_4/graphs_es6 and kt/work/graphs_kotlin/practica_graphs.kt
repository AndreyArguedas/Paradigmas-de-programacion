package eif400.test

import eif400.graph.*

fun main(args : Array<String>) {
	println("\n>>> Practice 2017 Graphs starts running <<<\n");

	// Test Graph_1
	var g = Graph("graph_1")
	
	// Just show empty graph

	println("1.1) Empty Graph: ${g.toString()}")
	
	var nodes = mutableListOf("a", "b", "c", "d", "e", "f", "g", "h").map{Node(it)}

	//var (na, nb, nc, nd, ne, nf, ng, nh) = nodes; NO ME SIRVIO DESTRUCUTRACION

	var na = nodes.get(0)
	var nb = nodes.get(1)
	var nc = nodes.get(2)
	var nd = nodes.get(3)
	var ne = nodes.get(4)
	var nf = nodes.get(5)
	var ng = nodes.get(6)
	var nh = nodes.get(7)

	var  edges = listOf(Edge("ab", na, nb),
				   Edge("ba", nb, na),
				   Edge("bd", nb, nd),
				   Edge("bc", nb, nc),
				   Edge("ce", nc, ne),
				   Edge("fa", nf, na),
				   Edge("fb", nf, nb),
				   Edge("hg", nh, ng)
                )

	// Init nodes and edges in graph
	nodes.forEach{g.addNode(it)}
	edges.forEach{g.addEdge(it)}
	
	println()
	println("1.2) Built Graph: ${g.toString()}")
    println()
	
	println("2.0) Graph=${g.id} : Successors of node a = ${g.successors("a")}")
	
	// Graph is iterable
	println();
	println("2.1) Graph=${g.id} : Edges in graph =")

	for (edge in g.edges){
		println(edge.toString())
	}
	// Compute degrees
    println();
	println("2.2) Graph= ${g.id} : All nodes and degrees = ${g.degrees()}")
	
	// Build a path = {n1: dfs1, ..., nk: dfsk} where ni is a node i and dfsi its dfs-number
	// The path is alpahtecally numbered
	println();
	println("2.3) Graph= ${g.id} : An alphabetic dfs = ${g.dfs()}")
	
	// Calculate connected components
	println();
	println("2.4) Graph= ${g.id} : Number of connected components = ${g.components()}")
	println();

}