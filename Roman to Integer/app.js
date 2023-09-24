/**
 * Converts a Roman numeral string to an integer.
 *
 * @param {string} s - The Roman numeral string to be converted.
 * @return {number} The integer value of the Roman numeral.
 */
function romanToInteger(s) {
  // Create a dictionary to map each Roman numeral character to its corresponding value
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the result to store the final integer value
  let result = 0;

  // Iterate through each character in the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    // Get the value of the current character
    let currVal = dict[s[i]];

    // Get the value of the next character (if exists)
    let nextVal = dict[s[i + 1]];

    // If the current value is greater than or equal to the next value,
    // add it to the result
    if (currVal >= nextVal) {
      result += currVal;
    }
    // If the current value is less than the next value, subtract it from
    // the result
    else if (currVal < nextVal) {
      result -= currVal;
    }
  }

  // Return the final integer value
  return result;
}
