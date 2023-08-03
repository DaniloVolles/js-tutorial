// 1 - BEGGINING
// Comment
console.log('321321');


// 2 - DECLARING A VARIABLE
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
const interestRate = 0.3;   // With the reserved word const, the variable cannot be reassigned
// interestRate = 1;        // It causes an error in the 'compiler'
console.log(interestRate);  // if a variable might be reasigned, use let, if it can't, use const


// 4 - PRIMITIVE TYPES
let string = '123';         // String Literal
let number = 23;            // Number Literal
let isApproved = false;     // Boolean Literal
let fistName = undefined;   // undefined is a type
let otherName = null;       // Used when you wish to clear its value to use it again


// 5 - DINAMIC TYPING
let a = '123';
console.log(typeof a); // Outputs 'string'
a = 30;
console.log(typeof a); // Output 'number'


