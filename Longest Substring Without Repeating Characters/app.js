/**
 * Calculates the length of the longest substring in a given string without repeating characters.
 *
 * @param {string} s - The input string.
 * @return {number} The length of the longest substring without repeating characters.
 */
var lengthOfLongestSubstring = function (s) {
  // Initialize the maximum length of the substring to 0
  let maxLength = 0;

  // Initialize the starting index of the substring to 0
  let start = 0;

  // Create a map to store the index of each character encountered in the string
  let charIndexMap = {};

  // Iterate through each character in the string
  for (let end = 0; end < s.length; end++) {
    // Get the current character
    const char = s[end];

    // If the character is already present in the map and its index is greater than or equal to the starting index,
    // update the starting index to the next index after the last occurrence of the character
    if (charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }

    // Store the index of the current character in the map
    charIndexMap[char] = end;

    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  // Return the maximum length of the substring without repeating characters
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
