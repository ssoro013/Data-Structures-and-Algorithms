var LinkedList = function() {
  this.head = null;
};

var Node = function(value) {
  return {value: value, next: null};
};

LinkedList.prototype.insert = function(value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.getValues = function() {
  var arr = [];
  var current = this.head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
};

//Middle of Linked List (https://leetcode.com/problems/middle-of-the-linked-list/)
LinkedList.prototype.middleNode = function() {
  var arr = [];
  var length = 0;
  var current = this.head;
  while (current) {
    arr.push(current);
    current = current.next;
    length ++;
  }
  var middle = Math.ceil((length - 1) / 2);
  return arr[middle];
};

var List = new LinkedList();
List.insert(1);
List.insert(2);
List.insert(3);
List.insert(4);
List.insert(5);
console.log(List.middleNode());

LinkedList.prototype.reverse = function() {
  var current = this.head;
  var previous = null;
  while (current) {
    var next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

LinkedList.prototype.reverseBetween = function(m, n) {
  var count = 1;
  var current = this.head;
  var previous = null;
  while (current) {
    if (count < m) {
      current = current.next;
      previous = current;
      count++;
    } else if (count >= m && count <= n) {
      var next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      count++;
    } else if (count > n) {
      return;
    }
  }
  // return head;
};

LinkedList.prototype.deleteNode = function(value) {
  var current = this.head;
  while (current) {
    if (current.next.value === value) {
      current.next = current.next.next;
      return;
    } else {
      current = current.next;
    }
  }
};

LinkedList.prototype.deleteDuplicates = function() {
  var current = this.head;
  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
};

LinkedList.prototype.isPalindrome = function() {
  var current = this.head;
  var arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  if (arr.length === 0) {
    return true;
  }

  var reversed = arr.reverse();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== reversed[arr.length - 1 - i ]) {
      return false;
    }
  }
  return true;
};

LinkedList.prototype.hasCycle = function() {
  var slow = this.head;
  var fast = this.head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

//Add Two Numbers (https://leetcode.com/problems/add-two-numbers/)
var addTwoNumbers = function () {
  
}