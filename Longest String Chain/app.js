/**
 * Finds the longest string chain in an array of words.
 *
 * @param {Array} words - An array of words.
 * @return {number} The length of the longest string chain.
 */
var longestStrChain = function (words) {
  // Sort the words in ascending order based on their lengths
  words.sort((a, b) => a.length - b.length);

  // Create a map to store the chain lengths for each word
  const chainLengths = new Map();

  // Initialize the maximum chain length to 1
  let maxLength = 1;

  // Iterate through each word in the sorted words array
  for (const word of words) {
    // Initialize the current length to 1
    let currentLength = 1;

    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
      // Remove the i-th character from the word
      const predecessor = word.slice(0, i) + word.slice(i + 1);

      // Check if the predecessor exists in the chainLengths map
      if (chainLengths.has(predecessor)) {
        // Update the current length if the predecessor has a longer chain length
        currentLength = Math.max(
          currentLength,
          chainLengths.get(predecessor) + 1
        );
      }
    }

    // Store the current length in the chainLengths map for the current word
    chainLengths.set(word, currentLength);

    // Update the maximum chain length if the current length is greater
    maxLength = Math.max(maxLength, currentLength);
  }

  // Return the maximum chain length
  return maxLength;
};
