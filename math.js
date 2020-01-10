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


