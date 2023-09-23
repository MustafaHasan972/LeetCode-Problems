/**
 * Checks if a string is a subsequence of another string.
 *
 * @param {string} s - The subsequence string to check.
 * @param {string} t - The main string to check against.
 * @return {boolean} True if the subsequence string is found in the main string, false otherwise.
 */
const isSubsequence = (s, t) => {
  // Check if the subsequence string is empty
  if (s.length === 0) {
    return true;
  }

  // Initialize a pointer to iterate through the subsequence string
  let i = 0;

  // Iterate through the main string
  for (let j = 0; j < t.length; j++) {
    // Check if the current characters match
    if (s[i] === t[j]) {
      // Increment the pointer
      i++;

      // Check if all characters of the subsequence string have been matched
      if (i === s.length) {
        return true;
      }
    }
  }

  // If all characters of the subsequence string have not been matched
  return false;
};
