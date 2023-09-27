# Decoding a String at Index

This JavaScript code defines a function `decodeAtIndex` that decodes a string `s` based on specific rules and returns the character at index `k`. The code uses a loop to calculate the length of the decoded string and then works backward to determine the character at the specified index. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `decodeAtIndex` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `decodeAtIndex` function with a string `s` and an integer `k` as arguments.

```javascript
const s = "leet2code3";
const k = 10;
const result = decodeAtIndex(s, k);
```

3. The function will return the character at index `k` in the decoded string.

```javascript
console.log(`Character at index ${k}: ${result}`);
```

## Function Description

The `decodeAtIndex` function is defined as follows:

```javascript
/**
 * Decodes a string based on specific rules and returns the character at index k.
 *
 * @param {string} s - The encoded string.
 * @param {number} k - The index of the character to retrieve.
 * @return {string} The character at index k.
 */
const decodeAtIndex = function (s, k) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes a string `s` (the encoded string) and an integer `k` (the index of the character to retrieve) and returns the character at index `k` in the decoded string.

## Algorithm Explanation

The code uses a two-step approach to decode the string:

1. Calculate the length of the decoded string by iteratively processing the characters in the encoded string.

2. Work backward to determine the character at the specified index `k` by using the calculated length.

Here's a step-by-step explanation of the algorithm:

- Initialize `length` to 0 and `i` to 0. These variables will be used to keep track of the length of the decoded string and the current position in the encoded string.

- Start a `while` loop that continues as long as `length` is less than `k`. This loop iterates through the characters of the encoded string and updates `length` based on the decoding rules.

  - If the current character is a digit (checked using `isNaN`), multiply `length` by the numeric value of the digit. This accounts for repeating substrings.

  - If the current character is not a digit, increment `length` by 1. This accounts for single characters.

  - Increment `i` to move to the next character in the encoded string.

- After exiting the loop, `length` represents the length of the decoded string, and `i` points to the character at or after index `k` in the encoded string.

- Start a second loop that works backward, starting from index `i - 1`, and iterate through the characters of the encoded string.

  - If the current character is a digit, divide `length` by the numeric value of the digit and update `k` by taking its modulo with `length`. This accounts for repeating substrings.

  - If the current character is not a digit, check if `k` is equal to 0 or equal to `length`. If either condition is met, return the current character as it corresponds to the desired index `k`.

  - Decrement `length` by 1 to account for single characters.

- If the desired character is not found within the loop, return an empty string (this handles the case where `k` exceeds the length of the decoded string).

## Example

Here's an example of how to use the `decodeAtIndex` function:

```javascript
const s = "leet2code3";
const k = 10;
const result = decodeAtIndex(s, k);
console.log(`Character at index ${k}: ${result}`);
```

In this example, the function would return `"o"` because it is the character at index `10` in the decoded string "leetleetcodeleetleetcodeleet".
