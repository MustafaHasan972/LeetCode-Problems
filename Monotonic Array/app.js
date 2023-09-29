/**
 * Determines whether an array of numbers is monotonic.
 * A monotonic array is either entirely non-increasing or non-decreasing.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @return {boolean} - Returns true if the array is monotonic, false otherwise.
 */
var isMonotonic = function (nums) {
  // Initialize variables to track if the array is increasing or decreasing
  let isIncreasing = true;
  let isDecreasing = true;

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current number is greater than the next number,
    // it means the array is not increasing
    if (nums[i] > nums[i + 1]) {
      isIncreasing = false;
    }
    // If the current number is less than the next number,
    // it means the array is not decreasing
    else if (nums[i] < nums[i + 1]) {
      isDecreasing = false;
    }
  }

  // Return true if the array is either increasing or decreasing,
  // otherwise return false
  return isIncreasing || isDecreasing;
};

console.log(isMonotonic([1, 2, 3, 4]));
