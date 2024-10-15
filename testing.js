// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// async function numberToWords(num) {
//   const ones = [
//     "",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//     "Ten",
//     "Eleven",
//     "Twelve",
//     "Thirteen",
//     "Fourteen",
//     "Fifteen",
//     "Sixteen",
//     "Seventeen",
//     "Eighteen",
//     "Nineteen",
//   ];

//   const tens = [
//     "",
//     "",
//     "Twenty",
//     "Thirty",
//     "Forty",
//     "Fifty",
//     "Sixty",
//     "Seventy",
//     "Eighty",
//     "Ninety",
//   ];

//   const getOnes = (num) => ones[num];

//   const getTens = (num) =>
//     tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");

//   const getHundreds = (num) =>
//     ones[Math.floor(num / 100)] +
//     " Hundred" +
//     (num % 100 !== 0 ? " and " + numberToWords(num % 100) : "");

//   const getThousands = (num) =>
//     numberToWords([Math.floor(num / 1000)]) +
//     " Thousand" +
//     (num % 1000 !== 0 ? " " + numberToWords(num % 1000) : "");

//   const getLakhs = (num) =>
//     numberToWords(Math.floor(num / 100000)) +
//     " Lakh" +
//     (num % 100000 !== 0 ? " " + numberToWords(num % 100000) : "");

//   const getCrores = (num) =>
//     numberToWords(Math.floor(num / 10000000)) +
//     " Crore" +
//     (num % 10000000 !== 0 ? " " + numberToWords(num % 10000000) : "");

//   if (num === 0) return "Zero";
//   else if (num < 20) return getOnes(num);
//   else if (num < 100) return getTens(num);
//   else if (num < 1000) return getHundreds(num);
//   else if (num < 100000) return getThousands(num);
//   else if (num < 10000000) return getLakhs(num);
//   else if (num <= 1000000000) return getCrores(num);
//   else return "Number too large";
// }

// rl.question("Please enter a number: ", (answer) => {
//   const number = parseInt(answer, 10); // Convert input to a number
//   if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
//   } else {
//     const result = numberToWords(number);
//     console.log(`You entered: ${result}`);
//   }
//   rl.close();
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function numberToWords(num) {
//   const ones = [
//     "",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//     "Ten",
//     "Eleven",
//     "Twelve",
//     "Thirteen",
//     "Fourteen",
//     "Fifteen",
//     "Sixteen",
//     "Seventeen",
//     "Eighteen",
//     "Nineteen",
//   ];

//   const tens = [
//     "",
//     "",
//     "Twenty",
//     "Thirty",
//     "Forty",
//     "Fifty",
//     "Sixty",
//     "Seventy",
//     "Eighty",
//     "Ninety",
//   ];

//   const getOnes = (num) => ones[num];

//   const getTens = (num) =>
//     tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");

//   const getHundreds = (num) =>
//     ones[Math.floor(num / 100)] +
//     " Hundred" +
//     (num % 100 !== 0 ? " and " + numberToWords(num % 100) : "");

//   const getThousands = (num) =>
//     numberToWords(Math.floor(num / 1000)) +
//     " Thousand" +
//     (num % 1000 !== 0 ? " " + numberToWords(num % 1000) : "");

//   const getLakhs = (num) =>
//     numberToWords(Math.floor(num / 100000)) +
//     " Lakh" +
//     (num % 100000 !== 0 ? " " + numberToWords(num % 100000) : "");

//   const getCrores = (num) =>
//     numberToWords(Math.floor(num / 10000000)) +
//     " Crore" +
//     (num % 10000000 !== 0 ? " " + numberToWords(num % 10000000) : "");

//   if (num === 0) return "Zero";
//   else if (num < 20) return getOnes(num);
//   else if (num < 100) return getTens(num);
//   else if (num < 1000) return getHundreds(num);
//   else if (num < 100000) return getThousands(num);
//   else if (num < 10000000) return getLakhs(num);
//   else if (num <= 1000000000) return getCrores(num);
//   else return "Number too large";
// }

// Reading input from the console
rl.question("Please enter a number: ", (answer) => {
  console.log("answer: ", answer);
  // const number = parseInt(answer, 10); // Convert input to a number
  // if (isNaN(number)) {
  //   console.log("Invalid input. Please enter a valid number.");
  // } else {
  //   const result = numberToWords(number);
  //   console.log(`You entered: ${result}`);
  // }
  rl.close();
});
