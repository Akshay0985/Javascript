// Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their containing scope (either the global scope or a function scope). This applies to both variables and functions.

//? 1. Basic Example of Hoisting with var

// console.log(a);  // Output: undefined (hoisted, but not initialized)
// var a = 10;
// console.log(a);  // Output: 10

//? 2. Basic Example of Hoisting with let and const
//In this example, let declarations are hoisted, but trying to access b before its declaration throws an error. The variable is in a temporal dead zone until the code reaches the declaration.

// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// let b = 5;

//? 3. Function Hoisting

// sayHello();  // Output: "Hello!"

// function sayHello() {
//   console.log("Hello!");
// }

// sayHello();  // TypeError: sayHello is not a function

// var sayHello = function() {
//   console.log("Hello!");
// };

//? 4. Advanced Example: Hoisting with Block Scoping and Temporal Dead Zone

// {
//     console.log(c);  // ReferenceError: Cannot access 'c' before initialization
//     let c = 2;
//     console.log(c);  // Output: 2
//   }

//   console.log(c);  // ReferenceError: c is not defined (block-scoped)

//? 5. Advanced: var vs let in Loops

// var i is hoisted to the function or global scope. The same variable i is used for each iteration, so when the setTimeout callbacks execute, the value of i is 3.
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100); // Output: 3, 3, 3
// }

// let j is block-scoped, so each iteration creates a new block-scoped variable. Each setTimeout callback refers to the correct j for that iteration.
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 100); // Output: 0, 1, 2
// }

//? 6. Advanced: Hoisting Inside Functions

// function outerFunction() {
//   console.log(innerVar); // Output: undefined (hoisted)
//   var innerVar = 7; //if I comment and run this Line : innerVar is not defined

//   function innerFunction() {
//     console.log(innerVar); // Output: 7
//   }

//   innerFunction();
// }

// outerFunction();

//? 7. Complex Case: Hoisting with Function Declarations and Function Expressions

// Hoisting of function declarations
// foo();  // Output: "Function Declaration"
// bar();  // TypeError: bar is not a function

// function foo() {
//   console.log("Function Declaration");
// }

// var bar = function() {
//   console.log("Function Expression");
// };

//? 8. Advanced: Temporal Dead Zone and Closures

let outerVar = "outer";

// {
//   console.log(outerVar);  // ReferenceError: Cannot access 'outerVar' before initialization
//   let outerVar = "inner";
//   console.log(outerVar);  // Output: "inner"
// }

//? 9. Ultra-Advanced: Hoisting in IIFE and Closures

(function() {
    console.log(myVar);  // Output: undefined (hoisted)
    var myVar = "Hoisted inside IIFE";
    console.log(myVar);  // Output: "Hoisted inside IIFE"
  })();

  (function() {
    console.log(myLet);  // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = "Block-scoped inside IIFE";
    console.log(myLet);  // Output: "Block-scoped inside IIFE"
  })();
