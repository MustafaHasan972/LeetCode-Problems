# Maximum Dot Product of Two Subsequences

This JavaScript code defines a function `maxDotProduct` that calculates the maximum dot product of two subsequences, where one subsequence is selected from `nums1` and the other from `nums2`. The function returns the maximum dot product. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `maxDotProduct` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `maxDotProduct` function with two arrays, `nums1` and `nums2`, as arguments:

```javascript
const nums1 = [1, 2, -2, 5];
const nums2 = [3, 0, -6];
const result = maxDotProduct(nums1, nums2);
console.log(result); // Output: 18
```

3. After calling the function, it will return the maximum dot product of the two subsequences.

## Function Description

The `maxDotProduct` function is defined as follows:

```javascript
/**
 * Calculates the maximum dot product of two subsequences selected from 'nums1' and 'nums2'.
 *
 * @param {number[]} nums1 - The first array of integers.
 * @param {number[]} nums2 - The second array of integers.
 * @return {number} - Returns the maximum dot product of two subsequences.
 */
const maxDotProduct = function (nums1, nums2) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes two arrays of integers, `nums1` and `nums2`, as arguments and returns the maximum dot product of two subsequences.

## Algorithm Explanation

The `maxDotProduct` function uses dynamic programming to calculate the maximum dot product. Here's how the algorithm works:

1. Get the lengths of the two input arrays, `m` for `nums1` and `n` for `nums2`.

2. Initialize a two-dimensional dynamic programming array `dp` of dimensions `(m + 1) x (n + 1)`.

3. Loop through `i` from `1` to `m` and `j` from `1` to `n`. For each combination of `i` and `j`, calculate the maximum dot product as follows:

   - `dp[i][j]` is the maximum dot product of two subsequences:
     - The dot product of the last elements of `nums1` and `nums2`, i.e., `nums1[i - 1] * nums2[j - 1]`.
     - The maximum dot product of two subsequences that end before `i` and `j`, plus the product of the current elements, i.e., `dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1]`.
     - The maximum dot product of two subsequences that end before `i` and `j`, i.e., `dp[i - 1][j]` and `dp[i][j - 1]`. Choose the maximum of these two.

4. The result is stored in `dp[m][n]`, which represents the maximum dot product of two subsequences.

5. Return the final result as the maximum dot product.

## Example

Here's an example of how to use the `maxDotProduct` function:

```javascript
const nums1 = [1, 2, -2, 5];
const nums2 = [3, 0, -6];
const result = maxDotProduct(nums1, nums2);
console.log(result); // Output: 18
```

In this example, the `maxDotProduct` function is called with two arrays, `nums1` and `nums2`. The function calculates and returns the maximum dot product of two subsequences selected from these arrays, which is `18`.
