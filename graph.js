class Graph {
    constructor(vertices) {
        this.vertices = vertices;//stores number of vertices in the graph
        this.adjList = new Map();//stores the adjancy list of a particular vertex
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    printGraph() {
        var keys = this.adjList.keys();
        for (var key of keys) {
            var values = this.adjList.get(key);
            var output = '';
            for (var j = 0; j < values.length; j++) {
                output += values[j] + ' ';
            }
            console.log(key + '->' + output);
        }
    }
}
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
console.log(g);
g.printGraph();

//DFS: Depth First Search
var dfs = function(root) {
}

var search = function(node, visited) {
    visited[node] = true;
    console.log(node);
    var neighbours = this.adjList.get(node);
}

//Number of Islands
var numIslands = function(grid) {

};

//Cut Off Trees for Golf Event
var cutOffTree = function(forest) {
    
};