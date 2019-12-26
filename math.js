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

//Count Primes
var countPrimes = function(n) {
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            count ++;
        }
    }

    return count;
}

var isPrime = function(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 0; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}