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


//First Unique Character (https://leetcode.com/problems/first-unique-character-in-a-string/)
var firstUniqChar = function(s) {
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        obj[s[i]] ? obj[s[i]] ++ : obj[s[i]] = 1;
    }
    
    for (var element in obj) {
        if (obj[element] === 1) {
            return s.indexOf(element);
        }
    }
    return -1;
};
//Metrics: runtime of 90ms faster than 70% and memory usage of 35MB less than 65% of online submissions

//Top K Frequent Elements (https://leetcode.com/problems/top-k-frequent-elements/)
var topKFrequent = function(nums, k) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
    }

    var sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    var arr = [];
    for (var i = 0; i < k; i++) {
        arr.push(Number(sorted[i][0]));
    }
    return arr;
}

//Longest Substring Without Repeating Characters (https://leetcode.com/problems/longest-substring-without-repeating-characters/)
var lengthOfLongestSubstring = function(s) {
    var max = 1;
    for (var i = 0; i < s.length - 1; i++) {
        var char = s[i];
        var previous = s.slice(0, i + 1);
        for (var j = i + 1; j < s.length; j++) {
            if (!previous.includes(s[j])) {
                char += s[j];
            } else {
                break;
            }
        }
        if (max < char.length) {
            max = char.length;
        }
    }

    return max;
};

//Permutation in String (https://leetcode.com/problems/permutation-in-string/) (using sliding window algorithm)
var sortString = function(s) {
    var sorted = s.split('').sort(function(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }).join('');
    return sorted;
};

var checkInclusion = function(s1, s2) {
    var l1 = s1.length;
    var l2 = s2.length;
    var sorted = sortString(s1);
    for (var i = 0; i < l2 - l1 + 1; i++) {
        var current = sortString(s2.slice(i, i + l1));
        if (current === sorted) {
            return true;
        }
    }
    return false;
};
//Metrics: runtime is slow (needs to optimize), memory usage of 43 less than 100% of online submissions

//String Compression (https://leetcode.com/problems/string-compression/)
var compress = function(chars) {
    let n = chars.length;
    let count = 1;
    for (let i = n - 2; i >= 0; i--) {
        if (chars[i] === chars[i+1]) {
            count++;
        } else if (count > 1) {
            chars.splice(i+2, count-1, ...count.toString().split(''));           
            count = 1;
        }
    }
    
    if (count > 1) {
        chars.splice(1, count-1, ...count.toString().split(''));           
    }
    
    return chars;
};

//Find Common Characters (https://leetcode.com/problems/find-common-characters/)
var commonChars = function(A) {
    var arr = [];
    var min = A.reduce((a, b) => a.length <= b.length ? a : b);
    for (var i = 0; i < min.length; i++) {
        var char = min[i];
        var count = Math.min(...A.map(a => a.split(char).length - 1));
        if (count > 0) {
            if (!arr.includes(char)) {
                for (var j = 0; j < count; j++) {
                    arr.push(char);
                }
            }
        }
    }
    return arr;
};
//Metrics: refactor to optimize for time and space

// var arr = ['bella', 'label', 'roller'];
// console.log(commonChars(arr));

var arr = ['cool', 'lock', 'cook']
console.log(commonChars(arr));


//Minimum Window Substring (https://leetcode.com/problems/minimum-window-substring/)
var minWindow = function(s, t) {

};

var string = 'soro'
var count1 = string.split('r').length - 1;
var count2 = string.match(/r/g || []).length;
console.log(count1, count2);

var arr = ['bella', 'label', 'roller']
// var outcome = Math.min(...arr.map(a => a.split('e').length - 1))
var outcome = arr.reduce((a,b) => a.length <= b.length ? a : b)
console.log(outcome);

