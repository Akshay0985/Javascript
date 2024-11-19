// A promise is a special JavaScript object.it produse a value after an asynchronous operation complete successfully or an  error if it does not complete successfully due to timeout, network error and so on.

//? States of a Promise:
// 1. Pending: The initial state; the operation has not completed yet.
// 2. Fulfilled: The operation completed successfully, and the promise now has a result.
// 3. Rejected: The operation failed, and the promise is now rejected with a reason (error).

// const myPromise = new Promise((resolve, reject) => {
//! Perform some asynchronous operation...

//     if (/* operation is successful */) {
//       resolve("Success!");
//     } else {
//       reject("Failure.");
//     }
//   });

//? Synchronous Operation
// console.log(1)
// console.log(2)
// console.log(3)

//? Asynchronous Operation
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },1000)
// console.log(3)

//? A Simple Promise

// const myPromise = new Promise((resolve, reject) => {
//   let goodDeveloper = true; // Simulate some condition (e.g., an async operation)
//   if (goodDeveloper) {
//     setTimeout(() => {
//       resolve("Do hard and smart work");
//     });
//   } else {
//     reject("Do timepass");
//   }
// });
// // console.log(myPromise);

// myPromise
//   .then((Akshay) => {
//     console.log(Akshay);
//   })
//   .catch((suppu) => {
//     console.error(suppu);
//   });

//? Asynchronous Operation with a Timeout

// const asyncOperation = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Async operation complete after 2 seconds!");
//   }, 2000); // Simulate a 2-second delay

// });

// asyncOperation
//   .then((message) => {
//     console.log(message);  // Output after 2 seconds: Async operation complete after 2 seconds!
//   })
//   .catch((error) => {
//     console.error(error);  // If rejected, the error would be handled here
//   });

//? Chaining Promises:

// const firstPromise = new Promise((resolve, reject) => {
//   resolve(10);  // Start with the number 10
// });

// firstPromise
//   .then((result) => {
//     console.log(result);  // Output: 10
//     return result * 2;    // Return 20 to the next `.then()`
//   })
//   .then((result) => {
//     console.log(result);  // Output: 20
//     return result + 5;    // Return 25 to the next `.then()`
//   })
//   .then((result) => {
//     console.log(result);  // Output: 25
//   })
//   .catch((error) => {
//     console.error(error);  // Handle any error that occurs in the chain
//   });

//? Fetch API using Promises (for HTTP requests)

// fetch(" https://meowfacts.herokuapp.com/") // `fetch()` returns a Promise when the network request completes
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the response as JSON

//   })
//   .then((data) => {
//     console.log(data); // Output the parsed data
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

//? Promise.all() – Handling Multiple Promises
// You can use Promise.all() to run multiple promises in parallel and wait for all of them to complete. It resolves when all the promises resolve, and rejects if any promise fails.

// const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'One'));
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Two'));
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Three'));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);  // Output: ["One", "Two", "Three"] after 3 seconds
//   })
//   .catch((error) => {
//     console.error(error);  // If any promise fails, it will be handled here
//   });

//? Promise.race() – First Resolved or Rejected Promise
//Promise.race() resolves or rejects as soon as one of the promises resolves or rejects, whichever happens first.

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Fast Promise"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1500, "Slow Promise"));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);  // Output: "Fast Promise" (because it resolves first)
  })
  .catch((error) => {
    console.error(error);  // If any promise rejects, it will be handled here
  });
