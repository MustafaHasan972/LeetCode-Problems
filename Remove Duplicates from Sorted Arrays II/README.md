# Removing Duplicates from a Sorted Array (With Allowance for Two Duplicates)

This JavaScript code defines a function `removeDuplicates` that removes duplicate elements from a sorted array `nums` while allowing for up to two duplicate elements to be retained. The code uses a two-pointer approach to keep track of the unique elements in the array. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `removeDuplicates` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create a sorted array `nums` from which you want to remove duplicate elements while retaining up to two duplicates.

3. Call the `removeDuplicates` function with the `nums` array as an argument.

```javascript
const nums1 = [1, 1, 1, 2, 2, 3];
const result1 = removeDuplicates(nums1);

const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 4, 4];
const result2 = removeDuplicates(nums2);
```

4. The function will return the new length of the modified array, and the duplicate elements beyond the first two occurrences will be removed from the `nums` array in-place.

```javascript
console.log(`New length of the array (nums1): ${result1}`);
console.log(`Modified array (nums1): ${nums1}`);

console.log(`New length of the array (nums2): ${result2}`);
console.log(`Modified array (nums2): ${nums2}`);
```

## Function Description

The `removeDuplicates` function is defined as follows:

```javascript
/**
 * Removes duplicate elements from a sorted array while allowing up to two duplicates to be retained.
 *
 * @param {number[]} nums - The sorted array from which to remove duplicates.
 * @return {number} - The new length of the modified array.
 */
var removeDuplicates = function (nums) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes one argument:

- `nums`: The sorted array from which duplicate elements will be removed while retaining up to two duplicates.

The function modifies the `nums` array in-place by removing duplicate elements beyond the first two occurrences and returns the new length of the modified array.

## Algorithm Explanation

The code uses a two-pointer approach to remove duplicate elements from the sorted `nums` array while retaining up to two duplicates. Here's how the algorithm works:

1. Initialize a pointer `j` to `2`. This pointer will keep track of the position where elements should be inserted in the modified array.

2. Use a `for` loop to iterate through the elements of the `nums` array. The loop runs from index `0` to the last index of the array.

3. In each iteration, compare `nums[i]` with `nums[j - 2]`. If they are not equal, it means a new unique element has been found. In this case, assign the value of `nums[i]` to `nums[j]` and increment `j` by `1`. This step effectively keeps track of the unique elements and retains up to two duplicates.

4. Continue this process until all elements have been processed.

5. After processing all elements, return the value `j`, which represents the new length of the modified array. This length includes the unique elements, and any duplicate elements beyond the first two occurrences are removed.

## Example

Here's an example of how to use the `removeDuplicates` function:

```javascript
const nums1 = [1, 1, 1, 2, 2, 3];
const result1 = removeDuplicates(nums1);

console.log(`New length of the array (nums1): ${result1}`);
console.log(`Modified array (nums1): ${nums1}`);

const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 4, 4];
const result2 = removeDuplicates(nums2);

console.log(`New length of the array (nums2): ${result2}`);
console.log(`Modified array (nums2): ${nums2}`);
```

In the first example, the `removeDuplicates` function is called with the `nums1` array `[1, 1, 1, 2, 2, 3]`. After processing, the function returns the new length of the modified array, which is `5`. The duplicate elements beyond the first two occurrences are removed from the `nums1` array in-place, resulting in `[1, 1, 2, 2, 3]`.

In the second example, the `removeDuplicates` function is called with the `nums2` array `[0, 0, 1, 1, 1, 1, 2, 3, 4, 4]`. After processing, the function returns the new length of the modified array, which is `8`. The duplicate elements beyond the first two occurrences are removed from the `nums2` array in-place, resulting in `[0, 0, 1, 1, 2, 3, 4, 4]`.
