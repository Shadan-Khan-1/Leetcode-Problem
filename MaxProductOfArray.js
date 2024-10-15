
let arrA = [1, 5, 4, 5];
// let arrA = [3, 4, 5, 2];

var maxProduct = function (nums) {
  let sortArr = nums.sort((a, b) => b - a);
//   let length = sortArr.length;
  let product = (sortArr[0] - 1) * (sortArr[1] - 1);
//   let product = (sortArr[length - 1] - 1) * (sortArr[length - 2] - 1);
  console.log("return", product);
};
maxProduct(arrA);
