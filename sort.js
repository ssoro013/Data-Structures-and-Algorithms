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

//Quick Sort
var quickSort = function (arr, left, right) {
    var index = partition(arr, left, right);
    if (left < index - 1) {
        quickSort(arr, left, index - 1);
    } if (index < right) {
        quickSort(arr, index, right);
    }
    return arr;
};

var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left ++;
        }
        while (arr[right] > pivot) {
            right --;
        }

        if (left <= right) {
            swap(arr, left, right);
            left ++;
            right --;
        }
    }
    return left;
};

var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

var arr = [9, 1, 0, 5, 7, 7];
var output = quickSort(arr, 0, arr.length);
console.log(output)

//Binary Search
var binarySearchIterative = function (arr, target) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

var binarySearchRecursice = function(arr, target, low, high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursice(arr, target, mid + 1, high);
    } else if (arr[mid] > target) {
        return binarySearchRecursice(arr, target, low, mid - 1)
    }
    return -1;
}