//Tricky JavaScript Questions

//1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object?
//How can this pitfall be avoided?


//2. What will the code below output to the console and why?
(function(){
    var a = b = 3;
})();
  
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));


//3. What will the code below output to the console and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

//5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

//6. Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

//7. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?

//8. What will the code below output? Explain your answer.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

//9. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.


//10. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

//11. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

//12. Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

//13. Consider the following code snippet:
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}
//(a) What gets logged to the console when the user clicks on “Button 4” and why?
//(b) Provide one or more alternate implementations that will work as expected.

//14. Assuming d is an “empty” object in scope, say:
var d = {};
//…what is accomplished using the following code?

['zebra', 'horse'].forEach(function(k) {
	d[k] = undefined;
});

//15. What will the code below output to the console and why?
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

//16. What will the code below output to the console and why?
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

//17. The following recursive code will cause a stack overflow if the array list is too large. 
// How can you fix this and still retain the recursive pattern?
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

//18. What is a “closure” in JavaScript? Provide an example.

//19. What will be the output of the following code:
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
// Explain your answer. How could the use of closures help here?

//20. What would the following lines of code output to the console?
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
// Explain your answer.

//21. What will be the output when the following code is executed? Explain.
console.log(false == '0')
console.log(false === '0')

//22. What is the output out of the following code? Explain your answer.
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);

//23. What will the following code output to the console:
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

//24. Consider the code snippet below. What will the console output be and why?
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

//25. What will the following code output to the console and why:
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
// What is the issue with this code and how can it be fixed?

//26. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). 
// For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:
// a DOM element
// a callback function (that takes a DOM element as its argument)

//27. Testing your this knowledge in JavaScript: What is the output of the following code?
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

//28. Consider the following code. What will the output be, and why?
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

//29. What will be the output of this code?
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//30. How do you clone an object?

