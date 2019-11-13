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