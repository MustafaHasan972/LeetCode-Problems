# Majority Elements in JavaScript

This JavaScript code defines a function `majorityElement` that finds the majority elements in an array of numbers. A majority element is defined as an element that appears more than ⌊n / 3⌋ times, where n is the length of the array. The code uses a modified version of the Boyer-Moore Voting Algorithm to efficiently find the majority elements. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `majorityElement` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create an array `nums` containing the numbers in which you want to find the majority elements.

3. Call the `majorityElement` function with the `nums` array as an argument.

```javascript
const nums = [3, 2, 3];
const result = majorityElement(nums);
```

4. The function will return an array of majority elements found in the `nums` array.

```javascript
console.log(`Majority Elements: ${result}`);
```

## Function Description

The `majorityElement` function is defined as follows:

```javascript
/**
 * Finds the majority elements in an array of numbers.
 *
 * @param {number[]} nums - The array of numbers.
 * @return {number[]} - An array containing the majority elements.
 */
var majorityElement = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes one argument:

- `nums`: The array of numbers in which to find the majority elements.

The function returns an array containing the majority elements found in the `nums` array.

## Algorithm Explanation

The code uses a modified Boyer-Moore Voting Algorithm to find the majority elements. Here's how the algorithm works:

1. Initialize four variables: `candidate1`, `candidate2`, `count1`, and `count2` to keep track of two potential majority candidates and their respective counts.

2. Iterate through the `nums` array using a `for...of` loop.

3. For each element `num` in the array:

   - If `num` is equal to `candidate1`, increment `count1` by `1`.
   - Else if `num` is equal to `candidate2`, increment `count2` by `1`.
   - Else if `count1` is `0`, assign `num` to `candidate1` and set `count1` to `1`.
   - Else if `count2` is `0`, assign `num` to `candidate2` and set `count2` to `1`.
   - Else, decrement both `count1` and `count2` by `1`.

   The idea here is to keep track of two potential majority candidates and their counts. When a candidate's count reaches `0`, it means that the candidate does not dominate the remaining part of the array, so we switch to a new candidate.

4. After iterating through the entire array, we need to validate the candidates by counting their occurrences in the original array.

5. Count the occurrences of `candidate1` and `candidate2` in the `nums` array to determine if they are indeed majority elements.

6. If the count of `candidate1` is greater than `nums.length / 3`, add it to the result array.
7. If the count of `candidate2` is greater than `nums.length / 3`, add it to the result array.

8. Return the result array containing the majority elements.

## Example

Here's an example of how to use the `majorityElement` function:

```javascript
const nums = [3, 2, 3];
const result = majorityElement(nums);

console.log(`Majority Elements: ${result}`);
```

In this example, the `majorityElement` function is called with the `nums` array `[3, 2, 3]`. After processing, the function returns an array containing the majority elements, which is `[3]`.
