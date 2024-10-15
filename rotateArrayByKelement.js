// var rotate = function (nums, k) {
//   k = k % nums.length; // Effective rotation count
//   console.log("k: ", k);
//   if (k === 0) {
//     return nums;
//   }
//   // Slice the array and concatenate
//   return nums.slice(-k).concat(nums.slice(0, nums.length - k));
// };

function rotate(nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k > n

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the rest (from k to end)
  reverse(k, n - 1);
}

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
let nums = [-1, -100, 3, 99];
let k = 2;
let rotatedArray = rotate(nums, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]

// reverse

let str = "SHADAN";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log("reversedStr: ", reversedStr.toUpperCase());
