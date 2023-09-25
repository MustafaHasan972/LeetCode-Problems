/**
 * This function takes in two strings, s and t, and returns the character in t that is not present in s.
 * The function iterates through each character in s and keeps a count of the occurrences of each character in charCount object.
 * Then, it iterates through each character in t and checks if the character is not present in charCount or if its count is 0.
 * If either of these conditions is true, it means the character is the one that is not present in s, so it is returned.
 * If none of the characters in t meet these conditions, it means all characters in t are present in s.
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {character} - The character in t that is not present in s.
 */
var findTheDifference = function (s, t) {
  // Create an empty object to store the count of each character in s.
  const charCount = {};

  // Iterate through each character in s.
  for (const char of s) {
    // Increase the count of the character in charCount object.
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through each character in t.
  for (const char of t) {
    // Check if the character is not present in charCount or its count is 0.
    if (!charCount[char] || charCount[char] === 0) {
      // Return the character as it is not present in s.
      return char;
    } else {
      // Decrease the count of the character in charCount object.
      charCount[char] -= 1;
    }
  }
};
