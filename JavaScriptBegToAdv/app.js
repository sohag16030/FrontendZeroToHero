// //variable and datatypes 
// var life = 100;
// const name2 = "Dev";
// let letVariable = "I'm a let!";
// console.log('Hey Dev Ed');

// // let text1 = "A";
// // let text2 = "B";
// // let result = text1 < text2;
// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result);

// //function
// function example() {
//   const name2 = "Dev";
//   if (true) {
//     var varVariable = "I'm a var!";
//     let letVariable = "I'm a let!";
//   }
//   console.log(varVariable); // Accessible, prints "I'm a var!"
//   //console.log(letVariable); // ReferenceError: letVariable is not defined
// }
// console.log(name2);
// example();

// function addNumber(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumber(100, "20"));

// //concatination
// const myAge = 20;
// console.log("My age is :" + myAge)

// console.log(`My age :${myAge}`);

// console.log('hello it\'s me');

// const a = 100;
// const naam = "Edin";
// const combined = a + naam;
// console.log(typeof combined);

// // Operator
// // Exponentiation Assignment Example
// var x = 10;
// x **= 5;
// console.log(x);

// //Left Shift Assignment Example
// var x = 100;
// x <<= 5;
// console.log(x);

// //If/else condition
// let number = 10;

// // Check if the number is positive, negative, or zero
// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// //Object,Properties,Methods
// const car = { type: "Fiat", model: "500", color: "white" };

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.fullName());

// //JavaScript Introduction
// function changeInnerHtmlFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// // <!-- Shift Assignment Operators -->
// // Note ::
// // the vacant bit positions on the left are filled with the original sign bit (0 for positive numbers and 1 for negative numbers). 

// let num = 5; // Binary: 00000101

// num <<= 2;  // Shift left by 2 positions
// // Binary after shift: 00010100
// // Decimal: 20

// console.log(num); // Output: 20

// let num2 = -16; // Binary: 11110000

// num2 >>= 2;  // Shift right by 2 positions
// // Binary after shift: 11111100 // shifted position will be filled with the sign bit
// // Decimal: -4

// console.log(num2); // Output: -4

// let num3 = -16; // Binary: 11110000

// num3 >>>= 2;  // Unsigned shift right by 2 positions
// // Binary after shift: 00111100 // while shifting , shifted position will be filled with zeros
// // Decimal: 60

// console.log(num3); // Output: 60

// //javaScripts functions
// // function myFunction() {
// //   alert("Hello World!");
// // }
// // myFunction();

// //java scripts objects
// const airPlane = {
//   type: "Fait",
//   model: "b-123",
//   color: "white",
//   isPrepareForTakeOf: function () {
//      return false;
//   }
// }
// console.log(airPlane.isPrepareForTakeOf());


// HTML EventListener//
//click event // input event // page loading

// const insertedValueRef = document.getElementById("name");
// const displayValueRef = document.getElementById("message");

// insertedValueRef.addEventListener("change", function() {
//    const insertedValue = insertedValueRef.value;
//    displayValueRef.textContent = insertedValue;
// });


// JavaScript Strings as Objects
// let x = "John";
// let y = new String("John");

// object concept is similar as java

//for literal or string pool
// for == : check just values
// for ===: check type and value

//String methods//

//slice and subStr are similar(end position value is excluded in the result)
//for negative value operation start from reverse order.
// for substring for negative value in anypostion(start,end) will be treated as 0

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // let length = text.length;
// // console.log(length)

// let part = text.substring(-1,5);
// console.log(part);

//html change using click event
// const replacePositonRef = document.getElementById("replaceOperation");

// function relaceMethodCall(){
//   const htmlOfReplacePostion = replacePositonRef.innerHTML;
//   console.log("html:"+ htmlOfReplacePostion);
//   updatedHTML = htmlOfReplacePostion.replace("Microsoft","W3School.com");
//   replacePositonRef.innerHTML = updatedHTML;
// }

// String Search Methods

//String Templates
//back-tics

// let firstName = "John";
// let lastName = "Deo";
// let name = `welcome ${firstName} ${lastName}`;
// console.log(name);

// let header = "Templates Literals";
// let tags = ["template literals", "javaScript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags) {
//     html += `<li>${x}</li>`;
// }
// html += `</ul>`;

// function showHtml(){
//     document.getElementById("demo").innerHTML = html;
// }

const fruits = ["orange","apple","banana"];

// console.log(fruits);
// fruits.push("orange");
// document.getElementById("demo").innerHTML = fruits;
// //fruits.pop();
// fruits.shift();
// document.getElementById("demo").innerHTML = fruits;

fruits.sort();
console.log(fruits);

const numbers = [1, 45, 3, 2, 4, 6, 70, 8, 7, 6];
numbers.sort(function (a, b) { return (a - b) });
console.log(numbers);
