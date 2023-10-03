/**
 * @param {number[]} nums - An array of sorted integers with possible duplicates.
 * @return {number} - Returns the new length of the array after removing duplicates in-place.
 */
var removeDuplicates = function (nums) {
  // Initialize a pointer 'i' to track the unique elements and set it to the first element.
  let i = 0;

  // Iterate through the array using another pointer 'j'.
  for (let j = 0; j < nums.length; j++) {
    // Check if the element at 'i' and 'j' are different (indicating a new unique element).
    if (nums[i] !== nums[j]) {
      // Increment 'i' to move to the next position and store the unique element there.
      i++;
      nums[i] = nums[j];
    }
  }

  // The value of 'i' represents the new length of the array with duplicates removed,
  // so we add 1 to it to get the correct length.
  return i + 1;
};

// Test the function with an example array and print the result.
console.log(removeDuplicates([1, 1, 2]));
