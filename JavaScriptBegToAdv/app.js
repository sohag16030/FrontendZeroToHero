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

//const fruits = ["orange", "apple", "banana"];

// console.log(fruits);
// fruits.push("orange");
// document.getElementById("demo").innerHTML = fruits;
// //fruits.pop();
// fruits.shift();
// document.getElementById("demo").innerHTML = fruits;

// fruits.sort();
// console.log(fruits);

// const numbers = [1, 45, 3, 2, 4, 6, 70, 8, 7, 6];
// numbers.sort(function (a, b) { return (a - b) });
// console.log(numbers);

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//interger value sorting is easier
// cars.sort(function(a,b){
//     return(a.year-b.year);
// })

//sorting object based on object property. property is string type
// cars.sort(function(a,b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
// })

// console.log(cars);

//Array rotation

// const numbers = [1,2,3,4,5];
// numbers.forEach(test);
// function test(value,index,numbers){
//      console.log(value);
// }

// const num2 = numbers.map(mapping);
//  function mapping(value){
//     return value*2;
// }
// console.log(num2);

// console.log(2+"2");

// let name = null;
// let text = "missing";
// let result = name ?? text;
// console.log(result);


// let text = "";

// for (let i = 0, len = cars.length; i < len; i++) {
//     text += cars[i].type + "<br>";
//   }
//   console.log(text)

// function relaceMethodCall(){
//   const htmlOfReplacePostion = replacePositonRef.innerHTML;
//   console.log("html:"+ htmlOfReplacePostion);
//   updatedHTML = htmlOfReplacePostion.replace("Microsoft","W3School.com");
//   replacePositonRef.innerHTML = updatedHTML;
// }

//for loop

//const cars = ["ferari", "volvo", "allion", "primeo"]
// for (let x of cars) {
//   console.log(x);
// }

// let text = "";

// for (let i = 0; i < 10; i++) {
//   text += cars[i] + "<br>";
// }

// for (let x in cars) {
//   console.log(cars[x]);
// }


// const person = { firstName: "John", lastName: "Doe", age: 25 };
// let txt = "";
// for (let x in person) {
//   console.log(person[x]);
//   txt += person[x];
// }

//while loop
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// const letters = new Set(["a", "b", "c"]);
// letters.add("z");
// letters.delete("z");
// for (let x of letters) {
//   console.log(x);
// }

// const myMap = new Map([
//   ["apple", 500],
//   ["Orange", 400],
//   ["Mango", 500]
// ])
// console.log(myMap.has("mango"));

//2009(ES5)//2015(ES6)

//2016//2019//2020//2022

// function relaceMethodCall(){
//   const htmlOfReplacePostion = replacePositonRef.innerHTML;
//   console.log("html:"+ htmlOfReplacePostion);
//   updatedHTML = htmlOfReplacePostion.replace("Microsoft","W3School.com");
//   replacePositonRef.innerHTML = updatedHTML;
// }

//for loop

//const cars = ["ferari", "volvo", "allion", "primeo"]
// for (let x of cars) {
//   console.log(x);
// }

// let text = "";

// for (let i = 0; i < 10; i++) {
//   text += cars[i] + "<br>";
// }

// for (let x in cars) {
//   console.log(cars[x]);
// }


// const person = { firstName: "John", lastName: "Doe", age: 25 };
// let txt = "";
// for (let x in person) {
//   console.log(person[x]);
//   txt += person[x];
// }

//while loop
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// const letters = new Set(["a", "b", "c"]);
// letters.add("z");
// letters.delete("z");
// for (let x of letters) {
//   console.log(x);
// }

// const myMap = new Map([
//   ["apple", 500],
//   ["Orange", 400],
//   ["Mango", 500]
// ])
// console.log(myMap.has("mango"));

//2009(ES5)//2015(ES6)
// var str = "HELLO WORLD";
// str.charAt(0);   

// var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(obj);

//Property Getters and Setters

// var person = {
//     _firstName: "Rahul",
//     _lastName: "Jabir",
//     set firstName(firstName) {
//         this._firstName = firstName;
//     },
//     set lastName(lastName) {
//         this._lastName = lastName;
//     },
//     get fullName() {
//         return this._firstName + this._lastName;
//     }
// }
// person.firstName = "Default";
// person.lastName = "Name";
// console.log(person.fullName);

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "NO"
// };

// Object.defineProperty(person, "language", {
//     value: "en"
// });

// Object.defineProperty(person, "language", {
//     get: function () { return language },
//     set: function (value) { language = value.toUpperCase() }
// });
// // Change Language
// person.language = "en";

// for (var x in person) {
//     console.log(person[x]);
// }
//console.log(person);

// var parent = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "NO"
// };
// Object.create(parent,donor);
// console.log(donor);

//2016(ES6)

// var x = function (x, y) {
//     return x * y;
// }

// arrow function
// const x = (x, y) => { return x * y };

// console.log(x(2,3));

//spread operator
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

// max value of a array

// const numbers = [23,55,21,87,56];
// let maxValue = Math.max(...numbers);
// console.log(maxValue);

// Java Script Promises
// promise is called for asyncronas calling.............

// const myPromise = new Promise(function (myResolve, myReject) {
//     setTimeout(function () { myResolve("myResolve calling..."); }, 3000);
//     setTimeout(function () { myReject("myReject calling..."); }, 4000);
// });

// myPromise.then(function (message) {
//     console.log(message);
// });

// myPromise.catch(function (error) {
//     console.log(error);
// });

// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }

//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);


//JS object,fucntions,class
//object creation
// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

//JS Dom,BOM
// myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// console.log(myObj.cars.car1)

// const person = {
//     name: "John",
//     age: 30,
//     cars: [
//         { brand: "Ford", model: ["A4", "focus", "Mastang"] },
//         { brand: "BMW", model: ["320", "X3", "X5"] },
//         { brand: "Fiat", model: ["500", "Panda"] }
//     ]
// }

// for(let x in person){
//     //let cars = person[cars];
//     console.log(x);
// }

// for (let index in person.cars) {
//     console.log(person.cars[index].brand);
//     for (let idx in person.cars[index].model) {
//      console.log(person.cars[index].model[idx]);
//     }
// }

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myFather = new Person("John", "Doe", 50, "blue");

// myFather.fullName = function () {
//     return this.firstName + this.lastName;
// }
// console.log(myFather.fullName());


//JS calss

// class car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCar = new car("Ferari",1999);
// console.log (`my ${myCar.name} is ${myCar.age()} years old`)

// class car {

//     constructor(brand) {
//         this._brand = brand;
//     }
//     present() {
//         return this._brand;
//     }
// }

// class model extends car {
//     constructor(brand,version) {
//         super(brand);
//         this.version = version;
//     }
//     display() {
//         console.log(`brand is ${this.present()} and model ${this.version}`)
//     }
// }

// const m = new model("ferari","atlas");
// m.display();

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello() {
//         console.log("static method called");
//     }
// }

// const myCar = new Car("Ford");
// console.log(Car.hello());

// Async, Web API's,AJAX
//callback

// function myDisplayer(some) {
//     console.log("called 2");
//     console.log(some);
// }
// function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     console.log("called 1");
//     callback(sum);
// }
// //When you pass a function as an argument, remember not to use parenthesis.
// myCalculator(5,4,myDisplayer);

// console.log("wait 3 sec for reflection")
// setTimeout(myFunction,3000);

// function myFunction(){
//     console.log("Hello");
// }

// const myPromise = new Promise(function (myResolve, myReject) {
//     // function () { myResolve("myResolve is calling");
//     //setTimeout(function () { myResolve("myResolve is calling"); }, 3000);
//     //setTimeout(function () { myReject("myReject is calling") }, 3000);
// });

// myPromise.then(function (message) {
//     console.log(message);
// });

// myPromise.catch(function (error) {
//     console.log(error);
// });

// setInterval(myFunction, 1000);
// function myFunction() {
//     let d = new Date();
//     let time = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
//     document.getElementById("demo").innerText = time;
//     console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

//Promise................... I promise a Result.................

//normal value return 

// function display(message) {
//     console.log(message);
// }

// const myPromise = new Promise(function (resolve, reject) {
//     let x = 1;
//     if (x == 0) {
//         resolve("ok");
//     } else {
//         reject("Not Ok")
//     }
// });

// myPromise.then(
//     function (value) {
//         display(value);
//     }
// )
// myPromise.catch(
//     function (error) {
//         display(error);
//     }
// )

//how to display a image using callback.....
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function getFile(callBack) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function () {
//         if (req.status == 200) callBack(this.responseText);
//         else callBack("Error");
//     }
//     req.send();
// }

// getFile(myDisplayer);

//async//await

// function myDisplayer(value) {
//     console.log(value);
// }
// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(
//     function (value) { myDisplayer(value) },
//     function (error) { myDisplayer(value) }
// );

// async function myDisplay() {
//     let myPromise = new Promise(function (resolve, reject) {
//         resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

// JS DOM



