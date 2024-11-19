// A Closures are the combination of a function bundled together with its surrounding state (lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// function outer() {
//     let outerVar = "I am outer!";

//     function inner() {
//       console.log(outerVar); // Can access `outerVar` even after `outer` finishes executing
//     }

//     return inner;
//   }

//   const innerFunc = outer();  // `outer` is executed, returning the `inner` function
//   innerFunc();  // Output: "I am outer!"

/*********************************************************************************************/

// output will be 20 : Jo a he uski value return nahi hoti refrence return hota he
// function fun1() {
//     let a = 10; // Step 1: Declare and initialize `a` with 10

//     function fun2() {
//       console.log(a); // Step 3: `fun2` accesses `a`
//     }

//     a = 20; // Step 2: Update `a` to 20
//     return fun2; // Step 4: Return `fun2`
//   }

//   const abc = fun1(); // Step 5: `fun1` executes and returns `fun2`, which is assigned to `abc`
//   abc(); // Step 6: Call `abc` (which is actually `fun2`)

/**************************************************************************************************/

//? Basic Example: Simple Closure

// function makeCounter() {
//   let count = 0;  // `count` is a private variable

//   return function() {
//     count++;
//     console.log(count);  // Accesses `count` from the outer function's scope
//   };
// }

// const counter = makeCounter();
// counter();  // Output: 1
// counter();  // Output: 2

//? Closure with Private Variables

// function createPerson(name) {
//   let age = 0;  // `age` is private

//   return {
//     getName: function() {
//       return name;  // `name` is accessible because of closure
//     },
//     getAge: function() {
//       return age;  // `age` is private but accessible through this function
//     },
//     setAge: function(newAge) {
//       age = newAge;
//     }
//   };
// }

// const person = createPerson("Alice");
// console.log(person.getName()); // Output: Alice
// console.log(person.getAge());  // Output: 0

// person.setAge(25);
// console.log(person.getAge());  // Output: 25

//? Closures and Asynchronous Code

function createCounter() {
  let count = 0;

  return function() {
    setTimeout(function() {
      console.log(count);  // `count` is captured in the closure
    },1000 );
    count++;
  };
}

const counter = createCounter();
counter();  
counter(); 

//? Nested Closures

// function outerFunction() {
//   let outerVar = "I am outer!";

//   function innerFunction() {
//     let innerVar = "I am inner!";

//     function deepestFunction() {
//       console.log(outerVar); // Accesses `outerVar` from outerFunction
//       console.log(innerVar); // Accesses `innerVar` from innerFunction
//     }

//     deepestFunction();
//   }

//   innerFunction();
// }

// outerFunction();

//? Closures and IIFE (Immediately Invoked Function Expression)

// const result = (function() {
//   let privateCounter = 0;
  
//   return function() {
//     privateCounter++;
//     return privateCounter;
//   };
// })();

// console.log(result());  // Output: 1
// console.log(result());  // Output: 2
