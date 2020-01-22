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

var tree = new BinarySearchTree(5);
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.insert(9)
tree.insert(10)

var dfs = function (root) {
  if (!root) {
    return ;
  } else {
    console.log(root.value);
    dfs(root.left);
    dfs(root.right);
  }
};

// dfs(tree);

var bfs = function (root) {

}

BinarySearchTree.prototype.bfs = function() {

};

//Validate Binary Search Tree (https://leetcode.com/problems/validate-binary-search-tree/)
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

//Minimum Value of BST
var findMinimum = function (root) {
  if (!root.left) {
    return root.value
  } else {
    return findMinimum(root.left)
  }
}

//Maximum Value of BST
var findMaximum = function (root) {
  if (!root.right) {
    return root.value
  } else {
    return findMaximum(root.right);
  }
}
console.log(findMinimum(tree))
console.log(findMaximum(tree))


//Kth Smallest Element in BST (https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
var kthSmallest = function(root, k) {
  var arr = [];
  var add = function (node) {
    if (!node) {
      return;
    } else {
      arr.push(node.value);
      add(node.left);
      add(node.right);
    }
  };
  add(root);
  return arr.sort((a, b) => a - b)[k - 1];
};

//Unique Binary Search Trees (https://leetcode.com/problems/unique-binary-search-trees/)
