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

//Number of Islands (https://leetcode.com/problems/number-of-islands/)
var numIslands = function(grid) {
    var count = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count += markIsland(i, j)
            }
        }
    }
    function markIsland(x, y) {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === '0') {
            return 0;
        }
        grid[x][y] = '0';
        markIsland(x - 1, y);
        markIsland(x + 1, y);
        markIsland(x, y - 1);
        markIsland(x, y + 1);
        return 1;
    }

    return count;
};
//Metrics: runtime of 60ms is faster than 90% and memory usage of 37.4 is less than 80% of online submissions

//Max Area of Island (https://leetcode.com/problems/max-area-of-island/)
var maxAreaOfIsland = function(grid) {
    var max = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                var area = islandArea(i, j);
                max = area > max ? area : max;
            }
        }
    }

    function islandArea(x, y) {
        var area = 0;
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;
        area = 1 + islandArea(x - 1, y) + islandArea(x + 1, y) + islandArea(x, y - 1) + islandArea(x, y + 1);
        return area;
    }
    return max;
}
//Metrics: runtime of 68ms is faster than 95% and memory usage of 36mb is less than 90% of online submissions;

//Surrounded Regions (https://leetcode.com/problems/surrounded-regions/)

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

//Unique Paths (https://leetcode.com/problems/unique-paths/)
var uniquePaths = function (m, n) {
    var grid = new Array(m).fill(new Array(n));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i !== 0 && j !== 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
                continue ;
            }
            if (i === 0 || j === 0) {
                grid[i][j] = 1;
                continue ;
            }
        }
    }
    return grid[m - 1][n - 1];
}
//Metrics: runtime of 52ms is faster than 85% and memory usage of 34mb less than 60% of online submissions

//Unique Paths II (https://leetcode.com/problems/unique-paths-ii/)

//Shortest Path in Binary Matrix (https://leetcode.com/problems/shortest-path-in-binary-matrix/)
var shortestPathBinaryMatrix = function(grid) {
    let row = grid.length - 1;
    let col = grid[0].length - 1;

    let queue = [[0,0]]
    let path = 1;
    while(queue.length !== 0) {
        let copy = queue;
        queue = [];

        for(let i = 0; i < copy.length; i++) {
            let r = copy[i][0];
            let c = copy[i][1];
            if(r < 0 || r > row || c < 0 || c > col || grid[r][c] === 1) {
                continue;
            }
            grid[r][c] = 1;
            if(r === row && c === col) {
                return path;
            }
            queue.push([r - 1, c])
            queue.push([r + 1, c])
            queue.push([r, c - 1])
            queue.push([r, c + 1])
            queue.push([r - 1, c - 1])
            queue.push([r - 1, c + 1])
            queue.push([r + 1, c - 1])
            queue.push([r + 1, c + 1])
        }
        path ++;
    }

    return -1;
}

//Shortest Cell Path(https://www.pramp.com/challenge/Y56aZmaj9Ptmd9wV9xvL)
function shortestCellPath(grid, sr, sc, tr, tc) {
    let row = grid.length - 1;
    let col = grid[0].length - 1;
    let queue = [[sr, sc]];
    let path = 0;
    while(queue.length !== 0) {
        let copy = queue;
        queue = [];
        for(let [r, c] of copy) {
            if(r < 0 || r > row || c < 0 || c > col || grid[r][c] === 0) {
                continue ;
            }
            grid[r][c] = 0;
            if(r === tr && c === tc) {
                return path;
            }
            queue.push([r - 1, c]);
            queue.push([r + 1, c]);
            queue.push([r, c - 1]);
            queue.push([r, c + 1]);
        }
        path ++;
    }
    return -1;
}

//Roate Image(https://leetcode.com/problems/rotate-image/)

//Word Search (https://leetcode.com/problems/word-search/)