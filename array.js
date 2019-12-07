//Array

//Remove Duplicates I (https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

var removeDuplicates1 = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i-1]) {
            arr.splice(i,1);
            i--
        }
    }
    return arr.length;
}

//Remove Duplicates II (https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
var removeDuplicates2 = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
            arr.splice(i, 1);
            i--;
        }
    }
};
//metrics: runtime faster than 50% and memory usage less than 100% online submissions

//Remove Element (https://leetcode.com/problems/remove-element/)
var removeElement = function(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr.length;
};
//metrics: runtime faster than 70% and memory usage less than 80% online submissions



//Non-decreasing Array (https://leetcode.com/problems/non-decreasing-array/)
var checkPossibility = function(nums) {
    var count = 0;
    // for (var i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] > nums[i + 1]) {
    //         if (i > 0) {
    //             if (nums[i - 1] <= nums[i + 1]) {
    //                 nums[i] = nums[i - 1];
    //             } else {
    //                 nums[i + 1] = nums[i];
    //             }
    //         }
    //     }
    // }
    var count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
                nums[i] = nums[i - 1];
            }
        count++;
        }
    }
  return count <= 1;
};

//Trapping Rain Water (https://leetcode.com/problems/trapping-rain-water/)
var trap = function(height) {
    var l = height.length;
    var collection = 0;
    for (var i = 1; i < l - 1; i++) {
        var maxLeft = Math.max(...height.slice(0, i));
        var maxRight = Math.max(...height.slice(i + 1, l));
        var water = Math.max(Math.min(maxLeft, maxRight) - height[i], 0);
        collection += water;
    }
    return collection;
}

//Note: optimize for time and space complexity

//Find Peak Element (https://leetcode.com/problems/find-peak-element/)

// Find First and Last Position of Element in Sorted Array (https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


//Binary Search