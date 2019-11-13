class Queue {
    constructor() {
        this.storage = {};
        this.firstIndex = 0;
        this.lastIndex = 0;
    }

    enqueue(value) {
        this.storage[this.lastIndex] = value;
        this.lastIndex ++;
    }

    dequeue() {
        var firstElement = this.storage[this.firstIndex];
        delete this.storage[this.firstIndex];
        this.firstIndex ++;
        return firstElement;
    }

    size() {
        var keys = Object.keys(this.storage);
        return keys.length;
    }
}