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
