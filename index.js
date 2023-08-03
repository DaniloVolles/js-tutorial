// 1 - BEGGINING
// Comment
console.log('1 - BEGGINING');
console.log('321321');


// 2 - DECLARING A VARIABLE
console.log('2 - DECLARING A VARIABLE');
var x = 1; // Old way
let y = 2; // Good practice

let name;
console.log(name); // Undefined variable
// It is interesting to see that the code works even with a 'mistake'

let lastName = 'Smith';
console.log(lastName);

// best practices to variable names in js
//  - Cannot be a reserved keyword
//  - Should be meaningful
//  - Cannot start with a number (1name)
//  - Cannot contain a space or hyphen (- )
//  - camelCase
//  - They are case sensitive
//  - best practice: each variable in each line


// 3 - CONSTANTS
console.log('3 - DECLARING CONSTANTS');
const interestRate = 0.3;   // With the reserved word const, the variable cannot be reassigned
// interestRate = 1;        // It causes an error in the 'compiler'
console.log(interestRate);  // if a variable might be reasigned, use let, if it can't, use const


// 4 - PRIMITIVE TYPES
console.log('4 - PRIMITIVE TYPES');
let string = '123';         // String Literal
let number = 23;            // Number Literal
let isApproved = false;     // Boolean Literal
let fistName = undefined;   // undefined is a type
let otherName = null;       // Used when you wish to clear its value to use it again


// 5 - DINAMIC TYPING
console.log('5 - DINAMIC TYPING');
let a = '123';
console.log(typeof a); // Outputs 'string'
a = 30;
console.log(typeof a); // Output 'number'


// 6 - OBJECTS
console.log('6 - OBJECTS');
let person = { // Calling an Object Literal
    name: 'Danilo',
    age: 25
}; 

console.log(person);

// Accessing attributes
// Dot Notation
person.name = 'Sarah';
console.log(person.name);
console.log(person.age);
// Bracket Notation
let selection = 'name';
person[selection] = 'Mary'; // You can write { person['name'] = 'Mary' } as well
console.log(person.name);


// 7 - ARRAYS
console.log('7 - ARRAYS');
let emptyArray = [];

let selectedColors = ['red', 'blue'];

console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);

// 8 - FUNCTIONS
console.log('8 - FUNCTIONS');

function greet(name, lastName){
    console.log('My first function');
    console.log('My name is ' + name + ' ' + lastName)
}

greet('Danilo', 'Volles');

// 9 - FUNCTION TYPES
console.log('9 - FUNCTION TYPES');
function square(number) {
    return number*number
}
console.log(square(2))