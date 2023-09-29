/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      isIncreasing = false;
    } else if (nums[i] < nums[i + 1]) {
      isDecreasing = false;
    }
  }
  return isIncreasing || isDecreasing;
};

console.log(isMonotonic([1, 2, 3, 4]));
