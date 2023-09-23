# Median of Merged Sorted Arrays

This JavaScript code snippet defines a function `findMedianSortedArrays` that calculates the median of two sorted arrays `nums1` and `nums2` when merged. The median is the middle value of a sorted list or the average of the two middle values if the list has an even number of elements. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `findMedianSortedArrays` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Import or require the function in your project.

```javascript
// Import the findMedianSortedArrays function
const findMedianSortedArrays = require("./findMedianSortedArrays.js"); // Modify the path accordingly
```

3. Create two sorted arrays, `nums1` and `nums2`, that you want to find the median for.

```javascript
const nums1 = [1, 3];
const nums2 = [2];
```

4. Call the `findMedianSortedArrays` function with the two arrays as arguments.

```javascript
const result = findMedianSortedArrays(nums1, nums2);
```

5. The function will return the median of the merged and sorted arrays, which you can then use as needed.

```javascript
console.log(`Median of merged sorted arrays: ${result}`);
```

## Function Description

The `findMedianSortedArrays` function is defined as follows:

```javascript
/**
 * Finds the median of the merged sorted arrays nums1 and nums2.
 *
 * @param {number[]} nums1 - The first sorted array.
 * @param {number[]} nums2 - The second sorted array.
 * @return {number} The median of the merged sorted arrays.
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes two sorted arrays, `nums1` and `nums2`, as input and returns a floating-point number representing the median of the merged and sorted arrays.

## Algorithm Explanation

The code implements the algorithm as follows:

1. Merge the two input arrays, `nums1` and `nums2`, using the `concat()` method. This results in a single array containing all elements from both input arrays.

2. Sort the merged array in ascending order using the `sort()` method.

3. Find the middle index of the merged array by dividing its length by 2 and using `Math.floor()` to round down to the nearest integer. This index corresponds to the middle element (or the left-middle element if the length is even).

4. Check if the length of the merged array is even by using the modulo operator `%`. If the length is even, calculate the median by averaging the two middle elements (at indices `mid` and `mid - 1`). If the length is odd, simply return the middle element (at index `mid`).

5. Return the calculated median as the result.

## Example

Here's an example of how to use the `findMedianSortedArrays` function:

```javascript
const nums1 = [1, 3];
const nums2 = [2];
const result = findMedianSortedArrays(nums1, nums2);
console.log(`Median of merged sorted arrays: ${result}`);
```

In this example, the function would return `2.0` because the merged and sorted array is `[1, 2, 3]`, and the median is the average of the two middle elements, which are `2` and `3`.

Feel free to use this code snippet in your JavaScript projects to find the median of merged sorted arrays.
