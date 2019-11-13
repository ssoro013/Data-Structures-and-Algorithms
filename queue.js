class Queue {
    constructor() {
        this.storage = {};
        this.firstIndex = 0;
        this.lastIndex = 0;
    }

    enqueue(value) {
        this.storage[lastIndex] = value;
        this.lastIndex ++
    }

    dequeue() {
        var removed = this.storage[this.firstIndex];
        delete this.storage[this.firstIndex];
        this.firstIndex ++;
        return removed;
    }

    size() {
        var keys = Object.keys(this.storage);
        return keys.length;
    }
}

var q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue();
console.log(q);