package eif400.graph

open class Store(id : String, dat : String = "")
    
fun Store.inspect() : String{ return this.toString() }

class Node(id : String, dat : String) : Store(id, dat)

class Edge(id : String, left : Node, right : Node, dat: String) : Store(id, dat)

class Path{
    var visited = HashMap<String, Int>()
    var counter = 1
    var times = 0

    fun next(){times++}

    fun hasVisited(id : String) : Int{return visited[id]!!}

    fun visit(id : String){ visited[id] = counter++}
	
    fun getPath() : HashMap<String, Int> {return visited}

}

class Graph(id : String, dat : String, var edges : MutableList<Edge>, var nodes : MutableList<Node>) : Store(id, dat) {
	
    //edges = MutableList<Edge>()

	fun addNode(n : Node){ nodes.add(n) }

	fun addEdge(e : Edge){ edges.add(e) }
	
    fun successors(nodeId : String): String{ return "not implemented" }

	override fun toString() : String{ return "not implemented" }

	fun dfs() : Path{ 
		var path = Path()
		
		return path;
	}

	fun degree(nodeId : String) : Int{ return 0 }

	fun degrees() : String{ return "not implemented" }

	fun components() : Int{ // number of connected compononents 
		var path =  Path();
		
		return path.times;
	}
	
}


/*class Store { // Something that stores data and has an id and data
	constructor(id, data = ''){
		this.id = id;
        this.data = data;		
	}
	inspect(){return this.toString()} // how console.log shows this object
	toString(){
		return 'not implemented';
	}
	
}*/

/*class Node extends Store { // A Node 
	constructor(id, data){
		super(id, data); 
	}
	
	
}*/
/*class Edge extends Store { // An edge from Node left to Node right
	constructor(id, left, right, data){
		super(id, data);
		this.left = left;
		this.right = right;
		
	}
	
}*/ 
/*class Path { // A Path; used by dfs and components
	constructor(){
		this.visited = {}; // {ni:dfsi}
		this.counter = 1;  // current dfs number
		this.times   = 0;  // number of times the path has been updated
	}
	next(){
		this.times++;
	}
	hasVisited(id){
		return this.visited[id];
	}
	visit(id){
		this.visited[id] = this.counter++;
	}
	get path(){
		return this.visited;
	}
}*/
/*class Graph extends Store {
	
	constructor(id, data){ // creates a Graph with id and optionally data
		super(id, data);
		// add what you need
	}
	
	addNode(node){ // add a node to graph
		
	}
	addEdge(edge){ // add an new edge to graph
		
	}
	successors(nodeId){ // successor of a node by its id
		
		return ['not implemented'];
	}
	toString(){
		return 'not implemented';
	}
	dfs(){ // dfs enumeration by alphabetic order; returns a path
		let path = new Path();
		
		return path;
	}
	degree(nodeId){ // degree of a node given its nodeId
		return [];
	}
	degrees(){ // nodes and its degrees
		return [];
	}
	components(){ // number of connected compononents 
		let path = new Path();
		
		return path.times;
	}
	
}*/