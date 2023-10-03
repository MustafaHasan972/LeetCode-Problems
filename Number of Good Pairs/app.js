/**
 * @param {number[]} nums - An array of integers.
 * @return {number} - Returns the number of identical pairs in the input array.
 */
var numIdenticalPairs = (nums) => {
  // Initialize a counter to keep track of the number of identical pairs.
  let count = 0;

  // Iterate through the array using two nested loops.
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the elements at positions i and j are equal.
      if (nums[i] === nums[j]) {
        // If they are equal, increment the 'count' to represent an identical pair.
        count++;
      }
    }
  }

  // Return the final count, which represents the number of identical pairs in the array.
  return count;
};

// Test the function with an example array and print the result.
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
