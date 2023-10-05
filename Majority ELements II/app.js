/**
 * @param {number[]} nums - An array of integers.
 * @return {number[]} - Returns an array containing the majority elements (elements that appear more than ⌊n / 3⌋ times).
 */
var majorityElement = function (nums) {
  // Initialize variables for two potential candidates and their respective counts.
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  // First pass through the array to identify potential candidates.
  for (let num of nums) {
    if (candidate1 === num) {
      count1 += 1;
    } else if (candidate2 === num) {
      count2 += 1;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      // Decrement counts if the current number doesn't match any candidate.
      count1 -= 1;
      count2 -= 1;
    }
  }

  // Reset counts for both candidates.
  count1 = 0;
  count2 = 0;

  // Second pass through the array to count the occurrences of the potential candidates.
  for (let num of nums) {
    if (candidate1 === num) {
      count1 += 1;
    } else if (candidate2 === num) {
      count2 += 1;
    }
  }

  // Initialize an array to store the majority elements.
  let result = [];

  // Check if the candidates appear more than ⌊n / 3⌋ times and add them to the result array if so.
  if (count1 > nums.length / 3) {
    result.push(candidate1);
  }
  if (count2 > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
};

// Test the function with an example array and print the result.
console.log(majorityElement([3, 2, 3]));
