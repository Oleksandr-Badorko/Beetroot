// let age = prompt("Please enter your age:");

// if (isNaN(age) || age === "" || age === null) {
//   alert("Invalid input. Please enter a valid age.");
// } else {
//   age = parseInt(age);
  
//   let ageCategory;
  
//   if (age >= 0 && age <= 11) {
//     ageCategory = "child";
//   } else if (age >= 12 && age <= 17) {
//     ageCategory = "teenager";
//   } else if (age >= 18 && age <= 59) {
//     ageCategory = "adult";
//   } else if (age >= 60) {
//     ageCategory = "pensioner";
//   }
  
//   alert(`You are a ${ageCategory}.`);
// }



// let number = prompt("Please enter a number from 0 to 9:");

// if (isNaN(number) || number === "" || number === null) {
//   alert("Invalid input. Please enter a valid number.");
// } else {
//   number = parseInt(number);
  
 
//   let specialCharacter;
  
//   switch(number) {
//     case 0:
//       specialCharacter = ")";
//       break;
//     case 1:
//       specialCharacter = "!";
//       break;
//     case 2:
//       specialCharacter = "@";
//       break;
//     case 3:
//       specialCharacter = "#";
//       break;
//     case 4:
//       specialCharacter = "$";
//       break;
//     case 5:
//       specialCharacter = "%";
//       break;
//     case 6:
//       specialCharacter = "^";
//       break;
//     case 7:
//       specialCharacter = "&";
//       break;
//     case 8:
//       specialCharacter = "*";
//       break;
//     case 9:
//       specialCharacter = "(";
//       break;
//     default:
//       alert("Invalid input. Please enter a number from 0 to 9.");
//       break;
//   }
  
//   if (specialCharacter) {
//     alert(`The special character for the number ${number} is ${specialCharacter}.`);
//   }
// }



// let start = parseInt(prompt("Please enter the starting number:"));
// let end = parseInt(prompt("Please enter the ending number:"));

// if (isNaN(start) || isNaN(end) || start === "" || end === "" || start === null || end === null) {
//   alert("Invalid input. Please enter valid numbers for the range.");
// } else if (start > end) {
//   alert("Invalid input. The starting number cannot be greater than the ending number.");
// } else {
//   let sum = 0;
  
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
  
//   alert(`The sum of numbers from ${start} to ${end} is ${sum}.`);
// }



// let num1 = parseInt(prompt("Please enter the first number:"));
// let num2 = parseInt(prompt("Please enter the second number:"));

// if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "" || num1 === null || num2 === null) {
//   alert("Invalid input. Please enter valid numbers for the calculation.");
// } else {
//   let gcd;
  
//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       gcd = i;
//     }
//   }
  
//   alert(`The greatest common divisor of ${num1} and ${num2} is ${gcd}.`);
// }



// let number = prompt("Please enter a five-digit number:");

// if (isNaN(number) || number === "" || number === null || number.length !== 5) {
//   alert("Invalid input. Please enter a valid five-digit number.");
// } else {
//   if (number[0] === number[4] && number[1] === number[3]) {
//     alert(`${number} is a palindrome!`);
//   } else {
//     alert(`${number} is not a palindrome.`);
//   }
// }



// const purchaseAmount = Number(prompt("Enter the purchase amount:"));
// let discountPercentage = 0;
// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//   discountPercentage = 3;
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//   discountPercentage = 5;
// } else if (purchaseAmount >= 500) {
//   discountPercentage = 7;
// }

// const discountAmount = (purchaseAmount * discountPercentage) / 100;
// const amountToPay = purchaseAmount - discountAmount;

// alert(`Purchase amount: $${purchaseAmount.toFixed(2)}
// Discount percentage: ${discountPercentage}%
// Discount amount: $${discountAmount.toFixed(2)}
// Amount to be paid: $${amountToPay.toFixed(2)}`);



// let numbers = [];
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;

// // Prompt the user for 10 numbers
// for (let i = 1; i <= 10; i++) {
//   let number = parseInt(prompt(`Please enter number ${i}:`));
  
//   if (isNaN(number)) {
//     alert("Invalid input. Please enter a valid number.");
//     i--;
//   } else {
//     numbers.push(number);
//   }
// }

// // Count the number of positive, negative, and zero values entered
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveCount++;
//   } else if (numbers[i] < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }
  
//   // Count the number of even and odd values entered
//   if (numbers[i] % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// alert(`Positive numbers: ${positiveCount}
// Negative numbers: ${negativeCount}
// Zeroes: ${zeroCount}
// Even numbers: ${evenCount}
// Odd numbers: ${oddCount}`);



// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let index = 0;
// let continueLoop = true;

// while (continueLoop) {
//   let response = confirm(`${daysOfWeek[index]}. Do you want to see the next day?`);
  
//   if (response) {
//     index = (index + 1) % 7;
//   } else {
//     continueLoop = false;
//   }
// }