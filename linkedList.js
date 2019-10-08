var LinkedList = function() {
    this.head = null;
}

LinkedList.prototype.insert = function(value) {
    const node = new Node(value)
    if(!this.head) {
        this.head = node
    } else {
        var current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = node
    }
}

LinkedList.prototype.getValues = function() {
    var arr = []
    function traverse(node) {
        if(node.value) {
            arr.push(node.value)
            if(node.next) {
                traverse(node.next)
            }
        }
    }
    traverse(this.head)
    return arr;
}

LinkedList.prototype.reverse = function() {
    var current = this.head;
    var previous = null;
    while(current) {
        var next = current.next
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous

//     return node;
//     var curr = this.head;
//     var next = null;
//     var prev = null;

//     while(curr) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//   }
//   this.head = prev;
}

LinkedList.prototype.reverseBetween = function(m,n) {
    var count = 1;
    var current = this.head;
    var previous = null;
    while(current) {
        if(count<m) {
            current = current.next;
            previous = current;
            count++
        } else if(count >= m && count<=n) {
            var next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            count++;
        } else if(count > n) {
            return ;
        }
    }
    // return head;
}

LinkedList.prototype.deleteNode = function(value) {
    var current = this.head
    while(current) {
        if(current.next.value === value) {
            current.next = current.next.next
            return ;
        } else {
            current = current.next;
        }
    }
}

LinkedList.prototype.deleteDuplicates = function() {
    var current = this.head;
    while(current && current.next) {
        if(current.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
}

LinkedList.prototype.isPalindrome = function() {
    var current = this.head;
    var arr = [];
    while(current) {
        arr.push(current.value);
        current = current.next;
    }
    return JSON.stringify(arr) === JSON.stringify(arr.reverse())
}

var Node = function(value) {
    return {value: value, next:null}
}


const list = new LinkedList()
list.insert(1)
list.insert(1)
list.insert(2)
list.insert(2)
console.log(list.getValues())
list.deleteDuplicates()
console.log(list.getValues())
// list.insert(3)
// list.insert(3)
// list.insert(3)
// list.insert(3)
console.log(list.getValues())
list.deleteDuplicates()
console.log(list.getValues())
// list.insert(4)
// list.insert(5)
// list.deleteNode(2)
// list.deleteNode(4)
// list.reverseBetween(1,2)


