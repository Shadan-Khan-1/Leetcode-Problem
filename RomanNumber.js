// const readline = require("readline");

// // Create an interface for reading input from the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function romanToInt(s) {
//   const romanMap = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = romanMap[s[i]];
//     const next =  romanMap[s[i + 1]];

//     // If the next value is larger, subtract the current value
//     if (next && current < next) {
//       total -= current;
//     } else {
//       // Otherwise, add the current value
//       total += current;
//     }
//   }

//   return total;
// }

// // Get user input for the Roman numeral
// rl.question("Enter a Roman numeral: ", (input) => {
//   const result = romanToInt(input.toUpperCase()); // Convert to uppercase to handle lowercase input
//   console.log(`The integer value of ${input} is: ${result}`);

//   // Close the readline interface
//   rl.close();
// });





// Roman numeral to Number converter

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert integer to Roman numeral
function intToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    // Iterate through the numeral list
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol; // Append symbol
            num -= romanNumerals[i].value; // Decrease the number
        }
    }

    return roman;
}

// Get user input in Node.js
rl.question('Enter an integer: ', (input) => {
    const number = parseInt(input, 10);

    if (isNaN(number) || number <= 0 || number > 3999) {
        console.log('Please enter a valid number between 1 and 3999.');
    } else {
        const result = intToRoman(number);
        console.log(`The Roman numeral representation of ${number} is: ${result}`);
    }

    // Close the readline interface
    rl.close();
});
