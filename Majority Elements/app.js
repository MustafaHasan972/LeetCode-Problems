/**
 * @param {number[]} nums - An array of integers.
 * @return {number} - Returns the majority element in the array.
 */
var majorityElement = function (nums) {
  // Initialize variables to keep track of the current candidate and its count.
  let count = 0;
  let candidate = 0;

  // Iterate through the array.
  for (let num of nums) {
    // If the count is zero, set the current element as the candidate.
    if (count === 0) {
      candidate = num;
    }

    // If the current element matches the candidate, increment the count.
    if (candidate === num) {
      count += 1;
    } else {
      // If the current element is different from the candidate, decrement the count.
      count -= 1;
    }
  }

  // The 'candidate' variable now holds the majority element.
  return candidate;
};
