const person1 = {
  FName: "Akshay",
  LName: "Umredkar",
  FullName: function (State, city) {
    return this.FName + " " + this.LName + " " + State + " " + city;
  },
};

const person2 = {
  FName: "Suppu",
  LName: "Khandavalli",
};

// call
// console.log(person1.FullName.call(person2, "AndraPradesh", "Tanuku"));

// Apply
// console.log(person1.FullName.apply(person2, ["AndraPradesh", "Tanuku"]));

// bind - bind method it always return a value,it make a copy and store in result
// const result = person1.FullName.bind(person2, "AndraPradesh", "Tanuku");
// console.log(result());

//? Using bind() in Event Listeners
// A common use of bind() is to ensure that event handlers maintain the correct this context:

// const button = document.getElementById("myButton");
// const person = {
//   name: "David",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// If we don't use `bind`, `this` will refer to the button, not `person`
// button.addEventListener("click", person.greet.bind(person));  // Output: Hello, David

//? Partial Application with bind()
// You can use bind() for partial application by pre-setting some arguments:

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);  // Pre-setting `a` to 2
console.log(double(5));  // Output: 10 (2 * 5)

const triple = multiply.bind(null, 3);  // Pre-setting `a` to 3
console.log(triple(5));  // Output: 15 (3 * 5)