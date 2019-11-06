//Array

//Remove Duplicates I
//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates1 = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i-1]) {
            arr.splice(i,1);
            i--
        }
    }
    return arr.length;
}

//Remove Element
//Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//The order of elements can be changed. It doesn't matter what you leave beyond the new length.
var removeElement = function(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr.length;
}

//Remove Duplicates II
//Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
var removeDuplicates2 = function(arr) {
    
}

//Non-decreasing Array (https://leetcode.com/problems/non-decreasing-array/)
var checkPossibility = function(nums) {
    var count = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (i > 0) {
                if (nums[i - 1] <= nums[i + 1]) {
                    nums[i] = nums[i - 1]
                } else {
                    nums[i + 1] = nums[i]
                }
            }
        }
    }
};

//Trapping Rain Water (https://leetcode.com/problems/trapping-rain-water/)
var trap = function(arr) {
    
}