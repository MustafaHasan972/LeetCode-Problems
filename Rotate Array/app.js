/**
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The number of steps to rotate the array to the right.
 * @return {void} - Modifies the 'nums' array in-place.
 */
var rotate = function (nums, k) {
  // To handle cases where 'k' is greater than the array length, take the modulus of 'k'.
  k %= nums.length;

  // Define a helper function 'reverse' to reverse the elements in a given range [i, j] in the 'nums' array.
  let reverse = function (i, j) {
    while (i < j) {
      // Swap elements at positions 'i' and 'j'.
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      // Move the pointers 'i' and 'j' towards each other.
      i++;
      j--;
    }
  };

  // Reverse the entire array to shift all elements to the right.
  reverse(0, nums.length - 1);

  // Reverse the first 'k' elements to move them to the end.
  reverse(0, k - 1);

  // Reverse the remaining elements after 'k' to complete the rotation.
  reverse(k, nums.length - 1);
};
