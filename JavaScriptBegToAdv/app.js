//variable and datatypes 
var life = 100;

console.log('Hey Dev Ed');

function example() {

    if (true) {
        var varVariable = "I'm a var!";
        let letVariable = "I'm a let!";
    }
    console.log(varVariable); // Accessible, prints "I'm a var!"
    //console.log(letVariable); // ReferenceError: letVariable is not defined
}
example();