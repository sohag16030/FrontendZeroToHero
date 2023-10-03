// "use strict";    
// x=10;    
// console.log(x); 

// function display() {
//     var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     arr1.copyWithin(2, 3);
//     document.write(arr1);
// }
// display();

// undeclaredVar = 42;

// // JavaScript may treat it as a global variable
// console.log(undeclaredVar); // Outputs: 42

// i = 10;
// i = "string;"
// console.log(i);

// console.log(parseInt ("4F", 16));

var arr1 = "john".split('');
var arr2 = arr1.reverse();
console.log(arr1);
var arr3 = "jones".split('');
arr2.push(arr3);

console.log("array 1: length=" + arr1.length + arr1 + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + arr2 + " last=" + arr2.slice(-1));
