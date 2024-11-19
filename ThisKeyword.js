// "this" keyword always refer to an object 
// The thing about it is that the obeject it is refer to will vary depending on how and where "this" is being called

// const obj = {
//   name: "Akshay",
//   lastname: "Umredkar",
//   fullname: function () {
//     return this;
//   },
// };
// console.log(obj.fullname());

// ("use strict");
// function xyz() {
//   return this;
// }
// console.log(xyz());

//? 1. Global Context
// In the global context (outside of any function), this refers to the global object.

console.log(this);  // In a browser, this logs the `window` object


//? 2. Object Method
// When used in an object method, this refers to the object that owns the method.

// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(this.name);  // `this` refers to `person` object
//   }
// };

// person.greet();  // Output: Alice

//? 3. Constructor Function
// In a constructor function, this refers to the newly created instance of the object.

// function Person(name) {
//   this.name = name;
// }

// const person = new Person("Bob");
// console.log(person.name);  // Output: Bob

//? 4. Arrow Functions
// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding non-arrow function or context where they are defined.

// const person = {
//   name: "Charlie",
//   greet: function() {
//     const innerGreet = () => {
//       console.log(this.name);  // `this` refers to the `person` object
//     };
//     innerGreet();
//   }
// };

// person.greet();  // Output: Charlie

//? 5. this in Event Handlers
//In event handlers, this refers to the element that triggered the event.

// document.getElementById("myButton").addEventListener("click", function() {
//   console.log(this);  // `this` refers to the button element that was clicked
// });

//? 6. this with call, apply, and bind
// You can explicitly set this using call, apply, and bind.
// call and apply: Invoke a function with a specific this value.

// function greet() {
//   console.log(this.name);
// }

// const person = { name: "David" };

// greet.call(person);  // Output: David
// greet.apply(person); // Output: David

//? bind: Creates a new function with a specific this value.

// function greet() {
//   console.log(this.name);
// }

// const person = { name: "Eve" };
// const boundGreet = greet.bind(person);

// boundGreet();  // Output: Eve

//? 7. this in Classes
// In ES6 classes, this refers to the instance of the class.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(this.name);  // `this` refers to the instance of `Person`
//   }
// }

// const person = new Person("Frank");
// person.greet();  // Output: Frank