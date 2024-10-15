var containsDuplicate = function (nums) {
  let duplicateElement = [];
  let seen = new Set(); // Create a new set to track seen elements

  for (let num of nums) {
    if (seen.has(num)) {
      console.log("duplicate element found", num);
      duplicateElement.push(num);
      //    return true;
    }
    seen.add(num); // Add the number to the set if it's not seen before
  }
  console.log("duplicate element found", duplicateElement);

  return false;
};
debugger
nums = [3, 1, 4, 5, 3, 1, 8, 4, 9];
containsDuplicate(nums);
// git clone https://github.com/Shadan/Leetcode-Problem
// $ git config --global user.name "Sha"
// $ git config --global user.email ksha