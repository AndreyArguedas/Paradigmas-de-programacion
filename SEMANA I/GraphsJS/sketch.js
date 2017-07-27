var data;
var graph;
function preload(){
  data = loadJSON('data.json');
  graph = new Graph();
}

function setup(){
  noCanvas();
  //console.log(data);

  var movies = data.movies;
  for(var i = 0; i < movies.length; i++){
    var movie = movies[i].title;
    var others = movies[i].others; //Vecinos
    var movieNode = graph.getNode(movie);
    if(movieNode === undefined){ //Si el nodo no esta en el grafp
      movieNode = new Node(movie);
      graph.addNode(movieNode);
    }

    for(var j = 0; j < others.length; j++){
      var other = others[j];
      var otherNode = graph.getNode(other);
      if(otherNode === undefined){
        otherNode = new Node(other); //Se crea un nuevo nodo para ese actor
        graph.addNode(otherNode);
      } //Si el actor no se ha metido en el grafo

      movieNode.edges.push(otherNode); //Cada letra tiene un arco a cada letra vecina
      //otherNode.edges.push(movieNode); //Es un doblemente dirigido, no recuerdo si asi era el nombre jajajaj
    }
  }

  bfs("A","H");
  for(var i = 0; i < graph.nodes.length; i++)
      graph.nodes[i].searched = false;

  dfs("A","H");

}

function bfs(s,e){
  graph.start = s;
  graph.end = e;
  var queue = [];
  var path = []; //El camino final
  var current = graph.start;
  current = graph.getNode(current);
  current.searched = true; //Marcar como visitado
  queue.push(current);
  path.push(current);
  while(queue.length > 0){
      current = queue.shift();
      if(current.value === graph.end){ //Si ya llego al destino
        path.push(current);
        var next = current.parent;
        while(next){
          path.push(next);
          next = next.parent;
        }
        break;
      }
      else{
        var nextSteps = current.edges;
        for(var i = 0; i < nextSteps.length; i++){
          if(nextSteps[i].searched === false){
            nextSteps[i].parent = current;
            queue.push(nextSteps[i]);
          }
        }
        current.searched = true;
      }
  }

  /*for(var p = path.length - 1; p >= 0; p--)
    console.log(path[p].value);*/
}

function dfs(s,e){
  graph.start = s;
  graph.end = e;
  var path = []; //El camino final
  var current;
  current = graph.getNode(graph.start);
  current.searched = true; //Marcar como visitado
  if(current.value === graph.end){ //Si ya llego al destino
    path.push(current);
    var next = current.parent;
    while(next){
      path.push(next);
      next = next.parent;
    }
  }
  else{
    for(var i = 0; i < current.edges.length; i++){
      if(!current.edges[i].searched){
        dfs(current.edges[i].value,e);
      }
    }
  }

  for(var p = path.length - 1; p >= 0; p--)
    console.log(path[p].value);

}
