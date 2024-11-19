// Demonstrating variable declarations and scopes in JavaScript

// Declaring a variable using `var`
var x = 5; // Variable `x` is initially set to 5
var x = 7; // Reassigning `x` to 7 (this is allowed with `var`)
x = 8;     // Changing the value of `x` to 8

// `var` declarations are function-scoped or globally-scoped, not block-scoped
{
  console.log(x); // Output: 8 (block scope does not affect `var`)
}
console.log(x); // Output: 8 (global scope)

const demonstrateVar = () => {
  var y = 6; // Variable `y` is function-scoped
  x = 9;    // Changing the global variable `x` to 9
  console.log(x); // Output: 9
};
demonstrateVar();

// Trying to access `y` outside its function scope
// This will cause a ReferenceError because `y` is not accessible outside the function
// console.log(y); // Uncommenting this line will throw ReferenceError: y is not defined

/**********************************************************************************************/
// Demonstrating `let` declarations and block scoping
let z = 5; // This `let` declaration creates a new block-scoped variable `z` with value 5
z = 6;     // Reassigning `x` to 6

// Block scope with `let`
{
  let def = 9; // `def` is block-scoped
  console.log(def); // Output: 9
}

// Trying to access `def` outside its block scope
// This will cause a ReferenceError because `def` is not accessible outside the block
// console.log(def); // Uncommenting this line will throw ReferenceError: def is not defined

/************************************************************************************************/
// Demonstrating `const` declarations and block scoping
const w = 7; // `const` creates a block-scoped constant variable `w`

{
  // Attempting to change the value of `w` declared with `const`
  // This will cause a TypeError because `const` variables cannot be reassigned
  // w = 10; // Uncommenting this line will throw TypeError: Assignment to constant variable.
  console.log(w); // Output: 7 (The `const` variable `w` declared outside the block is still 7)
}
console.log(w); // Output: 7 (The `const` variable `w` is 7)
