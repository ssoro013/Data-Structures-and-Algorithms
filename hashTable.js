var hashFunction = function(key, size) {
    var hashedKey = 0;
    for (var i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }
    return hashedKey % size;
};
//note: charCodeAt is a String method that returns an integer in range [0-65535] representing UTF-16 code unit at given index

//implementation of Java's hashCode method as a function
var hashCode = function(key) {
    var hash = 0;
    if (key.length === 0) {
        return hash;
    }
    for (var i = 0; i < key.length; i++) {
        var char = key.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
};

//Basic hashTable class with insert, remove and search methods using Map
class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = Array(this.size);
        for (var i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        var index = hashFunction(key, this.size);
        this.buckets[index].set(key, value);
    }

    remove(key) {
        var index = hashFunction(key, this.size);
        var removed = this.buckets[index].get(key);
        this.buckets[index].delete(key);
        return removed;
    }

    search(key) {
        var index = hashFunction(key, this.size);
        return this.buckets[index].get(key);
    }
}

var hash = new HashTable(4);
hash.insert('last', 'Soro');
hash.insert('first', 'Soukpafolo');
hash.insert('middle', 'Siriki');
console.log(hash.remove('last'));



//Contains Duplicate I (https://leetcode.com/problems/contains-duplicate/)
var containsDuplicateI = function(nums) {
    return new Set(nums).size !== nums.length;
};
//metrics: runtime faster than 85% and memory usage less than 75% of online submissions

//Contains Duplicate II (https://leetcode.com/problems/contains-duplicate-ii/)
var containsNearbyDuplicate = function(nums, k) {

}

//Contains Duplicate III (https://leetcode.com/problems/contains-duplicate-iii/)
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
};