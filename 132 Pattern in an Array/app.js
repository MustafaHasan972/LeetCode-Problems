/**
 * Finds the presence of a "132" pattern in the given array.
 *
 * @param {number[]} nums - The input array to search for the pattern.
 * @return {boolean} True if the "132" pattern is found, false otherwise.
 */
function find132Pattern(nums) {
  // Check if the length of the input array is less than 3
  // If so, return false since it's not possible to have a 132 pattern
  const n = nums.length;
  if (n < 3) {
    return false;
  }

  // Create an array to store the minimum value on the left of each element
  let minLeft = new Array(n);
  minLeft[0] = nums[0];

  // Iterate through the input array starting from the second element
  // and update the minLeft array with the minimum value on the left
  for (let i = 1; i < n; i++) {
    minLeft[i] = Math.min(nums[i], minLeft[i - 1]);
  }

  // Create a stack to store potential "3" values
  let stack = [];

  // Iterate through the input array in reverse order
  // and check for the presence of a "2" value
  for (let j = n - 1; j >= 0; j--) {
    // If the current element is greater than the minimum value on the left,
    // it could be a potential "2" value
    if (nums[j] > minLeft[j]) {
      // Remove any elements from the stack that are less than or equal to the minimum value on the left
      while (stack.length > 0 && stack[stack.length - 1] <= minLeft[j]) {
        stack.pop();
      }

      // If there is a remaining element in the stack that is less than the current element,
      // we have found a valid "132" pattern
      if (stack.length > 0 && stack[stack.length - 1] < nums[j]) {
        return true;
      }

      // Add the current element to the stack as a potential "3" value
      stack.push(nums[j]);
    }
  }

  // No "132" pattern found
  return false;
}

console.log(find132Pattern([1, 2, 3, 4]));
console.log(find132Pattern([3, 1, 4, 2]));
