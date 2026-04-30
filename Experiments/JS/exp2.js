// //Activity 1 object array function
// //Array
// let a=[1,2,1,56,5,432,34,8,765,432];
// console.log(a);

// //Function
// function greet(name) {
// 	return "Hello, My name is" + name;
// }
// console.log(greet("Aditya"));


// //object

// let person = { name: 'John', age: 30 };
// console.log(person.name); // Output: John

// //Activity 2: Implementations

// // Reverse a number
// function reverseNumber(num) {
//     return parseInt(num.toString().split('').reverse().join(''));
// }
// //console.log(typeof(reverseNumber(123)));

// console.log(reverseNumber(123)); // 321

// // Check palindrome number
// //console.log(str.split(''));
// function isPalindromeNumber(num) {
//     let str = num.toString();
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindromeNumber(121)); // true


// // Fibonacci series
// function fibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     let series = [0, 1];
//     for (let i = 2; i < n; i++) {
//         series.push(series[i - 1] + series[i - 2]);
//     }
//     return series;
// }
// console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // Find largest number in array
// function findLargest(arr) {
//     return Math.max(...arr);
// }
// console.log(findLargest([1, 5, 3, 9, 2])); // 9

// // Remove duplicate elements in array
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// // Find missing number in array (assuming array contains 1 to n except one missing)
// function findMissing(arr, n) {
//     let total = n * (n + 1) / 2;
//     let sum = arr.reduce((a, b) => a + b, 0);
//     return total - sum;
// }
// console.log(findMissing([1, 2, 4, 5], 5)); // 3

// // Reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello')); // 'olleh'

// // Count vowels in string
// function countVowels(str) {
//     return (str.match(/[aeiou]/gi) || []).length;
// }
// console.log(countVowels('hello world')); // 3

// // Check if string is palindrome
// function isPalindromeString(str) {
//     let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }
// console.log(isPalindromeString('A man a plan a canal Panama')); // true

// // Check if number is prime
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7)); // true

// // Factorial
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// // Function to find if number is even or odd
// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? 'even' : 'odd';
// }
// console.log(isEvenOrOdd(4)); // 'even'

// // Function to find sum of array
// function sumOfArray(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// }
// console.log(sumOfArray([1, 2, 3, 4, 5])); // 15 


/* ========== Activity 01 ==========
   Declare Array, Function, and Object
==================================*/
let arr = [10, 20, 30, 40];

function greet(name) {
    return "Hello I am" + name;
}

let student = {
    rollNo: 1,
    name: "Aditya",
    age: 20
};

console.log("Activity 01:Declare Array, Function, and Object");
console.log(arr);
console.log(greet("Aditya"));
console.log(student);

/* ========== Activity 02 ==========
   Reverse a Number
==================================*/
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log("\nActivity 02:Reverse a Number", reverseNumber(1234));

/* ========== Activity 03 ==========
   Check Palindrome (Number)
==================================*/
function isPalindromeNumber(num) {
    return num === reverseNumber(num);
}
console.log("Activity 03:Check Palindrome (Number)", isPalindromeNumber(121));

/* ========== Activity 04 ==========
   Fibonacci Series
==================================*/
function fibonacci(n) {
    let a = 0, b = 1;
    let series = [a, b];
    for (let i = 2; i < n; i++) {
        let c = a + b;
        series.push(c);
        a = b;
        b = c;
    }
    return series;
}
console.log("Activity 04:Fibonacci Series", fibonacci(7));

/* ========== Activity 05 ==========
   Largest Element in Array
==================================*/
function largestElement(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
}
console.log("Activity 05:Largest Element in Array", largestElement([10, 25, 5, 40]));

/* ========== Activity 06 ==========
   Remove Duplicate Elements
==================================*/
function removeDuplicates(array) {
    return [...new Set(array)];
}
console.log("Activity 06:Remove Duplicate Elements", removeDuplicates([1, 2, 2, 3, 4, 4]));

/* ========== Activity 07 ==========
   Missing Number in Array
==================================*/
function findMissing(array, n) {
    let total = (n * (n + 1)) / 2;
    let sum = array.reduce((a, b) => a + b, 0);
    return total - sum;
}
console.log("Activity 07:Missing Number in Array", findMissing([1, 2, 4, 5], 5));

/* ========== Activity 08 ==========
   Reverse a String
==================================*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Activity 08:Reverse a String", reverseString("hello"));

/* ========== Activity 09 ==========
   Check Palindrome in String
==================================*/
function isPalindromeString(str) {
    return str === reverseString(str);
}
console.log("Activity 09:Check Palindrome in String", isPalindromeString("madam"));

/* ========== Activity 10 ==========
   Check Prime Number
==================================*/
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Activity 10:Check Prime Number", isPrime(7));

/* ========== Activity 11 ==========
   Factorial of a Number
==================================*/
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Activity 11:Factorial of a Number", factorial(5));

/* ========== Activity 12 ==========
   Even or Odd
==================================*/
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Activity 12:Even or Odd", evenOrOdd(10));

/* ========== Activity 13 ==========
   Sum of Array Elements
==================================*/
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log("Activity 13:Sum of Array Elements", sumOfArray([1, 2, 3, 4]));

/*************** END ****************/

