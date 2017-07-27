function Node(val){
  this.value = val;
  this.edges = [];
  this.start = null; //Donde empieza la busqueda
  this.end = null; //Donde termina la busqueda
  this.searched = false; //Es como un visitados
  this.parent = null; //Esto es para luego mostrar la ruta de como llego a x nodo, se puede hacr de otras formas
}

function Graph(){
  this.nodes = [];
  this.graph = {}; //Una especie de hash
}

Graph.prototype.addNode = function (n) {
  this.nodes.push(n); //Meto la letra como un nodo
  var title = n.value;
  this.graph[title] = n; //El nodo sera accedido por el titulo (la llave del hash)
};

Graph.prototype.getNode = function (n) {
  return this.graph[n]; //El nodo sera accedido por el titulo (la llave del hash)
};
