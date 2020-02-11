//Binary Tree: a hierarchical data structure in which each node has, at most, two children. Each node has a left pointer, right pointer, and value.
            // the 'root' represents the topmost node in the tree. A leaf or external node is a node with node children

var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

//Maximum Depth of Binary Tree (https://leetcode.com/problems/maximum-depth-of-binary-tree/)
var maxDepth = function(root) {
    return !root? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
//https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/


//Minimum Depth of Binary Tree (https://leetcode.com/problems/minimum-depth-of-binary-tree/)
var minDepth = function(root) {
    if (!root) {
        return 0;
    } if (!root.left && !root.right) {
        return 1;
    } if (!root.left) {
        return minDepth(root.right) + 1;
    } if (!root.right) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/

//Leaf-Similar Trees (https://leetcode.com/problems/leaf-similar-trees/)
var leafSequence = function (root) {
    var sequence = '';
    var add = function (node) {
        if (!node) {
            return;
        } if (!node.left && !node.right) {
            sequence += node.value;
            return;
        } else {
            add(node.left);
            add(node.right);
        }
    }
    add(root);
    return sequence;
};

var leafSimilar = function(root1, root2) {
    return leafSequence(root1) === leafSequence(root2);
};
//Metrics: runtime of 56ms faster than 80% and memory usage of 34mb less than 50% of online submissions

//Binary Tree Paths (https://leetcode.com/problems/binary-tree-paths/)
var binaryTreePaths = function(root) {
    var paths = [];
    function findPaths(node, sequence = "") {
        if(!node) {
            return ;
        } else if (node.left || node.right) {
            sequence += `${node.val}->`;
        } else {
            sequence += `${node.val}`;
            paths.push(sequence);
            return ;
        }
        findPaths(node.left, sequence);
        findPaths(node.right, sequence);
    }
    findPaths(root, sequence = "");
    return paths;
};
//Metrics: runtime of 48ms faster than 80% and memory usage of 34.4mb is less than 100% of online submissions

//Path Sum (https://leetcode.com/problems/path-sum/)
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    } else if (!root.left && !root.right) {
        return root.val === sum
    } else {
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
    }
}

//Path Sum II (https://leetcode.com/problems/path-sum-ii/)
//Solution 1
var pathSum1 = function(root, sum) {
    var paths = [];
    function findPathSum(node, currentSum = 0, nums = []) {
        if (!node) {
            return ;
        } else if (node.left || node.right) {
            currentSum += node.val;
            nums.push(node.val);
        } else {
            if (node.val === sum - currentSum) {
                nums.push(node.val);
                paths.push(nums);
            }
            return ;
        }
        findPathSum(node.left, currentSum, nums.slice());
        findPathSum(node.right, currentSum, nums.slice());
    }
    findPathSum(root, currentSum = 0, nums = []);
    return paths;
}

//Solution 2
var pathSum2 = function(root, sum) {
    var paths = [];
    function findPathSum(node, nums = []) {
        if (!node) {
            return ;
        } else if (node.left || node.right) {
            nums.push(node.val)
        } else {
            nums.push(node.val);
            paths.push(nums);
            return;
        }
        findPathSum(node.left, nums.slice());
        findPathSum(node.right, nums.slice());
    }

    findPathSum(root, nums = []);
    return paths.filter(path => path.reduce((a,b) => a + b) === sum );
}

//Path Sum III (https://leetcode.com/problems/path-sum-iii/)

// Add One Row to Tree: (https://leetcode.com/problems/add-one-row-to-tree/)
BinaryTree.prototype.addOneRow = function(root, v, d) {

}

// Binary Tree Tilt: https://leetcode.com/problems/binary-tree-tilt/
BinaryTree.prototype.findTilt = function(root) {

}

//Univalued Binary Tree (https://leetcode.com/problems/univalued-binary-tree/)
var isUnivalTree = function(root) {
    var value = root.val;
    function check(node) {
        if (!node) {
            return true;
        } else if (node.val !== value) {
            return false;
        } else {
            return check(node.left) && check(node.right);
        }
    }
    return check(root);
}

//metrics: runtime of 52ms is faster than 85%

//Sum Root to Leaf Numbers (https://leetcode.com/problems/sum-root-to-leaf-numbers/)
var sumNumbers = function(root) {
    var output = 0;
    function recurse(node, sum = '') {
        if(!node) {
            return ;
        } else if(!node.left && !node.right) {
            sum += node.val;
            output += Number(sum);
            return ;
        } else {
            sum += node.val;
            recurse(node.left, sum);
            recurse(node.right, sum);
        }
    }
    recurse(root, sum = '');
    return output;
}

//Binary Tree Level Order Traversal(https://leetcode.com/problems/binary-tree-level-order-traversal/)
var levelOrder = function(root) {
    var arr = [];

    function traverse(node, level) {
        if(!node) {
            return ;
        } else {
            if(level > arr.length) {
                arr.push([]);
            }
            arr[level - 1].push(node.val);
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    }

    traverse(root, 1);

    return arr;
}

//Maximum Level Sum of a Binary Tree (https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
var maxLevelSum = function(root) {
    var arr = [];

    function traverse(node, level) {
        if(!node) {
            return ;
        } else {
            if(level > arr.length) {
                arr.push(0);
            }
            arr[level - 1] += node.val;
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    }

    traverse(root, 1)
    return arr.indexOf(Math.max(...arr)) + 1;
}
