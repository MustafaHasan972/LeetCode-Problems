/**
 * @param {number} n - The length of the array.
 * @param {number} m - The maximum value allowed in the array (from 1 to 'm').
 * @param {number} k - The target sum of elements in the array.
 * @return {number} - Returns the number of arrays that satisfy the conditions.
 */
const numOfArrays = function (n, m, k) {
  // Define a constant 'mod' to take the result modulo 1e9 + 7.
  const mod = 1e9 + 7;

  // Initialize dynamic programming arrays and prefix arrays.
  let dp = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
  let prefix = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
  let prevDp = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));
  let prevPrefix = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));

  // Initialize base cases for n=1.
  for (let j = 1; j <= m; j++) {
    prevDp[j][1] = 1;
    prevPrefix[j][1] = j;
  }

  // Loop for each value of 'n'.
  for (let _ = 2; _ <= n; _++) {
    for (let maxNum = 1; maxNum <= m; maxNum++) {
      for (let cost = 1; cost <= k; cost++) {
        // Calculate the current dp value based on the maximum number.
        dp[maxNum][cost] = (maxNum * prevDp[maxNum][cost]) % mod;

        // If both maxNum and cost are greater than 1, add the previous prefix value.
        if (maxNum > 1 && cost > 1) {
          dp[maxNum][cost] =
            (dp[maxNum][cost] + prevPrefix[maxNum - 1][cost - 1]) % mod;
        }

        // Calculate the current prefix sum.
        prefix[maxNum][cost] =
          (prefix[maxNum - 1][cost] + dp[maxNum][cost]) % mod;
      }
    }

    // Update the previous dp and prefix arrays for the next iteration.
    prevDp = dp;
    prevPrefix = prefix;
  }

  // The final result is stored in the prefix array at position [m][k].
  return prefix[m][k];
};
