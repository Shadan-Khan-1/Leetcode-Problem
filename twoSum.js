const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform the two sum operation
function twoSum(nums, target) {
    const map = {}; // Object to store the indices of the numbers

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Return the indices
        }

        // Otherwise, store the index of the current number in the map
        map[nums[i]] = i;
    }

    // Return an empty array if no solution is found
    return [];
}

// Get user input in Node.js
rl.question('Enter the array of numbers (comma separated): ', (numsInput) => {
    rl.question('Enter the target sum: ', (targetInput) => {
        // Convert the input string to an array of numbers
        const nums = numsInput.split(',').map(Number);
        const target = Number(targetInput);

        // Call the twoSum function and display the result
        const result = twoSum(nums, target);

        if (result.length > 0) {
            console.log(`Indices of the two numbers that add up to the target are: ${result}`);
        } else {
            console.log("No solution found.");
        }

        // Close the readline interface
        rl.close();
    });
});
