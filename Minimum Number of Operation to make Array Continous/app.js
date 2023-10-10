/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const maxPossibleLength = nums[n - 1] - nums[0] + 1;

  let minOperations = n - maxPossibleLength;

  for (let right = 1, left = 0; right < n; right++) {
    const currentLength = right - left + 1;
    const elementsToRemove = currentLength - 1;
    let m = nums[right] - nums[left] + 1;

    if (m > currentLength) {
      minOperations = Math.min(minOperations, elementsToRemove);
      left++;
    }
  }

  return minOperations;
};

console.log(minOperations([4, 2, 2, 2, 4, 4, 2, 2]));
