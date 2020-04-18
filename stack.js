class Stack {
    constructor() {
        this.storage = {};
        this.lastIndex = 0;
    }

    push(value) {
        this.storage[this.lastIndex + 1] = value;
        this.lastIndex ++;
    }

    pop() {
        var lastElement = this.storage[this.lastIndex];
        delete this.storage[this.lastIndex];
        this.lastIndex --;
        return lastElement;
    }

    size() {
        var keys = Object.keys(this.storage);
        return keys.length;
    }
}

//Min Stack (https://leetcode.com/problems/min-stack/)
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
}

MinStack.prototype.push = function(x) {
    this.min = Math.min(this.min, x);
    this.stack.push({
        val: x,
        min: this.min
    })
}

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min = this.stack.length > 0 ? this.stack[this.stack.length - 1].min : Infinity;
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.lenth - 1];
}

MinStack.prototype.getMin = function() {
    return this.min;
}