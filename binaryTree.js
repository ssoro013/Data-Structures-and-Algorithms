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

//Path Sum (https://leetcode.com/problems/path-sum/)
var hasPathSum = function (root, sum) {

}


// Add One Row to Tree: (https://leetcode.com/problems/add-one-row-to-tree/)
BinaryTree.prototype.addOneRow = function(root, v, d) {

}

// Binary Tree Tilt: https://leetcode.com/problems/binary-tree-tilt/
BinaryTree.prototype.findTilt = function(root) {

}