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

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
}

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
var addTwoNumbers = function (l1, l2) {
    var head = new ListNode(0);
    var current = head;
    var carry = 0;
    while (l1 || l2) {
        l1 = l1 || new ListNode(0);
        l2 = l2 || new ListNode(0);

        var sum = l1.val + l2.val + carry;
        if (sum <= 9) {
            carry = 0;
        } else {
            carry = 1;
            sum = sum - 10;
        }

        var node = new ListNode(sum);
        current.next = node;
        current = node;

        l1 = l1.next;
        l2 = l2.next
    }

    if (carry !== 0) {
        current.next = new ListNode(carry);
    }
    return head.next;
}

//Metrics: runtime of 104ms is faster than 95% and memory usage of 38.3 is less than 70% of online submissions

//Rotate List (https://leetcode.com/problems/rotate-list/)

//Remove Linked List Elements (https://leetcode.com/problems/remove-linked-list-elements/)
var removeElements = function (head, val) {
    var head = head;
    while (head && head.val === val) {
        head = head.next;
    }

    if (!head) {
        return null;
    }

    var current = head;
    var previous = head;
    while (current) {
        if (current.val !== val) {
            previous = current;
            current = current.next
        } else {
            previous.next = current.next;
            current = current.next;
        }
    }
    return head
}
//Metrics: runtime of 68ms faster than 90% and memory usage of 37mb less than 50% of online submissions


// Remove Nth Node From End of List (https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let current = head;
    while(current) {
        length ++;
        current = current.next;
    }

    length -= n;
    current = dummy;
    while(length > 0) {
        length --;
        current = current.next;
    }
    current.next = current.next.next;
    return dummy.next;
}