// we can access "global to parent and parent to child" but not opposite

//? Intermediate Example: Multiple Lexical Scopes

// function firstFunction() {
//     let firstVar = "I am in the first function!";
    
//     function secondFunction() {
//       let secondVar = "I am in the second function!";
      
//       function thirdFunction() {
//         console.log(firstVar);  // Accessing variable from `firstFunction`
//         console.log(secondVar); // Accessing variable from `secondFunction`
//       }
      
//       thirdFunction();
//     }
    
//     secondFunction();
//   }
  
//   firstFunction();
  
//? Advanced Example: Lexical Environment and Closures

function outer() {
    let outerVar = "I am outer!";
    
    function inner() {
      console.log(outerVar); // Can access `outerVar` even after `outer` finishes executing
    }
    
    return inner;
  }
  
  const innerFunc = outer();  // `outer` is executed, returning the `inner` function
  innerFunc();  // Output: "I am outer!"
  
//? More Advanced Example: Nested Closures and Scope Chains

function outerMost() {
  let outerMostVar = "I am outerMost!";

  function outer() {
    let outerVar = "I am outer!";
    
    function inner() {
      let innerVar = "I am inner!";
      
      console.log(outerMostVar); // Accessing variable from `outerMost`
      console.log(outerVar);     // Accessing variable from `outer`
      console.log(innerVar);     // Accessing its own variable
    }
    
    inner();
  }
  
  outer();
}

outerMost();  

//?  Ultra-Advanced Example: Closures with Dynamic Scopes (Multiple Instances)

function makeCounter() {
  let count = 0;  // Variable `count` is in the closure
  
  return function() {
    count++;
    console.log(count);  // Each closure instance has its own `count` variable
  };
}

const counter1 = makeCounter();  // `counter1` has its own `count`
const counter2 = makeCounter();  // `counter2` has its own `count`

counter1();  // Output: 1
counter1();  // Output: 2

counter2();  // Output: 1
counter2();  // Output: 2

//? Ultra-Advanced Example: IIFE (Immediately Invoked Function Expression) with Lexical Scoping

(function() {
  let secret = "I am a secret!";
  
  function revealSecret() {
    console.log(secret); // Accessing secret from IIFE
  }
  
  revealSecret();
})();  // The function is executed immediately after its definition













