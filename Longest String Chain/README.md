# Longest String Chain

This JavaScript code snippet defines a function `longestStrChain` that finds the length of the longest string chain in an array of words. A string chain is a sequence of words where each word is formed by removing one character from the previous word. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `longestStrChain` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Import or require the function in your project.

```javascript
// Import the longestStrChain function
const longestStrChain = require("./longestStrChain.js"); // Modify the path accordingly
```

3. Create an array of words that you want to find the longest string chain for.

```javascript
const words = ["abc", "ab", "abcd", "a", "bc", "def"];
```

4. Call the `longestStrChain` function with the array of words as the argument.

```javascript
const result = longestStrChain(words);
```

5. The function will return the length of the longest string chain, which you can then use as needed.

```javascript
console.log(`Length of the longest string chain: ${result}`);
```

## Function Description

The `longestStrChain` function is defined as follows:

```javascript
/**
 * Finds the longest string chain in an array of words.
 *
 * @param {Array} words - An array of words.
 * @return {number} The length of the longest string chain.
 */
var longestStrChain = function (words) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an array of words as input and returns an integer representing the length of the longest string chain within the provided words.

## Algorithm Explanation

The code implements the algorithm as follows:

1. Sort the input words in ascending order based on their lengths.

2. Create a map called `chainLengths` to store the chain lengths for each word.

3. Initialize the maximum chain length as 1.

4. Iterate through each word in the sorted array of words:

   a. Initialize the current length as 1.

   b. Iterate through each character in the word and create a predecessor word by removing the character.

   c. Check if the predecessor word exists in the `chainLengths` map. If it does, update the current length by taking the maximum of the current length and the chain length of the predecessor word plus 1.

   d. Store the current length in the `chainLengths` map for the current word.

   e. Update the maximum chain length if the current length is greater.

5. Return the maximum chain length as the result.

## Example

Here's an example of how to use the `longestStrChain` function:

```javascript
const words = ["abc", "ab", "abcd", "a", "bc", "def"];
const result = longestStrChain(words);
console.log(`Length of the longest string chain: ${result}`);
```

In this example, the function would return `3` because the longest string chain can be formed by removing characters to create the sequence "abc" -> "ab" -> "a."

Feel free to use this code snippet in your JavaScript projects to find the longest string chain in an array of words.
