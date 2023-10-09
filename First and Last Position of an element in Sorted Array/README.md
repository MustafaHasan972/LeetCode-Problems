# Search for a Range in Sorted Array

This JavaScript code defines a function `searchRange` that searches for a target element in a sorted array `nums` and returns the range of indices where the target appears. The range is represented as `[first, last]`, where `first` is the first index of the target element, and `last` is the last index of the target element. If the target is not found, both `first` and `last` are set to `-1`. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `searchRange` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `searchRange` function with two arguments:
   - `nums`: A sorted array of integers.
   - `target`: The target element you want to search for.

```javascript
const nums = [5, 7, 7, 8, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);
console.log(result); // Output: [3, 5]
```

3. After calling the function, it will return the range `[first, last]` where the target appears in the array.

## Function Description

The `searchRange` function is defined as follows:

```javascript
/**
 * Searches for a target element in a sorted array and returns the range of indices where the target appears.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @param {number} target - The target element to search for.
 * @return {number[]} - Returns [first, last] where 'first' is the first index of the target element and 'last' is the last index.
 */
const searchRange = function (nums, target) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes two arguments: `nums` (a sorted array) and `target` (the element to search for) and returns `[first, last]`, representing the range of indices where the target appears.

## Algorithm Explanation

The `searchRange` function uses a binary search algorithm to find the first and last occurrences of the target element. It performs two binary searches: one to find the first occurrence (`first`), and another to find the last occurrence (`last`).

1. Initialize `first` and `last` to `-1`.

2. Initialize two pointers, `left` and `right`, to perform binary search.

3. Perform the first binary search to find `first`:

   - While `left` is less than or equal to `right`, calculate the midpoint `mid`.
   - If `nums[mid]` is equal to the target:
     - Update `first` to `mid`.
     - Move `right` to `mid - 1` to search for the first occurrence.
   - If `nums[mid]` is less than the target, update `left` to `mid + 1`.
   - If `nums[mid]` is greater than the target, update `right` to `mid - 1`.

4. Reset the pointers `left` and `right` to perform the second binary search.

5. Perform the second binary search to find `last`:

   - While `left` is less than or equal to `right`, calculate the midpoint `mid`.
   - If `nums[mid]` is equal to the target:
     - Update `last` to `mid`.
     - Move `left` to `mid + 1` to search for the last occurrence.
   - If `nums[mid]` is less than the target, update `left` to `mid + 1`.
   - If `nums[mid]` is greater than the target, update `right` to `mid - 1`.

6. Return `[first, last]` as the result.

## Example

Here's an example of how to use the `searchRange` function:

```javascript
const nums = [5, 7, 7, 8, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);
console.log(result); // Output: [3, 5]
```

In this example, the `searchRange` function is called with a sorted array `nums` and a target element `8`. The function performs binary searches to find the first and last occurrences of `8`, and it returns the range `[3, 5]`, indicating that `8` appears at indices `3`, `4`, and `5` in the array.
