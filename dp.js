/* eslint-disable indent */
//Dynamic Programming

//Climbing Stairs (https://leetcode.com/problems/climbing-stairs/)
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
var climbStairs = function(n) {
    if (n <= 2) { return n; }
    var arr = [1, 2];
    for (var i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

//Fibonacci Number (https://leetcode.com/problems/fibonacci-number/)
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is 
//the sum of the two preceding ones, starting from 0 and 1
var fib = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

//Course Schedule (https://leetcode.com/problems/course-schedule/)
//There are a total of n courses you have to take, labeled from 0 to n-1.
//Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
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
    var negatives = nums.filter(a => a < 0).length;

};

//Valid Parentheses (https://leetcode.com/problems/valid-parentheses/)
var isValid = function(s) {

};

//Non-decreasing Array (https://leetcode.com/problems/non-decreasing-array/)
var checkPossibility = function(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            nums[i] = nums[i + 1] - 1;
            for (var j = 0; j < nums.length; j++) {
                if (nums[j] > nums[j + 1]) {
                    return false;
                }
            }
        }
    }
    
    return true;
};