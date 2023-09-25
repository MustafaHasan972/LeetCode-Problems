/**
 * Reverses the digits of a given integer.
 *
 * @param {number} x - The integer to be reversed.
 * @return {number} The reversed integer. Returns 0 if the reversed integer overflows.
 */
var reverse = function (x) {
  // Define the maximum and minimum values for an integer.
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  // Initialize a variable to store the reversed integer.
  let rev = 0;

  // Iterate until the entire number is reversed.
  while (x !== 0) {
    // Get the last digit of the number.
    const pop = x % 10;

    // Remove the last digit from the number.
    x = Math.trunc(x / 10);

    // Check for integer overflow.
    if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
    if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

    // Add the last digit to the reversed number.
    rev = rev * 10 + pop;
  }

  // Return the reversed integer.
  return rev;
};

console.log(reverse(-98765432111));
