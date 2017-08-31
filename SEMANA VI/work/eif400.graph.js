/**
  Practice Graphs ES6
  Graph classes
  @author loriacarlos@gmail.com
  @since 2017
*/

class Store { // Something that stores data and has an id and data
	constructor(id, data = ''){
		this.id = id;
        this.data = data;		
	}
	inspect(){return this.toString()} // how console.log shows this object
	toString(){
		return 'not implemented';
	}
	
}
class Node extends Store { // A Node 
	constructor(id, data){
		super(id, data); 
	}
	
	toString(){
		return "node: " + this.id + " ";
	}
	
}
class Edge extends Store { // An edge from Node left to Node right
	constructor(id, left, right, data){
		super(id, data);
		this.left = left;
		this.right = right;	
	}

	toString(){
		return ""+ this.left.id + "--[" + this.id + "]--> " + this.right.id +"";
	}
	
} 
class Path { // A Path; used by dfs and components
	constructor(){
		this.visited = {}; // {ni:dfsi}
		this.counter = 1;  // current dfs number
		this.times   = 0;  // number of times the path has been updated
		this.stack = [];
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
}

function* iterator(edges){ //This generator is for converting graph iterable
	for(let edge of edges) //Unfortunetly we can not use yield inside a foreach
		yield edge;
	return {done : true}
}

class Graph extends Store {
	
	constructor(id, data){ // creates a Graph with id and optionally data
		super(id, data);
		// add what you need
		this.nodes = [];
		this.edges = [];
	}

	[Symbol.iterator](){ //Making graph iterable
	  this.iter = iterator(this.edges);
      return this;
	}

	next(){ //Next of the iterator
		return this.iter.next();
	}
	
	addNode(node){ // add a node to graph
		this.nodes.push(node);
	}
	addEdge(edge){ // add an new edge to graph
		this.edges.push(edge);
	}
	successors(nodeId){ // successor of a node by its id
		let aux = [];
		let successors = [];
		aux = this.edges.filter( (x) => x.right.id === nodeId);
		aux.forEach( (x) => successors.push(x.left.id)); //No me gusta, pero no encontre otra forma
		return [successors.toString()];
	}
	toString(){
		let edgesToString = "";
		this.edges.forEach( (x) => edgesToString += x.toString());
		return '[ {id: ' + this.id + '}' + edgesToString + ' ]';
	}
	dfs(){ // dfs enumeration by alphabetic order; returns a path
		let path = new Path();
		if(this.nodes.length)
			path.stack.push(this.nodes.shift()); //Getting the first

		while(path.stack.length){
			let current = path.stack.pop();
			if(!path.hasVisited(current.id)){ //Si current no ha sido visitado
				path.visit(current.id);
				for(let n of this.neighbors(current)){
					console.log(current.id + " " + n);
					path.stack.push(n);
				}
			}
		}
		return path;
	}
	degree(nodeId){ // degree of a node given its nodeId
		let neighbors = new Set(); //Using a set because only allows unique values
		this.edges.forEach( x => {if(x.right.id === nodeId || x.left.id === nodeId){
			neighbors.add(x.right.id);neighbors.add(x.left.id);}});
		neighbors.delete(nodeId);
		return neighbors.size;
		//return []; No le veo logica
	}
	degrees(){ // nodes and its degrees
		let degrees = [];
		this.nodes.forEach( (x) => degrees.push({ node: x.id, degree: this.degree(x.id) }));
		return degrees;
	}
	components(){ // number of connected compononents 
		let path = new Path();
		
		return path.times;
	}

	neighbors(node){
		let neighbors = new Set(); //Using a set because only allows unique values
		this.edges.forEach( x => {if(x.right === node || x.left === node){
			neighbors.add(x.right);neighbors.add(x.left);}});
		neighbors.delete(node);
		return Array.from(neighbors).sort().reverse(); //Sort by alphabetics
	}
	
}



module.exports = {
	Node : Node,
	Edge : Edge,
	Graph : Graph
}