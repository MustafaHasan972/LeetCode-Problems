/**
 * Find the minimum number of operations to make the sum of a subarray of nums equal to x.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} x - The target sum.
 * @return {number} The minimum number of operations.
 */
var minOperations = function (nums, x) {
  // Calculate the total sum of all numbers in the nums array
  const total = nums.reduce((acc, curr) => acc + curr, 0);

  // Calculate the target sum by subtracting x from the total sum
  const target = total - x;

  // Initialize variables for left pointer, right pointer, current sum, and minimum operations
  let left = 0;
  let right = 0;
  let currSum = 0;
  let minOps = Infinity;

  // Iterate through the nums array using the right pointer
  for (right; right < nums.length; right++) {
    // Add the current number to the current sum
    currSum += nums[right];

    // While the current sum is greater than the target and the left pointer is less than or equal to the right pointer
    while (currSum > target && left <= right) {
      // Subtract the number at the left pointer from the current sum and move the left pointer to the right
      currSum = currSum - nums[left];
      left++;
    }

    // If the current sum is equal to the target, update the minimum operations if necessary
    if (currSum === target) {
      minOps = Math.min(minOps, nums.length - (right - left + 1));
    }
  }

  // If the minimum operations is still set to Infinity, return -1. Otherwise, return the minimum operations.
  if (minOps === Infinity) {
    return -1;
  } else {
    return minOps;
  }
};
