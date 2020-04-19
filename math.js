//Square Root (https://leetcode.com/problems/sqrtx/)
var mySqrt = function(x) {
    var i = 0;
    while (i <= x) {
        if (i * i === x) {
            return i;
        } else if (i * i > x) {
            return i - 1;
        }
        i++;
    }
};

//Checking for primality
var isPrime = function (n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

//Count Primes (https://leetcode.com/problems/count-primes/)
var countPrimes = function(n) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            count ++;
        }
    }
    return count;
};

//The Sieve of Eratosthenes
var sieveOfEratosthenes = function(n) {
    var arr = new Array(n).fill(true);
    for (var i = 0; i < Math.sqrt(n); i++) {
        if (i < 2) {
            arr[i] = false;
        }

        if (arr[i]) {
            for (var j = i * i; j < n; j += i) {
                arr[j] = false
            }
        }
    }
    return arr.filter(i => i === true).length;
}

//Valid Number (https://leetcode.com/problems/valid-number/)
var isNumber = function(s) {
    return !isNaN(s) && !!s.trim();
}
//Metrics: runtime of 76ms is faster than 95% and memory usage of 36.2mb is less than 100% of online submissions

//Power (https://leetcode.com/problems/powx-n/)
var myPow = function(x, n) {
    var output;
    var power = Math.abs(n);
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    if (power % 2 === 0) {
        output = myPow(x**2, power/2)
    } else {
        output = myPow(x**2, (power - 1)/2) * x;
    }

    return n > 0 ? output : 1/output;
};
//Metrics: runtime of 48ms is faster than 98% and memory usage of 22.8mb is less than 88% of online submissions

//Super Pow (https://leetcode.com/problems/super-pow/)

//Evaluate Reverse Polish Notation(https://leetcode.com/problems/evaluate-reverse-polish-notation/)
var evalRPN = function(tokens) {
    let stack = [];
    let functions = {
        '+': (a,b) => a + b,
        '-': (a,b) => b - a,
        '*': (a,b) => a * b,
        '/': (a,b) => Math.trunc(b/a)
    }
    for(let i = 0; i < tokens.length; i++) {
        if(!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]))
        } else {
            let result = functions[tokens[i]](stack.pop(), stack.pop());
            stack.push(result);
        }
    }
    return stack[0];
}

//Happy Number (https://leetcode.com/problems/happy-number/)
var isHappy = function(n) {
    let num = helper(n);
    let previous = [];
    while(!previous.includes(num) && num !== 1) {
        previous.push(num);
        num = helper(num);
    }
    return num === 1;
};

var helper = function(n) {
    let output = 0;
    let digits = n.toString();
    for (let i = 0; i < digits.length; i++) {
        output += Math.pow(Number(digits[i]), 2);
    }
    return output;
};

//Nim Game (https://leetcode.com/problems/nim-game/)
var canWinNim = function(n) {
    return  (n % 4 !== 0);
};