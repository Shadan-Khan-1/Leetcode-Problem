// // subarray-sum-equals-k

// function subarray(num, k) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   console.log("sum: ", sum);
//   return sum;
// }
let num = [1, 2, 3];
// let num = [1,1,1];
let k = 3;
subarray(num, k);

function subarray(nums, k) {
  let count = 0;
  let sum = 0;
  let sumMap = new Map();
  sumMap.set(0, 1); // To account for subarrays that sum to k starting from the beginning

  for (let num of nums) {
    sum += num;

    // If (sum - k) exists in the map, we found a subarray summing to k
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
    }

    // Update the sumMap with the current sum
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  console.log("sum: ", sum);
  console.log("count: ", count);
  return count;
}
