/**
 * @param {number[]} nums - An array of integers.
 * @param {number} val - The value to be removed from the array.
 * @return {number} - Returns the new length of the array after removing all occurrences of 'val'.
 */
var removeElement = function (nums, val) {
  // Initialize a counter to keep track of the elements in the modified array.
  let count = 0;

  // Iterate through the array.
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is not equal to the value to be removed ('val').
    if (nums[i] !== val) {
      // If the current element is not 'val', update the array by assigning it to
      // the 'count' position in the array. This effectively removes 'val' from the
      // modified part of the array.
      nums[count++] = nums[i];
    }
  }

  // 'count' now represents the new length of the modified array after removing 'val'.
  return count;
};
