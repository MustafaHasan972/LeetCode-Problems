/**
 * Finds and returns the first duplicate number in the given array.
 *
 * @param {array} nums - An array of numbers to search for duplicates.
 * @return {number|undefined} The first duplicate number found, or undefined if no duplicates are found.
 */
function findDuplicate(nums) {
  // Sort the array in ascending order
  const sorted = nums.sort((a, b) => a - b);

  // Iterate through the sorted array
  for (let i = 0; i < sorted.length; i++) {
    // Check if the current number is equal to the next number
    if (sorted[i] === sorted[i + 1]) {
      // If a duplicate is found, return the duplicate number
      return sorted[i];
    }
  }

  // If no duplicate is found, return undefined
  return undefined;
}
