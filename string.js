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
    var count = 0;
    var stack = [];
    for(var i = 0; i < S.length; i++) {
        if(S[i] === '(') {
            stack.push(S[i])
        } else {
            if(stack.length > 0) {
                stack.pop();
            } else {
                count ++;
            }
        }
    }
    return count + stack.length;
}

//Minimum Window Substring (https://leetcode.com/problems/minimum-window-substring/)
var minWindow = function(s, t) {
    var window = t.length;
    var chars = t.split("");
    while (window <= s.length) {
        for (var i = 0; i < s.length - window +1; i++) {
            var current = s.slice(i, i + window).splilt("");
            if (chars.every(char => chars.filter(i => i === char).length <= current.filter(i => i === char).length)) {
                return current.join("");
            }
        }
        window ++;
    }
    return "";
};

//Note: refator to solve in O(n)