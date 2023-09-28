# Length of Longest Substring Without Repeating Characters

This JavaScript code defines a function `lengthOfLongestSubstring` that calculates the length of the longest substring in a given string without repeating characters. The code uses a sliding window approach with two pointers and a character index map to efficiently find the longest substring. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `lengthOfLongestSubstring` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `lengthOfLongestSubstring` function with a string `s` as an argument.

```javascript
const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
```

3. The function will return the length of the longest substring without repeating characters.

```javascript
console.log(`Length of Longest Substring: ${result}`);
```

## Function Description

The `lengthOfLongestSubstring` function is defined as follows:

```javascript
/**
 * Calculates the length of the longest substring in a given string without repeating characters.
 *
 * @param {string} s - The input string.
 * @return {number} The length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function (s) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes a string `s` as input and returns the length of the longest substring without repeating characters.

## Algorithm Explanation

The code uses a sliding window approach to efficiently find the longest substring without repeating characters. Here's how the algorithm works:

1. Initialize the maximum length of the substring (`maxLength`) to 0.

2. Initialize the starting index of the substring (`start`) to 0.

3. Create a map (`charIndexMap`) to store the index of each character encountered in the string.

4. Iterate through each character in the string using a `for` loop with an `end` pointer.

5. For each character `char` at the `end` pointer, check if it is already present in the `charIndexMap` and if its index is greater than or equal to the `start` index.

   - If the condition is met, it means that the character is repeating within the current substring. To avoid repeating characters, update the `start` index to the next index after the last occurrence of the character in the `charIndexMap`.

6. Store the index of the current character in the `charIndexMap`.

7. Update the maximum length of the substring (`maxLength`) by taking the maximum of its current value and the length of the current substring (`end - start + 1`).

8. Repeat steps 4 to 7 for each character in the string while moving the `end` pointer.

9. After processing all characters, the `maxLength` will contain the length of the longest substring without repeating characters.

10. Return the `maxLength` as the result.

## Example

Here's an example of how to use the `lengthOfLongestSubstring` function:

```javascript
const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(`Length of Longest Substring: ${result}`);
```

In this example, the function would return `3` because the longest substring without repeating characters in the input string "abcabcbb" is "abc," which has a length of 3.
