//? Map -  does not mutate the original array. It creates a new array.
// const arr1 = [2,45,81,20,1,51,8,1,4,78]
// const newArr = arr1.map((element)=>{
//     return element * 3
// })
// console.log(newArr)

/*************************************************************************************/

//? Example with Object Array:

// const people = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Smith" }
// ];

// const fullNames = people.map(function(person) {
//   return person.firstName + " " + person.lastName;
// });

// console.log(fullNames);  // Output: ["Alice Johnson", "Bob Smith"]

//? Example with index Array

// const numbers = [10, 20, 30];
// const updatedNumbers = numbers.map((num, index) => {
//   return num + index;
// });

// console.log(updatedNumbers);  // Output: [10, 21, 32]

//? Chaining map() with Other Array Methods:

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map(num => num * 2)        // Double each number
//   .filter(num => num > 5);    // Keep only numbers greater than 5

// console.log(result);  // Output: [6, 8, 10]

/***********************************************************************************/

//? Common Use Cases:
// Transforming Data: map() is commonly used to transform arrays of data (e.g., converting values, extracting certain properties from objects, or formatting data).
// Generating New Arrays: It’s perfect for generating new arrays from existing data.

//? Advanced Example: Mapping Arrays of Objects:

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const prices = products.map((product) => product.price);

// console.log(prices); // Output: [1000, 500, 300]

//? Example when you forget to return:

const numbers = [1, 2, 3];

const result = numbers.map(num => {
  num * 2;  // Forgot the return keyword
});

console.log(result);  // Output: [undefined, undefined, undefined]