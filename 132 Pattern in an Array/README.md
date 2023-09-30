# Finding 132 Pattern in an Array

This JavaScript code defines a function `find132pattern` that checks whether a given array contains a "132 pattern." A 132 pattern consists of three integers in the array where the middle element is greater than the first element and less than the third element. The code utilizes a stack to efficiently identify such patterns within the array. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `find132pattern` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `find132pattern` function with an array of numbers (`nums`) as an argument.

```javascript
const nums = [1, 2, 3, 4];
const result = find132pattern(nums);
```

3. The function will return `true` if a "132 pattern" is found in the array, and `false` otherwise.

```javascript
console.log(`Contains 132 Pattern: ${result}`);
```

## Function Description

The `find132pattern` function is defined as follows:

```javascript
/**
 * Checks if the given array contains a "132 pattern."
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {boolean} True if a "132 pattern" is found; otherwise, false.
 */
function find132pattern(nums) {
  // ... (code implementation as described in the code snippet)
}
```

The function takes an array of numbers (`nums`) as input and returns `true` if a "132 pattern" is found in the array; otherwise, it returns `false`.

## Algorithm Explanation

The code employs a stack-based approach to identify a "132 pattern" within the array efficiently. Here's how the algorithm works:

1. Check if the length of the input array `nums` is less than 3. If it is, return `false` because a "132 pattern" cannot exist with fewer than three elements.

2. Create an array `minLeft` of the same length as `nums` to store the minimum element to the left of each element in the array.

   - Initialize `minLeft[0]` with the first element of `nums`.

   - Iterate through the elements of `nums` from left to right, and for each element at index `i`, set `minLeft[i]` to the minimum value between `minLeft[i - 1]` (the minimum to the left of the previous element) and `nums[i]`.

3. Initialize an empty stack called `stack` to keep track of potential candidates for the third element in the "132 pattern."

4. Iterate through the elements of `nums` from right to left (starting from the last element).

   - For each element `nums[j]`, check if it is greater than the minimum to its left (`minLeft[j]`).

   - If `nums[j]` is greater than `minLeft[j]`, it is a potential candidate for the third element in the "132 pattern."

   - While the `stack` is not empty and the top element of the stack (`stack[stack.length - 1]`) is less than or equal to `minLeft[j]`, pop elements from the stack. This step ensures that the candidates in the stack are greater than the minimum to the left (`minLeft[j]`).

   - After the stack contains only elements greater than `minLeft[j]`, check if the top element of the stack is less than `nums[j]`. If it is, return `true` because a "132 pattern" is found.

   - Otherwise, push `nums[j]` onto the stack as a potential candidate for future "132 patterns."

5. If no "132 pattern" is found during the iteration, return `false`.

## Example

Here's an example of how to use the `find132pattern` function:

```javascript
const nums = [3, 1, 4, 2];
const result = find132pattern(nums);
console.log(`Contains 132 Pattern: ${result}`);
```

In this example, the function would return `true` because the input array `[3, 1, 4, 2]` contains a "132 pattern" with the elements `1`, `4`, and `2`.
