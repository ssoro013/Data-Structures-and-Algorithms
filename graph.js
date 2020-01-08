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
// g.printGraph();

//DFS: Depth First Search
var dfs = function(root) {
    var visited = [];
    function recurse (node) {
        if (!node) {
            return ;
        } else {
            console.log(node);
            visited.push(node);
            for (var i = 0; i < node.adjList.length; i++) {
                if (!visited.includes(node.adjList[i])) {
                    recurse(node.adjList[i])
                }
            }
        }
    }
    recurse(root)
}

//BFS: Breadth First Seafch
var bfs = function(root) {

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

//Search a 2D Matrix (https://leetcode.com/problems/search-a-2d-matrix/)
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    var m = matrix.length - 1;
    var n = matrix[0].length - 1;
    if (target < matrix[0][0] || target > matrix[m][n]) {
        return false;
    }

    for (var i = 0; i < m + 1; i++) {
        if (target <= matrix[i][n]) {
            return matrix[i].indexOf(target) !== -1;
        }
    }
}
//Metrics: runtime of 48ms is faster than 95% and memory usage of 34mb is less than 100% of online submissions

//Search a 2D Matrix II (https://leetcode.com/problems/search-a-2d-matrix-ii/)

//Mininum Path Sum (https://leetcode.com/problems/minimum-path-sum/)
var minPathSum = function (grid) {
    var m = grid.length - 1;
    var n = grid[0].length - 1;
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i !== 0 && j !== 0) {
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
                continue ;
            }

            if (i !== 0) {
                grid[i][j] += grid[i - 1][j];
                continue ;
            }
            
            if (j !== 0) {
                grid[i][j] += grid[i][j - 1];
                continue ;
            }
        }
    }
    return grid[m][n];
}

//Metrics: runtime of 44ms is faster than 100% and memory usage of 35mb is less than 100% of online submissions

//Maximum Path Sum
var maxPathSum = function (grid) {

}