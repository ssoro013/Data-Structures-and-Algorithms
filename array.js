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
var findPeakElement = function (nums) {
    if (nums.length === 1) {
        return 0;
    } else {
        for (var i = 0; i < nums.length; i++) {
            if (i === 0) {
                if (nums[i] > nums[i + 1]) {
                    return i;
                }
            } else if (i > 0 && i < nums.length - 1) {
                if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                    return i;
                }
            } else {
                if (nums[i] > nums[i - 1]) {
                    return i;
                }
            }
        }
    }
};

//Peak Index in a Mountain Array (https://leetcode.com/problems/peak-index-in-a-mountain-array/)
var peakIndexInMountainArray = function (A) {
    var low = 0;
    var high = A.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (A[mid]> A[mid - 1] && A[mid] > A[mid + 1]) {
            return mid;
        } else if (A[mid] > A[mid - 1] && A[mid] < A[mid +1]) {
            low = mid;
        } else {
            high = mid;
        }
    }
}
//Metrics: runtime of 40ms is faster than 99.73% and memory usage of 34mb is less than 75% of online submissions

//Binary Search
var binarySearch = function (array, target) {
    var low = 0;
    var high = array.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            return true;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}

//Find First and Last Position of Element in Sorted Array (https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
//Solution I: O(n)
var searchRange = function (nums, target) {
    var arr = [-1, -1];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (arr[0] === -1) {
                arr[0] = i;
                arr[1] = i;
            } else {
                arr[1] = i;
            }
        }
    }
    return arr;
}

//Solution II: O(log n)
var searchRange = function (nums, target) {
    var low = 0;
    var high = nums.length - 1;
    var index = -1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            index = mid;
            break ;
        } else if (nums[mid] < target){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    var start = index;
    var end = index;
    while (nums[start - 1] === target) {
        start --;
    }

    while (nums[end + 1] === target) {
        end ++;
    }
    return [start, end];
}

//Rotate Array (https://leetcode.com/problems/rotate-array/)
var rotate = function (nums, k) {
    for (var i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

//Shuffle an Array (https://leetcode.com/problems/shuffle-an-array/)
var shuffle = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        var j = Math.floor(Math.random() * nums.length);
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = nums[i];
    }
    return nums;
}
//Metrics: runtime of 216ms is faster than 97% and memory usage of 58mb is less than 67% of online submissions

//Partition Array for Maximum Sum (https://leetcode.com/problems/partition-array-for-maximum-sum/)
var maxSumAfterPartitioning = function (A, K) {
    for (var i = 0; i < A.length - K + 1; i += K) {
        var max = Math.max(...A.slice(i, i + K));
        for (var j = i; j < i + K; j++) {
            A[j] = max;
        }
    }
    return A;
}

//Array of Doubled Pairs (https://leetcode.com/problems/array-of-doubled-pairs/);

//H-Index (https://leetcode.com/problems/h-index/);

//First Bad Version (https://leetcode.com/problems/first-bad-version/)
var solution = function(isBadVersion) {
    return function(n) {
        var low = 1;
        var high = n;
        var bad = -1;
        while (low <= high) {
            var mid = Math.floor((low + high) /2);
            if (isBadVersion(mid)) {
                bad = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return bad;
    };
};
//Metrics: runtime of 44ms is faster than 95% 

//Find Duplicates
//Solution 1
var findDuplicates = function(arr1, arr2) {
    var duplicates = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            duplicates.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return duplicates;
}

//Solution 2
var findDuplicates = function(arr1, arr2) {
    var duplicates = [];
    for (var i = 0; i < arr1.length; i++) {
        if (binarySearch(arr2, arr1[i])) {
            duplicates.push(arr1[i]);
        }
    }
    return duplicates;
}

var binarySearch = function(arr, val) {
    var low = 0;
    var high = arr.length - 1;
    while(low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (arr[mid] === val) {
            return true;
        } else if (arr[mid] < val) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

//Product of Array Except Self (https://leetcode.com/problems/product-of-array-except-self/)
var productExceptSelf = function(nums) {
    var n = nums.length;
    var output = new Array(n);
    output[0] = 1;
    for (var i = 1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    var r = 1;
    for (var j = n - 1; j >= 0; j--) {
        output[j] = output[j] * r;
        r *= nums[j];
    }
    return output;
}
//metrics: runtime of 72ms is faster than 90% and memory usage of 42.1 is less than 90% of online submissions

//Search in Rotated Array (https://leetcode.com/problems/search-in-rotated-sorted-array/)
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[low] <= nums[mid]) {
            if(nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}
//metrics: runtime of 48ms is faster than 96% and memory usage of 33.7mb is less than 96% of online submissions

//Search Suggestions System (https://leetcode.com/problems/search-suggestions-system/)
var suggestedProducts = function(products, searchWord) {
    products.sort();
    var word = '';
    var output = [];
    for(var i = 0; i < searchWord.length; i++) {
        word += searchWord[i];
        var l = word.length;
        var arr = products.filter(product => product.slice(0, l) === word);
        output.push(arr.slice(0, 3));
    }
    return output;
}
//metrics: runtime of 148ms is faster than 60% and memory usage of 49.5mb is less than 100% of online submissions

//Merge Intervals (https://leetcode.com/problems/merge-intervals/)
var merge = function(intervals) {
    
}

//Search in Rotated Sorted Array II (https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

//Find Minimum in Rotated Sorted Array (https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

//Pairs with Specific Difference (https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnpZ)
var findPairsWithGivenDifference = function(arr, k) {
    //x - y = k => x = y + k
    var output = [];
    var hash = {};
    for(var x = 0; x < arr.length; x++) {
        hash[arr[x]] = true;
    }
    for(var y = 0; y < arr.length; y++) {
        if(hash[arr[y] + k]) {
            output.push([arr[y] + k, arr[y]]);
        }
    }
    return output;
}

//K-Messed Array Sort (https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnBZ)
var sortKMessedArray = function(arr, k) {
    for(var i = 0; i < arr.length; i++) {
        var min = Math.min(...arr.slice(i, i + k + 1));
        var minIndex = arr.indexOf(min);
        var temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp;
    }
    return arr;
}

//Single Number (https://leetcode.com/problems/single-number/)
var singleNumber = function(nums) {
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i += 2) {
        if(nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
}

//Daily Temperatures (https://leetcode.com/problems/daily-temperatures/)
var dailyTemperatures = function(T) {
    let output = [];
    for(let i = 0; i < T.length; i++) {
        let j = i + 1;
        let count = 1;
        while(T[i] >= T[j]) {
            count ++;
            j ++;
        }
        if(T[j] > T[i]) {
            output.push(count);
        } else {
            output.push(0)
        }
    }
    return output;
};

//Subsets (https://leetcode.com/problems/subsets/)
var subsets = function(nums) {
    let output = [[]];
    for(let i = 0; i < nums.length; i++) {
        output.forEach(item => output.push([...item, nums[i]]));
    }
    return output;
}

//Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)
//Solution 1 (Hash Table)
var containsDuplicate = function(nums) {
    let counts = {};
    for(let i = 0; i < nums.length; i++) {
        if(!counts[nums[i]]) {
            counts[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};

//Solution 2 (Set)
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
}

//Solution 3 (Sort)
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

//Contains Duplicate II (https://leetcode.com/problems/contains-duplicate-ii/)
var containsNearbyDuplicate = function(nums, k) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) {
            return true;
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
}
    

//Contains Duplicate III (https://leetcode.com/problems/contains-duplicate-iii/)
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};