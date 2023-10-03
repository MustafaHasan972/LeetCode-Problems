/**
 * @param {number[]} nums - An array of sorted integers with possible duplicates.
 * @return {number} - Returns the new length of the array after removing duplicates with at most 2 occurrences.
 */
var removeDuplicates = function (nums) {
  // Initialize a pointer 'j' to 2 since we can have at most 2 occurrences of duplicates.
  let j = 2;

  // Iterate through the array using a pointer 'i'.
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element 'nums[i]' is different from the element two positions back.
    if (nums[i] !== nums[j - 2]) {
      // If different, update 'nums[j]' with the unique element and increment 'j'.
      nums[j++] = nums[i];
    }
  }

  // 'j' now represents the new length of the modified array after removing duplicates with at most 2 occurrences.
  return j;
};

// Test the function with example arrays and print the results.
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // Output: 5 (length of modified array)
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 4, 4])); // Output: 8 (length of modified array)
