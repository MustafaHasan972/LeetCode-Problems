/**
 * @param {number[]} nums - An array of integers.
 * @return {number} - Returns the minimum number of operations needed to make the elements unique.
 */
function minOperations(nums) {
  const n = nums.length; // Get the length of the input array 'nums'.
  const uniqueSet = new Set(); // Create a Set to store unique elements.
  let maxContinuous = 0; // Initialize a variable to track the maximum continuous subarray length.

  // Add all elements of 'nums' to the Set 'uniqueSet' to remove duplicates.
  for (let num of nums) {
    uniqueSet.add(num);
  }

  // Convert the Set 'uniqueSet' back to an array and sort it in ascending order.
  const uniqueNums = Array.from(uniqueSet).sort((a, b) => a - b);

  // Use two pointers approach to find the maximum continuous subarray length.
  for (let left = 0, right = 0; right < uniqueNums.length; right++) {
    // While the difference between the elements at 'right' and 'left' is greater than 'n - 1',
    // increment 'left' to reduce the subarray length.
    while (uniqueNums[right] - uniqueNums[left] > n - 1) {
      left++;
    }
    // Update 'maxContinuous' with the maximum subarray length.
    maxContinuous = Math.max(maxContinuous, right - left + 1);
  }

  // The minimum number of operations is the difference between the total number of elements 'n'
  // and the maximum continuous subarray length.
  return n - maxContinuous;
}
