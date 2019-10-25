/* eslint-disable indent */
//Dynamic Programming

//Climbing Stairs
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

//Fibonacci Number
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is 
//the sum of the two preceding ones, starting from 0 and 1

var fib = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

//Course Schedule
//There are a total of n courses you have to take, labeled from 0 to n-1.
//Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

var canFinish = function(numCourses, prerequisites) {
    
}

//Champagne Tower 

var champagneTower = function(poured, query_row, query_glass) {
    
}