/**
 * @param {number} n - A positive integer.
 * @return {number} - Returns the maximum product when 'n' is broken into positive integers.
 */
var integerBreak = function (n) {
  // Initialize an array 'dp' to store the maximum product for each number from 1 to 'n'.
  let dp = Array(n + 1).fill(0);

  // The maximum product for breaking 1 into positive integers is 1.
  dp[1] = 1;

  // Iterate through the numbers from 2 to 'n'.
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // Calculate the maximum product by considering two cases:
      // 1. Multiply 'j' with (i - j) - breaking 'i' into 'j' and (i - j).
      // 2. Multiply 'j' with the maximum product of (i - j) calculated previously (dp[i - j]).
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }

  // The maximum product for breaking 'n' into positive integers is stored in dp[n].
  return dp[n];
};

// Test the function with example inputs and print the results.
console.log(integerBreak(2)); // Output: 1 (2 can be broken into 1 + 1, and the product is 1)
console.log(integerBreak(10)); // Output: 36 (10 can be broken into 3 + 3 + 4, and the product is 36)
