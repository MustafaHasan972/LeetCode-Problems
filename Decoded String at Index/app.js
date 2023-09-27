/**
 * Calculates the decoded character at index `k` in string `s`.
 *
 * @param {string} s - The input string.
 * @param {number} k - The index position to decode.
 * @return {string} The decoded character at index `k`.
 */
let decodeAtIndex = function (s, k) {
  let length = 0; // Initialize the length of the decoded string
  let i = 0; // Initialize the index of the current character

  // Calculate the length of the decoded string until it reaches the desired index
  while (length < k) {
    if (!isNaN(s[i])) {
      // Check if the current character is a number
      length *= Number(s[i]); // Multiply the length by the number
    } else {
      length++; // Increment the length by 1
    }
    i++; // Move to the next character
  }

  // Iterate backwards from the current index to find the decoded character at index `k`
  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(s[j])) {
      // Check if the current character is a number
      length /= Number(s[j]); // Divide the length by the number
      k %= length; // Update the index by taking the modulo of k and the length
    } else {
      if (k === 0 || k === length) {
        // Check if the index is either 0 or equal to the length
        return s[j]; // Return the decoded character
      }
      length--; // Decrement the length by 1
    }
  }

  return ""; // Return an empty string if the decoded character is not found
};
