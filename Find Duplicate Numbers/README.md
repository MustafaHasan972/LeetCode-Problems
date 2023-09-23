# Find Duplicate Number in an Array

This JavaScript code defines a function `findDuplicate` that finds and returns a duplicate number in an array of integers. The code first sorts the array in ascending order and then iterates through it to identify and return the duplicate element. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `findDuplicate` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Import or require the function in your project.

```javascript
// Import the findDuplicate function
const findDuplicate = require("./findDuplicate.js"); // Modify the path accordingly
```

3. Create an array `nums` containing the integers among which you want to find a duplicate.

```javascript
const nums = [1, 3, 4, 2, 2];
```

4. Call the `findDuplicate` function with the array as an argument.

```javascript
const result = findDuplicate(nums);
```

5. The function will return the duplicate number found in the array.

```javascript
console.log(`Duplicate number in the array: ${result}`);
```

## Function Description

The `findDuplicate` function is defined as follows:

```javascript
/**
 * Finds and returns a duplicate number in an array of integers.
 *
 * @param {number[]} nums - An array of integers.
 * @return {number} The duplicate number found in the array.
 */
var findDuplicate = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an array of integers `nums` as input and returns a single integer, which is the duplicate number found in the array.

## Algorithm Explanation

The code implements the algorithm as follows:

1. Sort the input array `nums` in ascending order using the `sort()` method with a custom comparison function `(a, b) => a - b`. Sorting the array allows duplicate elements to be adjacent to each other.

2. Iterate through the sorted array using a `for` loop. During each iteration, compare the current element at index `i` with the next element at index `i + 1`.

3. If the current element `nums[i]` is equal to the next element `nums[i + 1]`, it means a duplicate is found, so return `nums[i]` as the result.

4. If no duplicate is found after iterating through the entire array, return `undefined` to indicate that there are no duplicates in the array.

## Example

Here's an example of how to use the `findDuplicate` function:

```javascript
const nums = [1, 3, 4, 2, 2];
const result = findDuplicate(nums);
console.log(`Duplicate number in the array: ${result}`);
```

In this example, the function would return `2` because `2` is the duplicate number found in the array.

Feel free to use this code snippet in your JavaScript projects to find a duplicate number in an array of integers.
