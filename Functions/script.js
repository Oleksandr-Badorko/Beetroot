// Function declarations:

// function add(x, y) {
//     return x + y;
//   }

// Function expressions:

// const add = function(x, y) {
//     return x + y;
//   };

//   const multiply = function multiply(x, y) {
//     return x * y;
//   };

// Arrow functions:

// const add = (x, y) => x + y;

// const multiply = (x, y) => {
//   return x * y;
// };

// Function constructors:

// const add = new Function('x', 'y', 'return x + y');

// Methods:

// const calculator = {
//     add: function(x, y) {
//       return x + y;
//     },
//     subtract(x, y) {
//       return x - y;
//     }
//   };

//   const math = {};
//   math.multiply = function(x, y) {
//     return x * y;
//   };

// function countArguments() {
//   console.log(`Number of arguments: ${arguments.length}`);
// }

// countArguments(); // Number of arguments: 0
// countArguments(1, 2, 3); // Number of arguments: 3
// countArguments("hello", true, [1, 2, 3]); // Number of arguments: 3

// function compareNumbers(num1, num2) {
//   if (num1 < num2) {
//     return -1;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n-1);
//     }
//   }

// function numbers(num1, num2, num3) {
//     return num1.toString() + num2.toString() + num3.toString();
// }

// console.log(numbers(1,4,9));

// function calculateArea(length, width = length) {
//   return length * width;
// }

// console.log(calculateArea(5, 6));
// console.log(calculateArea(4));

// function isPerfectNumber(num) {
//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// console.log(isPerfectNumber(6)); // Output: true (6 = 1 + 2 + 3)
// console.log(isPerfectNumber(28)); // Output: true (28 = 1 + 2 + 4 + 7 + 14)
// console.log(isPerfectNumber(12)); // Output: false (12 != 1 + 2 + 3 + 4 + 6)

// function printPerfectNumbers(min, max) {
//   for (let i = min; i <= max; i++) {
//     let sum = 0;
//     for (let j = 1; j <= i / 2; j++) {
//       if (i % j == 0) {
//         sum += j;
//       }
//     }
//     if (sum == i) {
//       console.log(i);
//     }
//   }
// }

// printPerfectNumbers(1, 1000);

