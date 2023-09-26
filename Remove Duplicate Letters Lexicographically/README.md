# Remove Duplicate Letters from a String

This JavaScript code defines a function `removeDuplicateLetters` that removes duplicate letters from a string while maintaining the order of the remaining characters. The code uses a stack to keep track of the characters and ensures that the result is the smallest lexicographically correct string. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `removeDuplicateLetters` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `removeDuplicateLetters` function with a string `s` as an argument.

```javascript
const s = "bcabc";
const result = removeDuplicateLetters(s);
```

3. The function will return a string with duplicate letters removed while preserving the order.

```javascript
console.log(`Result: ${result}`);
```

## Function Description

The `removeDuplicateLetters` function is defined as follows:

```javascript
/**
 * Removes duplicate letters from a string while maintaining lexicographic order.
 *
 * @param {string} s - The input string.
 * @return {string} The modified string with duplicates removed.
 */
function removeDuplicateLetters(s) {
  // ... (code implementation as described in the code snippet)
}
```

The function takes a string `s` as input and returns a modified string with duplicate letters removed while preserving lexicographic order.

## Algorithm Explanation

The code uses a stack (`stack`) to build the result string and a set (`seen`) to keep track of the characters that have been seen. It also creates an object (`lastOccurrence`) to store the last occurrence index of each character in the input string. Here's how the algorithm works:

1. Initialize an empty stack (`stack`) to store characters in the final result.

2. Initialize an empty set (`seen`) to keep track of characters that have been seen.

3. Create an object (`lastOccurrence`) to store the last occurrence index of each character in the input string `s`.

4. Fill the `lastOccurrence` object with the last index where each character appears in the input string `s`.

5. Iterate through the input string `s` character by character.

6. For each character `char`, check if it has not been seen before (i.e., not in the `seen` set).

7. If `char` has not been seen:

   - Check if the stack is not empty (`stack.length > 0`).
   - Check if `char` is smaller than the character at the top of the stack (`char < stack[stack.length - 1]`).
   - Check if there is another occurrence of the character at the top of the stack to the right in the string (using `lastOccurrence`).

8. If the above conditions are met, pop characters from the stack and remove them from the `seen` set until the conditions are no longer met.

9. Add the current character `char` to the `seen` set.

10. Push the current character `char` onto the stack.

11. Continue this process for each character in the input string.

12. After processing all characters, the stack will contain the characters in the desired order with duplicates removed.

13. Convert the stack to a string using `.join('')` and return it as the final result.

## Example

Here's an example of how to use the `removeDuplicateLetters` function:

```javascript
const s1 = "bcabc";
console.log(removeDuplicateLetters(s1)); // Output: "abc"

const s2 = "cbacdcbc";
console.log(removeDuplicateLetters(s2)); // Output: "acdb"
```

In these examples, the function correctly removes duplicate letters while preserving the lexicographic order of the remaining characters in the input strings.
