//Binary Tree: an ordered binary tree where for each node, the elements in the left subtree must be less than or equal to the key in its parent node (L<P)
              //the elements in the right subtree must be greater than or equal to the key in its parent node (R>P)
              //there should be no duplicate keys

var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {

}

BinarySearchTree.prototype.contains = function(target) {

}

BinarySearchTree.prototype.dfs = function() {
    
}

BinarySearchTree.prototype.bfs = function() {

}

var Node = function(value) {
    return {
        value: value,
        left: null,
        right: null
    }
    
}

const node = Node(3)
console.log(node)