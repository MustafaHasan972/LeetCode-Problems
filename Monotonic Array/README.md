# Monotonic Array Check

This JavaScript code defines a function `isMonotonic` that checks if a given array of numbers is monotonic, meaning it is either entirely non-increasing or non-decreasing. The code uses two boolean variables to track whether the array is increasing or decreasing. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `isMonotonic` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `isMonotonic` function with an array of numbers (`nums`) as an argument.

```javascript
const nums = [1, 2, 3, 4];
const result = isMonotonic(nums);
```

3. The function will return `true` if the array is monotonic (non-decreasing or non-increasing) and `false` otherwise.

```javascript
console.log(`Is Monotonic: ${result}`);
```

## Function Description

The `isMonotonic` function is defined as follows:

```javascript
/**
 * Checks if a given array of numbers is monotonic (non-decreasing or non-increasing).
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {boolean} True if the array is monotonic; otherwise, false.
 */
var isMonotonic = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an array of numbers (`nums`) as input and returns `true` if the array is monotonic (non-decreasing or non-increasing) and `false` otherwise.

## Algorithm Explanation

The code uses a straightforward approach to determine whether the array is monotonic. It employs two boolean variables, `isIncreasing` and `isDecreasing`, to track whether the array is increasing or decreasing.

Here's how the algorithm works:

1. Initialize `isIncreasing` and `isDecreasing` to `true`.

2. Iterate through the elements of the array `nums` using a `for` loop. For each element at index `i`, compare it with the next element at index `i + 1`.

3. If `nums[i]` is greater than `nums[i + 1]`, set `isIncreasing` to `false`. This indicates that the array is not increasing.

4. If `nums[i]` is less than `nums[i + 1]`, set `isDecreasing` to `false`. This indicates that the array is not decreasing.

5. Continue iterating through the array until all adjacent element comparisons are made.

6. After completing the loop, check if either `isIncreasing` or `isDecreasing` is `true`. If either of them is `true`, it means that the array is either increasing or decreasing, and therefore, it is monotonic.

7. Return `true` if either `isIncreasing` or `isDecreasing` is `true`. Otherwise, return `false`.

## Example

Here's an example of how to use the `isMonotonic` function:

```javascript
const nums = [1, 2, 3, 4];
const result = isMonotonic(nums);
console.log(`Is Monotonic: ${result}`);
```

In this example, the function would return `true` because the input array `[1, 2, 3, 4]` is monotonic, as it is non-decreasing.
