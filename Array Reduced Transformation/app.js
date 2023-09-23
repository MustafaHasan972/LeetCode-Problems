/**
 * Reduce the given array by applying the provided function to each element.
 *
 * @param {number[]} nums - The array to be reduced.
 * @param {Function} fn - The function that will be applied to each element of the array.
 * @param {number} init - The initial value for the reduction.
 * @returns {number} - The final reduced value.
 */
function reduce(nums, fn, init) {
  // Use the reduce() method on the nums array to apply the fn function to each element.
  // Start the reduction with the init value.
  return nums.reduce(fn, init);
}
