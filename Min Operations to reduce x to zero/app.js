/**
 * Find the minimum number of operations to make the sum of a subarray of nums equal to x.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} x - The target sum.
 * @return {number} The minimum number of operations.
 */
var minOperations = function (nums, x) {
  const total = nums.reduce((acc, curr) => acc + curr, 0);
  const target = total - x;

  let left = 0;
  let right = 0;
  let currSum = 0;
  let minOps = Infinity;
  for (right; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum > target && left <= right) {
      currSum = currSum - nums[left];
      left++;
    }

    if (currSum === target) {
      minOps = Math.min(minOps, nums.length - (right - left + 1));
    }
  }
  if (minOps === Infinity) {
    return -1;
  } else {
    return minOps;
  }
};
