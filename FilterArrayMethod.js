//? When to Use filter()?
// Extracting Data: If you want to filter an array to get a subset of the elements that meet a certain condition (e.g., finding adults, filtering out negative numbers).
// Cleaning Data: Remove falsy values, duplicates, or invalid data.

// const arr1 = [2, 45, 81, 20, 1, 51, 8, 1, 4, 78];
// const newArr = arr1.filter((a) => {
//   return a % 4 === 0;
// });
// console.log(newArr);

//? You can use filter() with arrays of objects, such as filtering users based on age.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 18 }
// ];

// const adults = users.filter(function(user) {
//   return user.age >= 21;
// });

// console.log(adults); // Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]

//? Example with index

// const numbers = [10, 20, 30, 40, 50];

// const filtered = numbers.filter((num, index) => index % 2 === 0);

// console.log(filtered);  // Output: [10, 30, 50] (elements at index 0, 2, 4)

//? Combining filter() with Other Array Methods:
// First, filter the even numbers, then double them

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num * 2);

// console.log(result);  // Output: [4, 8, 12]

//? Filtering with Strings:

// const words = ["apple", "banana", "grape", "orange", "pear"];

// const longWords = words.filter(word => word.length > 5);

// console.log(longWords);  // Output: ["banana", "orange"]

//? Remove Falsy Values
// remove falsy values (null, undefined, 0, false, NaN, and "") from an array:
const mixedArray = [0, "hello", false, 42, "", null, "world"];

const truthyValues = mixedArray.filter(Boolean);  // Using Boolean as the callback

console.log(truthyValues);  // Output: ["hello", 42, "world"]

 


