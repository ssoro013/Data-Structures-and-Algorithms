//String to Integer (atoi) (https://leetcode.com/problems/string-to-integer-atoi/)
var myAtoi = function (str) {
    var s = str.trim();
    var int = "";
    for (var i = 0; i < s.length; i++) {
        if (!Number.isInteger(Number(s[i])) && s[i] !== "+" && s[i] !== "-") {
            break;
        } else {
            if (i === 0) {
                if (Number.isInteger(Number(s[i])) || s[i] === "+" || s[i] === "-") {
                    int += s[i];
                }
            } else {
                if (Number.isInteger(Number(s[i])) && s[i] !== " ") {
                    int += s[i]
                } else {
                    break;
                }
            }
        }
    }

    if (Number(int) < -(2**31)) {
        return -(2**31);
    } else if (Number(int) > 2**31 - 1) {
        return 2**31 - 1;
    } else if (Number.isInteger(Number(int))) {
        return Number(int);
    } else {
        return 0;
    }
};
//Metrics: runtinme of 68ms faster than 95% and memory usage of 36 less than 50% of online submissions

//Valid Parentheses (https://leetcode.com/problems/valid-parentheses/)
var isValid = function (s) {
    if (s.length === 0) {
        return true;
    }
    if (s.length === 1) {
        return false;
    }
    var map = {"(": ")", "{": "}", "[": "]"}
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            stack.push(s[i])
        } else {
            if (map[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

//Metrics: runtime of 52ms faster than 90% and memory usage of 34mb less than 70% of online submissions

//Longest Valid Parentheses (https://leetcode.com/problems/longest-valid-parentheses/)
var isValid = function(s) {
    var map = {"(": ")"};
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        } else {
            if (map[stack[stack.length - 1]] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }  
    return stack.length === 0;
};

var longestValidParentheses = function(s) {
    var window = s.length;
    while (window >= 2) {
        for (var i = 0; i < s.length - window + 1; i++) {
            var current = s.slice(i, i + window);
            if (isValid(current)) {
                return window;
            }
        }
        window --;
    }
    return 0;
};

//Minimum Add to Make Parentheses Valid (https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)
var minAddToMakeValid = function(S) {
    var open = 0;
    var close = 0;
    for(var i = 0; i < S.length; i++) {
        if(S[i] === '(') {
            open ++;
        } else {
            if(open > 0) {
                open --;
            } else {
                close ++;
            }
        }
    }
    return open + close;
}

//Minimum Window Substring (https://leetcode.com/problems/minimum-window-substring/)
var minWindow = function(s, t) {
    if(s.length === 0 || t.length === 0 || s.length < t.length) {
        return '';
    }
    var min = ""; 
    var left = 0;
    var right = -1;
    var map = {};

    for(var i = 0; i < t.length; i++) {
        map[t[i]] ? map[t[i]]++ : map[t[i]] = 1;
    }
	
    var count = Object.keys(map).length;

    while(right <= s.length) {
        if(count == 0) {
            var current = s[left];
            
            if(map[current] != null) {
                map[current]++
            }
            
            if(map[current] > 0) {
                count++;
            }
			
            var temp = s.substring(left, right+1)
            
            if(min == ""){
                min = temp;
            }
            else {
                min = min.length < temp.length? min : temp;
            };
			
            left++;
        } else {
            right++;
            var current = s[right];
            if(map[current] != null) {
                map[current]--;
            }
            if(map[current] == 0) {
                count--;
            }
        }
    }
    return min;
};

var s = "ADOBECODEBANC";
var t = "ABC";
var output = minWindow(s, t);
console.log(output)

//Note: refator to solve in O(n)

//String Compression (https://leetcode.com/problems/string-compression/)
var compress = function(chars) {
    var output = '';
    var char = chars[0];
    var count = 1;
    for(var i = 1; i < chars.length; i++) {
        if(chars[i] === char) {
            count ++;
        } else {
            if(count > 1) {
                output += char + count;
            } else {
                output += char;
            }
            char = chars[i];
            count = 1;
        }
    }
    count > 1 ? output += char + count : output += char;
    return output.split('');
};

//Calculator
var calculate = function(str) {
    var integers = str.split(/[x^+-]/);
    var signs = str.split('').filter(char => char === '+' || char === '-');
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
}

//Reverse String(https://leetcode.com/problems/reverse-string/)
var reverseString = function(s) {
    let first = 0;
    let last = s.length - 1;
    while(first <= last) {
        let temp = s[first];
        s[first] = s[last];
        s[last] = temp;
        first ++;
        last --;
    }
    return s;
}

//Sentence Reverse (https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4)
var reverseWords = function(arr) {
    let first = null;
    let n = arr.length - 1;
    reverseHelper(arr, 0, n);
    for(let i = 0; i <= n; i++) {
        if(arr[i] === ' ') {
            if(first !== null) {
                reverseHelper(arr, first, i - 1)
                first = null;
            }
        } else if(i === n) {
            if(first !== null) {
                reverseHelper(arr, first, i);
            }
        } else {
            if(first === null) {
                first = i;
            }
        }
    }

    return arr;
}

var reverseHelper = function(arr, first, last) {
    while(first <= last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first ++;
        last --;
    }
}

//Longest Palindromic Substring (https://leetcode.com/problems/longest-palindromic-substring/)

//Backspace String Compare(https://leetcode.com/problems/backspace-string-compare/)
var backspaceCompare = function(S, T) {
    return build(S) === build(T);
}

var build = function(str) {
    let output = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '#') {
            output.pop()
        } else {
            output.push(str[i]);
        }
    }
    return output.join('');
}

//Valid Parenthesis String(https://leetcode.com/problems/valid-parenthesis-string/)
var checkValidString = function(s) {
    return valid(s) || valid(s.replace(/[*]/, '')) || valid(s.replace(/[*]/, ')')) || valid(s.replace(/[*]/, '('))
}

var valid = function(s) {
    let open = 0;
    let close = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            open ++;
        } else {
            if(open > 0) {
                open --;
            } else {
                close ++;
            }
        }
    }
    return open + close === 0;
}


//Hamming Distance(https://leetcode.com/problems/hamming-distance/)
    //Solution 1
var hammingDistance = function(x){
    let count = 0;
    let bit1 = x.toString(2).split('');
    let bit2 = y.toString(2).split('');
    let length = Math.max(bit1.length, bit2.length, 4)
    for(let i = 0; i < length; i++) {
        let char1 = bit1.pop() || '0';
        let char2 = bit2.pop() || '0';
        if(char1 !== char2) {
            count ++;
        }
    }
    return count;
};