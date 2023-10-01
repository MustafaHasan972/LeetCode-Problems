/**
 * Merge two sorted arrays nums1 and nums2 into nums1 in-place.
 *
 * @param {number[]} nums1 - The first array containing elements to be merged.
 * @param {number} m - The number of elements in nums1 (excluding extra 0s).
 * @param {number[]} nums2 - The second array containing elements to be merged.
 * @param {number} n - The number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  // Loop through nums1 starting from the end (m+n-1) to the beginning (m).
  for (let i = m; i < m + n; i++) {
    // Assign the value from nums2 at the corresponding position in nums1.
    nums1[i] = nums2[i - m];
  }

  // Sort nums1 in ascending order.
  nums1.sort((a, b) => a - b);

  // There is no need to return anything since nums1 is modified in-place.
};

// Example usage:
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
