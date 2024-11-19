//The reduce() method in JavaScript is used to reduce an array to a single value.

//? Reduce
// const arr1 = [1,2,3,4,5,6,7,8,9];
// const newValue = arr1.reduce((previousValue,currentValue) => {
//   return previousValue + currentValue
// });
// console.log(newValue);

//? Example 1: with No Initial Value:
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(prevValue, currentValue) {
//   console.log("Previous Value:", prevValue, "| Current Value:", currentValue);
//   return prevValue + currentValue;  // Returning the updated accumulator
// }, 0);  // Initial value is set to 0

// console.log("Final Sum:", sum);  // Output: 15

//? Example 2: with No Initial Value:
// const cart = [
//     { item: "Laptop", price: 1000 },
//     { item: "Phone", price: 500 },
//     { item: "Tablet", price: 300 }
//   ];
  
//   const total = cart.reduce(function(prevValue, currentItem) {
//     console.log("Previous Total:", prevValue, "| Current Item Price:", currentItem.price);
//     return prevValue + currentItem.price;  // Adding price of the current item
//   }, 0);  // Initial value is set to 0
  
//   console.log("Total Price:", total);  // Output: 1800
  