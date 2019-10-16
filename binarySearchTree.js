//Binary Search Tree: an ordered binary tree where for each node, the elements in the left subtree must be less than or equal to the key in its parent node (L<P)
//the elements in the right subtree must be greater than or equal to the key in its parent node (R>P)
//there should be no duplicate keys

var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var Node = function(value) {
  return {
    value: value,
    left: null,
    right: null
  };
    
};

BinarySearchTree.prototype.insert = function(value) {
  var node = new Node(value);
  const recurse = function(tree) {
    if (tree.value > value) {
      if (tree.left === null) {
        tree.left = node;
      } else {
        recurse(tree.left);
      }
    } else if (tree.value < value) {
      if (tree.right === null) {
        tree.right = node;
      } else {
        recurse(tree.right);
      }
    }
  };
  recurse(this);
};

BinarySearchTree.prototype.contains = function(target) {

  const recurse = function(tree) {
    if (tree.value > target) {
      if (tree.left.value === target) {
        return true;
      } else {
        recurse(tree.left);
      }
    } else if (tree.value < target) {
      if (tree.right.value === target) {
        return true;
      } else {
        recurse(tree.right);
      }
    }
  };
  recurse(this);
};

BinarySearchTree.prototype.dfs = function() {
    
};

BinarySearchTree.prototype.bfs = function() {

};

BinarySearchTree.prototype.isValidBST = function() {

};

//iterative method
BinarySearchTree.prototype.search = function(target) {
  var current = this;
  while (current) {
    if (current.value === target) {
      return current;
    } else if (current.val > target) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
};

BinarySearchTree.prototype.getMinimumDifference = function() {
    
};


const node = new Node(3);
console.log(node);