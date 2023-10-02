# Removing Elements from an Array

This JavaScript code defines a function `removeElement` that removes all occurrences of a specified value `val` from an array `nums`. The code iterates through the elements of the array, identifies and removes the specified value, and returns the new length of the modified array. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `removeElement` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create an array `nums` from which you want to remove elements.

3. Call the `removeElement` function with the following arguments:

   - `nums`: The array from which you want to remove elements.
   - `val`: The value you want to remove from the array.

```javascript
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
```

4. The function will return the new length of the modified array.

```javascript
console.log(`New length of the array: ${result}`);
```

5. The elements with the specified value `val` will be removed from the `nums` array in-place.

```javascript
console.log(`Modified array: ${nums}`);
```

## Function Description

The `removeElement` function is defined as follows:

```javascript
/**
 * Removes all occurrences of a specified value from an array in-place and returns the new length.
 *
 * @param {number[]} nums - The array from which elements will be removed.
 * @param {number} val - The value to be removed from the array.
 * @return {number} - The new length of the modified array.
 */
var removeElement = function (nums, val) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes two arguments:

- `nums`: The array from which elements will be removed.
- `val`: The value to be removed from the array.

The function modifies the `nums` array in-place, removing all occurrences of `val`, and returns the new length of the modified array.

## Algorithm Explanation

The code uses a straightforward algorithm to remove all occurrences of the specified value `val` from the `nums` array. Here's how the algorithm works:

1. Initialize a variable `count` to 0. This variable will keep track of the new length of the modified array.

2. Iterate through the elements of the `nums` array using a `for` loop. For each element `nums[i]`, perform the following steps:

   a. Check if `nums[i]` is not equal to `val`. If they are not equal, it means the element should be retained.

   b. If `nums[i]` is not equal to `val`, assign `nums[i]` to `nums[count]` and increment `count` by 1. This step effectively moves the non-`val` elements to the beginning of the array.

3. After processing all elements, return the value of `count`. This value represents the new length of the modified array, where all occurrences of `val` have been removed.

## Example

Here's an example of how to use the `removeElement` function:

```javascript
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);

console.log(`New length of the array: ${result}`);
console.log(`Modified array: ${nums}`);
```

In this example, the `removeElement` function is called with the `nums` array and the value `3` to be removed. After processing, the function returns the new length of the modified array (`2`) and updates the `nums` array in-place, removing the elements with the value `3`.
