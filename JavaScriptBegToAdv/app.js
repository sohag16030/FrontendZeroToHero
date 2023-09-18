//variable and datatypes 
var life = 100;
const name2 = "Dev";
let letVariable = "I'm a let!";
console.log('Hey Dev Ed');

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result);

//function
function example() {
    const name2 = "Dev";
    if (true) {
        var varVariable = "I'm a var!";
        let letVariable = "I'm a let!";
    }
    console.log(varVariable); // Accessible, prints "I'm a var!"
    //console.log(letVariable); // ReferenceError: letVariable is not defined
}
console.log(name2);
example();

function addNumber(num1,num2){
    return num1+num2;
}

console.log(addNumber(100,"20"));

//concatination
const myAge =20;
console.log("My age is :"+ myAge)

console.log(`My age :${myAge}`);

console.log('hello it\'s me');

const a = 100;
const naam = "Edin";
const combined = a+naam;
console.log(typeof combined);

// Operator
// Exponentiation Assignment Example
var x = 10;
x **= 5;
console.log(x);

//Left Shift Assignment Example
var x = 100;
x <<= 5;
console.log(x);

//If/else condition
let number = 10;

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//Object,Properties,Methods
const car = {type:"Fiat", model:"500", color:"white"};

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

 console.log(person.fullName());