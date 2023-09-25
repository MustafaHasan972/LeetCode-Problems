# Reverse Integer

This JavaScript code defines a function `reverse` that reverses the digits of an integer `x`. It checks for integer overflow and underflow conditions according to the 32-bit signed integer range. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `reverse` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `reverse` function with an integer `x` as an argument.

```javascript
const x = -98765432111;
const result = reverse(x);
```

3. The function will return the integer with its digits reversed, accounting for overflow and underflow conditions.

```javascript
console.log(`Reversed integer: ${result}`);
```

## Function Description

The `reverse` function is defined as follows:

```javascript
/**
 * Reverses the digits of an integer, accounting for overflow and underflow conditions.
 *
 * @param {number} x - The integer to reverse.
 * @return {number} The reversed integer.
 */
var reverse = function (x) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an integer `x` as input and returns the integer with its digits reversed. It also accounts for potential overflow and underflow conditions based on the 32-bit signed integer range.

## Algorithm Explanation

The code reverses the digits of the input integer `x` while checking for overflow and underflow conditions. Here's how the algorithm works:

1. Initialize constants `INT_MAX` and `INT_MIN` to represent the upper and lower bounds of 32-bit signed integers.

2. Initialize a variable `rev` to store the reversed integer.

3. Use a `while` loop to repeatedly reverse the digits of `x` until `x` becomes `0`.

4. Inside the loop, calculate the last digit of `x` (pop) using the modulo operator `%` and truncate `x` by dividing it by `10`.

5. Check for overflow and underflow conditions:

   - If `rev` is greater than `INT_MAX / 10` or if it's equal to `INT_MAX / 10` and `pop` is greater than `7`, return `0` to indicate overflow.
   - If `rev` is less than `INT_MIN / 10` or if it's equal to `INT_MIN / 10` and `pop` is less than `-8`, return `0` to indicate underflow.

6. Multiply `rev` by `10` to shift its digits left and add the `pop` value to it to add the reversed digit.

7. Repeat the process until `x` becomes `0`.

8. Finally, return the reversed integer `rev`, which accounts for overflow and underflow conditions.

## Example

Here's an example of how to use the `reverse` function:

```javascript
const x = -98765432111;
const result = reverse(x);
console.log(`Reversed integer: ${result}`);
```

In this example, the function would return `0` because reversing the digits of `-98765432111` results in an overflow beyond the 32-bit signed integer range.
