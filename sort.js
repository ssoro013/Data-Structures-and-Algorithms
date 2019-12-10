//Bubble Sort

//Insertion Sort

//Selection Sort

//Heap Sort

//Merge Sort
var mergSort = function (arr) {
    var length = arr.length;
    var mid = Math.floor(length / 2);
    if (length < 2) {
        return arr;
    } else {
        return merge(mergSort(arr.slice(0, mid)), mergSort(arr.slice(mid)));
    }
}

var merge = function (left, right) {
    var output = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex]);
            leftIndex ++;
        } else {
            output.push(right[rightIndex]);
            rightIndex ++;
        }
    }
    return output.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

var arr = [9, 1, 0, 5, 7, 7];
var output = mergSort(arr);
console.log(output)