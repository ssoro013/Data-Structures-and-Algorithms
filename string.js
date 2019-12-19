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
            if (map[stack[stack.length - 1]] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

//Metrics: runtime of 52ms faster than 90% and memory usage of 34mb less than 70% of online submissions