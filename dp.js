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

//Three Sum (https://leetcode.com/problems/3sum/)
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    var output = [];
    if (nums.length < 3 || nums[0] > 0) {
        return output;
    }

    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return output;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left ++;
                }

                while (nums[right] === nums[right - 1]) {
                    right --;
                }

                left ++;
                right --;
            } else if (sum < 0) {
                left ++;
            } else {
                right --;
            }
        }
    }
    return output;
}
//Metrics: runtime of 152ms is faster than 90% and memory usage of 46.7mb is less than 80% of online submissions

//Combination Sum (https://leetcode.com/problems/combination-sum/)
var combinationSumI = function(candidates, target) {
    var output = [];
    function recurse(start, arr, rem) {
        if(rem < 0) {
            return ;
        }
        if(rem === 0) {
            output.push(arr.slice());
            return ;
        }
        for(var i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            recurse(start, arr, rem - candidates[i]);
            arr.pop();
        }
    }
    recurse(0, [], target);
    return output;
}

//Combination Sum II (https://leetcode.com/problems/combination-sum-ii/)

//Combination Sum III ()

//Word Ladder (https://leetcode.com/problems/word-ladder/)

//Ugly Number (https://leetcode.com/problems/ugly-number/)
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }

    if (num <= 5) {
        return true;
    }

    while (num % 2 === 0) {
        num = num/2;
    }
    while (num % 3 === 0) {
        num = num/3;
    }
    while (num % 5 === 0) {
        num = num/5
    }
    return num === 1;
}
//Metrics: runtime of 68ms is faster than 85% and memory usage of 35.4 is less than 100% of online submissions

//Ugly Number II (https://leetcode.com/problems/ugly-number-ii/)
var nthUglyNumber = function (n) {
    if (n <= 5) {
        return n;
    }
    var stack = new Array(n);
    stack[0] = 1;
    var i2 = 0;
    var i3 = 0;
    var i5 = 0;
    for (var i = 1; i < n; i++) {
        stack[i] = Math.min(stack[i2] * 2, stack[i3] * 3, stack[i5] * 5);
        if (stack[i] === stack[i2] * 2) {
            i2++;
        }
        if (stack[i] === stack[i3] * 3) {
            i3++;
        }
        if (stack[i] === stack[i5] * 5) {
            i5++;
        }
    }
    return stack[n - 1];
};
//Metrics: runtime of 64ms is faster than 90% and runtime of 36.3mb is less than 100% of online submissions


//Basic Calculator (https://leetcode.com/problems/basic-calculator/)
var calculate = function(s) {
    s = s.replace('--', '+')
    var open = s.lastIndexOf('(');
    function recurse(open) {
        if(open === -1) {
            return ;
        }
        var close = open;
        while(s[close] !== ')') {
            close ++;
        }
        var substring1 = s.substring(open, close + 1);
        var substring2 = s.substring(open + 1, close);
        var sum = calculateHelper(substring2).toString();
        s = s.replace(substring1, sum);
        var open = s.lastIndexOf('(');
        recurse(open);
    }
    
    recurse(open);
    return calculateHelper(s);
    // return s;
}
var calculateHelper = function(s) {
    s.trim();
    var integers = s.split(/[x^+-]/);
    var signs = s.split('').filter(char => char === '+' || char === '-');
    signs.unshift('+');
    var sum = 0;
    for (var i = 0; i < integers.length; i++) {
        if (signs[i] === '+') {
            sum += Number(integers[i]);
        } else {
            sum -= Number(integers[i]);
        }
    }
    return sum;
};

//House Robber (https://leetcode.com/problems/house-robber)
var rob = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0]
    }
    if(nums.length === 2) {
        return Math.max(...nums);
    }
    let max = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        max[i] = Math.max(max[i - 2] + nums[i], max[i - 1])
    }

    return max[max.length - 1];
}



//DP Patterns (https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)

//Number of Longest Increasing Subsequence (https://leetcode.com/problems/number-of-longest-increasing-subsequence/)

//Longest Palindromic Substring (https://leetcode.com/problems/longest-palindromic-substring/)

//Best Time to Buy and Sell Stock (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

//Best Time to Buy and Sell Stock with Transaction Fee (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

//Shortest Common Supersequence (https://leetcode.com/problems/shortest-common-supersequence/)