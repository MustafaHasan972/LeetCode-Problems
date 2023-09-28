# Sort Array by Parity

This JavaScript code defines a function `sortArrayByParity` that takes an array of integers as input and returns a new array with even numbers followed by odd numbers while maintaining their relative order. The code creates two separate arrays, one for even numbers and one for odd numbers, and then concatenates them to create the final sorted array. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `sortArrayByParity` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `sortArrayByParity` function with an array of integers as an argument.

```javascript
const nums = [3, 1, 2, 4];
const result = sortArrayByParity(nums);
```

3. The function will return a new array with even numbers followed by odd numbers while maintaining their relative order.

```javascript
console.log(`Sorted Array: [${result.join(", ")}]`);
```

## Function Description

The `sortArrayByParity` function is defined as follows:

```javascript
/**
 * Sorts an array of integers by moving even numbers to the front followed by odd numbers.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number[]} The sorted array with even numbers followed by odd numbers.
 */
var sortArrayByParity = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an array of integers `nums` as input and returns a new array with even numbers followed by odd numbers while preserving their relative order.

## Algorithm Explanation

The code follows a simple algorithm to sort the input array based on parity (even or odd):

1. Initialize two empty arrays, `even` and `odd`, to store even and odd numbers, respectively.

2. Iterate through the elements of the input array `nums` using a `for...of` loop.

3. For each element `n` in `nums`, check if it is even by using the modulo operator `%`. If `n % 2 === 0`, it is even and should be added to the `even` array. Otherwise, it is odd and should be added to the `odd` array.

4. After processing all elements in `nums`, you have two separate arrays, `even` and `odd`, each containing elements of their respective parity.

5. Use the `concat` method to concatenate the `even` array followed by the `odd` array. This creates a new array with even numbers followed by odd numbers while maintaining their relative order.

6. Return the sorted array as the result.

## Example

Here's an example of how to use the `sortArrayByParity` function:

```javascript
const nums = [3, 1, 2, 4];
const result = sortArrayByParity(nums);
console.log(`Sorted Array: [${result.join(", ")}]`);
```

In this example, the function would return `[2, 4, 3, 1]` because even numbers (2 and 4) are sorted first, followed by odd numbers (3 and 1), while preserving their relative order within each group.
