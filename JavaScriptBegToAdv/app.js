//variable and datatypes 
var life = 100;
const name2 = "Dev";
let letVariable = "I'm a let!";
console.log('Hey Dev Ed');

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