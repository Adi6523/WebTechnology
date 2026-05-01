// diff btw arrow function and simple function 
// this key word in simple and arrow function why we use in these functions and why
// write a code for arrow fun with 2 example
// write a code for switch case in js
// how to use truthy and falsy value in js
// how to use ternery operratoe i js
// write a code for how to use loops in js
// diff btw for in and for of 
// how to use filter and map fun in js
//  how to use reduce method in js

//01


const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

//02
let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Yellow fruit");
    break;
  case "Apple":
    console.log("Red fruit");
    break;
  default:
    console.log("Unknown fruit");
}

// 03

let username = ""; // Empty string is Falsy

if (username) {
  console.log("We have a user!");
} else {
  console.log("Guest mode active"); // This will run
}

// 05
// A simple "for" loop
for (let i = 1; i <= 3; i++) {
  console.log("Count is: " + i);
}

// These are powerful ways to handle arrays without manual loops.

// Map (Transforming)
// Creates a new array by doing something to every item.

let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]

// Filter (Selecting)
// Creates a new array with items that pass a "test."
let prices = [10, 50, 80];
let expensive = prices.filter(p => p > 40); // [50, 80]

// Reduce (Combining)
// Squashes an array down into a single value (like a sum).
let basket = [10, 20, 30];
// 'acc' is the running total, 'curr' is the current item
let total = basket.reduce((acc, curr) => acc + curr, 0); 
console.log(total); // 60