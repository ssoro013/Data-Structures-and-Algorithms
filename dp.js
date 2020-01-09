/* eslint-disable indent */
//Dynamic Programming

//Climbing Stairs (https://leetcode.com/problems/climbing-stairs/)
var climbStairs = function(n) {
    if (n <= 2) { return n; }
    var arr = [1, 2];
    for (var i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

//Fibonacci Number (https://leetcode.com/problems/fibonacci-number/)
var fib = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

//Course Schedule (https://leetcode.com/problems/course-schedule/)
var canFinish = function(numCourses, prerequisites) {
    
}

//Champagne Tower (https://leetcode.com/problems/champagne-tower/)
var champagneTower = function(poured, query_row, query_glass) {
    var arr1 = [];
    arr1[0] = [poured];
    for (var row = 1; row <= query_row; row++) {
        var arr2 = new Array(row + 1).fill(0);
        for (var glass = 0; glass <= row; glass++) {
            if (arr1[row - 1][glass - 1] && arr1[row - 1][glass - 1] > 1) {
                arr2[glass] += (arr1[row - 1][glass - 1] - 1) / 2;
            }

            if (arr1[row - 1][glass] && arr1[row - 1][glass] > 1) {
                arr2[glass] += (arr1[row - 1][glass] - 1) / 2;
            }
        }
        arr1[row] = arr2;
    }
    return arr1[query_row][query_glass] > 1 ? 1 : arr1[query_row][query_glass];
};

//Maixum Subarray (https://leetcode.com/problems/maximum-subarray/description/)
var maxSubArray = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i - 1] + nums[i]);
    }
    
    return Math.max(...nums);
};

//Maximum Product Subarray (https://leetcode.com/problems/maximum-product-subarray/)
var maxProduct = function(nums) {

};

//LRU Cache (https://leetcode.com/problems/lru-cache/)
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.size = capacity;
}

LRUCache.prototype.get = function (key) {
    //if the cache does not have the key, return -1;
    if (!this.cache.has(key)) {
        return -1;
    }
    //store the value, remove the key, reset key with stored value and return value
    var value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
}

LRUCache.prototype.put = function(key, value) {
    //if the cache already has the value, delete
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    
    //insert value into cache
    this.cache.set(key, value);

    //if the cache capaicty is greater than allowed, remove the first element in cache
        //first element is the least recently used by definition
    if (this.cache.size > this.size){
        var keys = this.cache.keys();
        var first = keys.next().value;
        this.cache.delete(first)
    }
}

//Metrics: runtime of 184ms faster than 90% and memory usage of 58.5mb is less than 50% of online submissions;

//LFU Cache (https://leetcode.com/problems/lfu-cache/)
var LFUCache = function(capacity) {

}

LFUCache.prototype.get = function(key) {

}

LFUCache.prototype.put = function(key, value) {
    
}
//DP Patterns (https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)