/**
 * @param {number[]} nums1 - The first array of integers.
 * @param {number[]} nums2 - The second array of integers.
 * @return {number} - Returns the maximum dot product of two subarrays.
 */
var maxDotProduct = function (nums1, nums2) {
  // Get the lengths of both input arrays.
  const m = nums1.length;
  const n = nums2.length;

  // Create a 2D dynamic programming array 'dp' with dimensions (m+1) x (n+1).
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Populate the 'dp' array using dynamic programming.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Calculate the maximum dot product up to the current position (i, j).
      dp[i][j] = Math.max(
        nums1[i - 1] * nums2[j - 1], // Current element product.
        dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1], // Include the current element.
        dp[i - 1][j], // Exclude current element from nums2.
        dp[i][j - 1] // Exclude current element from nums1.
      );
    }
  }

  // The result is stored in the bottom-right cell of the 'dp' array.
  return dp[m][n];
};

// Test the function with example input arrays and print the result.
console.log(maxDotProduct([1, 2, -2, 5], [3, 0, -6])); // Output: 18 (The subarrays are [2, 5] and [3, 0], and their dot product is 2*3 + 5*0 = 6 + 0 = 6.)
