//Binary Tree: a hierarchical data structure in which each node has, at most, two children. Each node has a left pointer, right pointer, and value.
            // the 'root' represents the topmost node in the tree. A leaf or external node is a node with node children

var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

//Maximum Depth of Binary Tree (https://leetcode.com/problems/maximum-depth-of-binary-tree/)
var maxDepth = function(root) {
    var max = 0;

}


//Minimum Depth of Binary Tree (https://leetcode.com/problems/minimum-depth-of-binary-tree/)
var minDepth = function(root) {
};

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


// Add One Row to Tree: (https://leetcode.com/problems/add-one-row-to-tree/)
BinaryTree.prototype.addOneRow = function(root, v, d) {

}

// Binary Tree Tilt: https://leetcode.com/problems/binary-tree-tilt/
BinaryTree.prototype.findTilt = function(root) {

}