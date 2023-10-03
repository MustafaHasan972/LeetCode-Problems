# Removing Duplicates from an Array

This JavaScript code defines a function `removeDuplicates` that removes duplicate elements from a sorted array `nums` in-place and returns the new length of the array. The code uses two pointers, one to keep track of the unique elements and another to iterate through the original array. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `removeDuplicates` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create a sorted array `nums` from which you want to remove duplicate elements.

3. Call the `removeDuplicates` function with the `nums` array as an argument.

```javascript
const nums = [1, 1, 2];
const result = removeDuplicates(nums);
```

4. The function will return the new length of the modified array, and the duplicate elements will be removed from the `nums` array in-place.

```javascript
console.log(`New length of the array: ${result}`);
console.log(`Modified array: ${nums}`);
```

## Function Description

The `removeDuplicates` function is defined as follows:

```javascript
/**
 * Removes duplicate elements from a sorted array in-place and returns the new length of the array.
 *
 * @param {number[]} nums - The sorted array from which to remove duplicates.
 * @return {number} - The new length of the modified array.
 */
var removeDuplicates = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes one argument:

- `nums`: The sorted array from which duplicate elements will be removed.

The function modifies the `nums` array in-place by removing duplicate elements and returns the new length of the modified array.

## Algorithm Explanation

The code uses a two-pointer approach to remove duplicate elements from the sorted `nums` array. Here's how the algorithm works:

1. Initialize two pointers, `i` and `j`, both set to 0. The pointer `i` will keep track of the unique elements, and the pointer `j` will iterate through the original array.

2. Use a `for` loop to iterate through the elements of the `nums` array. The loop runs from index 0 to the last index of the array (`j`).

3. In each iteration, compare `nums[i]` and `nums[j]`. If they are not equal, it means a new unique element has been found. Increment the `i` pointer by 1 and update `nums[i]` with the value of `nums[j]`. This step effectively moves the unique elements to the beginning of the array.

4. Continue this process until all elements have been processed.

5. After processing all elements, return the value `i + 1`, which represents the new length of the modified array. This length includes the unique elements at the beginning of the array, and any remaining elements after index `i` are ignored.

## Example

Here's an example of how to use the `removeDuplicates` function:

```javascript
const nums = [1, 1, 2];
const result = removeDuplicates(nums);

console.log(`New length of the array: ${result}`);
console.log(`Modified array: ${nums}`);
```

In this example, the `removeDuplicates` function is called with the sorted `nums` array `[1, 1, 2]`. After processing, the function returns the new length of the modified array, which is `2`. The duplicate elements are removed from the `nums` array in-place, resulting in `[1, 2]`. The output is displayed as "New length of the array: 2" and "Modified array: 1,2."
