/**
 * @param {number[]} nums - A sorted array of integers.
 * @param {number} target - The target element to search for.
 * @return {number[]} - Returns an array containing the first and last positions of the target element.
 */
var searchRange = function (nums, target) {
  // Initialize variables to store the first and last positions (default to -1).
  let first = -1;
  let last = -1;

  // Initialize left and right pointers for the binary search.
  let left = 0;
  let right = nums.length - 1;

  // First Binary Search: Find the first occurrence of the target element.
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      // If the element at the mid position matches the target,
      // update 'first' and search for the first occurrence to the left.
      first = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      // If the element at the mid position is less than the target,
      // move the left pointer to the right half.
      left = mid + 1;
    } else {
      // If the element at the mid position is greater than the target,
      // move the right pointer to the left half.
      right = mid - 1;
    }
  }

  // Reset left and right pointers for the second binary search.
  left = 0;
  right = nums.length - 1;

  // Second Binary Search: Find the last occurrence of the target element.
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      // If the element at the mid position matches the target,
      // update 'last' and search for the last occurrence to the right.
      last = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      // If the element at the mid position is less than the target,
      // move the left pointer to the right half.
      left = mid + 1;
    } else {
      // If the element at the mid position is greater than the target,
      // move the right pointer to the left half.
      right = mid - 1;
    }
  }

  // Return an array containing the first and last positions.
  return [first, last];
};

// Test the function with an example input array and target element.
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4] (8 appears first at index 3 and last at index 4)
