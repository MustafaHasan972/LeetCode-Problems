# Reverse Words in a String

This JavaScript code defines a function `reverseWords` that reverses the order of characters in each word of a given string. The code first splits the input string into an array of words, then reverses the characters in each word, and finally joins the reversed words back into a string. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `reverseWords` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `reverseWords` function with a string `s` as an argument.

```javascript
const s = "Let's take LeetCode contest";
const result = reverseWords(s);
```

3. The function will return the string with reversed words.

```javascript
console.log(`Reversed Words: "${result}"`);
```

## Function Description

The `reverseWords` function is defined as follows:

```javascript
/**
 * Reverses the order of characters in each word of a given string.
 *
 * @param {string} s - The input string.
 * @return {string} - The string with reversed words.
 */
function reverseWords(s) {
  // ... (code implementation as described in the code snippet)
}
```

The function takes a string `s` as input and returns the string with the order of characters in each word reversed.

## Algorithm Explanation

The code uses a simple algorithm to reverse the words in the input string:

1. Split the input string `s` into an array of words using the `split(" ")` method. This splits the string wherever there is a space character.

2. Iterate through each word in the array using a `for` loop.

3. For each word, split it into an array of characters using the `split("")` method, reverse the order of characters using the `reverse()` method, and then join them back into a string using the `join("")` method. This effectively reverses the characters in each word.

4. Replace the original word in the array with the reversed word.

5. After reversing all words in the array, use the `join(" ")` method to join them back into a string, separating them with spaces.

6. Return the final string with reversed words.

## Example

Here's an example of how to use the `reverseWords` function:

```javascript
const s = "Let's take LeetCode contest";
const result = reverseWords(s);
console.log(`Reversed Words: "${result}"`);
```

In this example, the function would return the string `"s'teL ekat edoCteeL tsetnoc"` because it reverses the order of characters in each word while maintaining the spaces between the words.
