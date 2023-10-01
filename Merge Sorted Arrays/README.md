# Merging Two Sorted Arrays

This JavaScript code defines a function `merge` that merges two sorted arrays, `nums1` and `nums2`, into the first array `nums1`. The code iterates through the elements of `nums2`, appends them to `nums1`, and then sorts the merged array in ascending order. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `merge` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create two sorted arrays, `nums1` and `nums2`, that you want to merge. Ensure that `nums1` has enough space to accommodate the merged elements.

   - `nums1` should have `m` elements at the beginning, and the rest of the elements should be initialized with zeros. The total length of `nums1` should be `m + n`, where `n` is the length of `nums2`.

3. Call the `merge` function with the following arguments:

   - `nums1`: The first sorted array with additional space for merging.
   - `m`: The number of elements in the initial portion of `nums1`.
   - `nums2`: The second sorted array.
   - `n`: The number of elements in `nums2`.

```javascript
const nums1 = [1, 2, 3, 0, 0, 0]; // Example nums1 array with extra space
const m = 3; // Number of elements in the initial portion of nums1
const nums2 = [2, 5, 6]; // Example nums2 array
const n = 3; // Number of elements in nums2

merge(nums1, m, nums2, n);
```

4. After calling the function, `nums1` will be modified in-place to contain the merged and sorted elements.

```javascript
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
```

## Function Description

The `merge` function is defined as follows:

```javascript
/**
 * Merges two sorted arrays nums1 and nums2 into nums1.
 *
 * @param {number[]} nums1 - The first sorted array with additional space for merging.
 * @param {number} m - The number of elements in the initial portion of nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes four arguments:

- `nums1`: The first sorted array with additional space for merging.
- `m`: The number of elements in the initial portion of `nums1`.
- `nums2`: The second sorted array.
- `n`: The number of elements in `nums2`.

The function modifies `nums1` in-place to merge and sort the elements.

## Algorithm Explanation

The code uses a straightforward algorithm to merge two sorted arrays into the first array in-place. Here's how the algorithm works:

1. Iterate through the elements of `nums2` using a `for` loop. For each element at index `i` in `nums2`, append it to `nums1` at index `m + i`. This effectively merges the two arrays, with the merged elements in the correct positions in `nums1`.

2. After merging the elements, return `nums1.sort((a, b) => a - b)` to sort the merged array in ascending order.

## Example

Here's an example of how to use the `merge` function:

```javascript
const nums1 = [1, 2, 3, 0, 0, 0]; // nums1 with extra space
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
```

In this example, the `merge` function takes `nums1` with extra space, the number of elements in the initial portion of `nums1` (`m`), `nums2`, and the number of elements in `nums2` (`n`). The function modifies `nums1` in-place to merge and sort the elements, resulting in the merged array `[1, 2, 2, 3, 5, 6]`.
