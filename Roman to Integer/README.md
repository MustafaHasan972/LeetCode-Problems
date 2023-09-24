# Roman to Integer Conversion

This JavaScript code defines a function `romanToInt` that converts a Roman numeral string into an integer. The function iterates through the Roman numeral characters, calculates their values based on their positions and Roman numeral rules, and accumulates the result. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `romanToInt` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `romanToInt` function with a Roman numeral string as an argument.

```javascript
const romanNumeral = "XXVII";
const result = romanToInt(romanNumeral);
```

3. The function will return the corresponding integer value of the Roman numeral.

```javascript
console.log(`Integer representation of ${romanNumeral}: ${result}`);
```

## Function Description

The `romanToInt` function is defined as follows:

```javascript
/**
 * Converts a Roman numeral string to an integer.
 *
 * @param {string} romanNumeral - The Roman numeral string to convert.
 * @return {number} The integer representation of the Roman numeral.
 */
function romanToInt(romanNumeral) {
  // ... (code implementation as described in the code snippet)
}
```

The function takes a Roman numeral string (`romanNumeral`) as input and returns an integer representing its value.

## Algorithm Explanation

The code converts a Roman numeral string to an integer using the following algorithm:

1. Create an object `romanToValue` that maps Roman numeral characters to their corresponding integer values.

2. Initialize a variable `result` to store the accumulated integer value.

3. Iterate through the characters of the Roman numeral string using a `for` loop.

4. For each character at index `i`, determine its integer value (`currentSymbolValue`) using the `romanToValue` object. Also, get the value of the next character (`nextSymbolValue`) if it exists.

5. Compare `currentSymbolValue` with `nextSymbolValue`. If `currentSymbolValue` is greater than or equal to `nextSymbolValue` or if there is no `nextSymbolValue` (i.e., it's the last character in the string), add `currentSymbolValue` to the `result`.

6. If `currentSymbolValue` is less than `nextSymbolValue`, subtract `currentSymbolValue` from the `result` since it represents a subtraction situation (e.g., "IV" represents 4, not 6).

7. Continue this process for each character in the Roman numeral string until the entire string has been processed.

8. Return the final `result`, which represents the integer value of the Roman numeral.

## Example

Here's an example of how to use the `romanToInt` function:

```javascript
console.log(romanToInt("XXVII")); // Output: 27
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
```

In these examples, the function correctly converts the Roman numeral strings to their corresponding integer values. For instance, "XXVII" is converted to 27, "IV" to 4, and "IX" to 9.
