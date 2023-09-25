# Find the Difference Between Two Strings

This JavaScript code defines a function `findTheDifference` that finds the character that is added to string `t` but not present in string `s`. The code uses a character count object to keep track of the characters in `s` and then checks for the extra character in `t`. This is an improved version of the previous implementation. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `findTheDifference` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `findTheDifference` function with two strings `s` and `t` as arguments.

```javascript
const s = "abcd";
const t = "abcde";
const result = findTheDifference(s, t);
```

3. The function will return the character that is added to `t` but not present in `s`.

```javascript
console.log(`Added character: ${result}`);
```

## Function Description

The `findTheDifference` function is defined as follows:

```javascript
/**
 * Finds the character added to string t but not present in string s.
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string with an added character.
 * @return {character} The added character.
 */
var findTheDifference = function (s, t) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes two string arguments: `s` (the first string) and `t` (the second string with an added character). It returns the added character as a string.

## Algorithm Explanation

The improved code uses a character count object `charCount` to keep track of the characters in string `s`. Here's how the algorithm works:

1. Initialize an empty object `charCount` to store the character count for each character in `s`.

2. Iterate through the characters in string `s`.

3. For each character, increment its count in the `charCount` object using the `char` as the key. If the character is not in the object, initialize its count to `0` and then increment it.

4. Next, iterate through the characters in string `t`.

5. For each character in `t`, check if it exists in the `charCount` object and if its count is greater than `0`. If it does not exist or its count is `0`, return that character as it is the added character to string `t`.

6. If the character exists in `charCount` and its count is greater than `0`, decrement its count in the object to account for its occurrence in both strings `s` and `t`.

7. Continue this process until you find the added character in `t`.

8. Finally, return the added character as the result.

## Example

Here's an example of how to use the improved `findTheDifference` function:

```javascript
const s = "abcd";
const t = "abcde";
const result = findTheDifference(s, t);
console.log(`Added character: ${result}`);
```

In this example, the function would return `"e"` because it is the character that was added to string `t` but was not present in string `s`.
