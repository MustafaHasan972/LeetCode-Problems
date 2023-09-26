/**
 * Remove duplicate letters from a string while maintaining the lexicographical order.
 *
 * @param {string} s - The input string.
 * @return {string} - The string with duplicate letters removed.
 */
const removeDuplicateLetters = function (s) {
  // Create a stack to store the result.
  let stack = [];

  // Create a set to keep track of seen characters.
  let seen = new Set();

  // Create an object to store the last occurrence of each character.
  let lastOccurrence = {};

  // Iterate through the input string to find the last occurrence of each character.
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }

  // Iterate through the input string again.
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character has not been seen before, process it.
    if (!seen.has(char)) {
      // Remove any characters from the stack that are greater than the current character
      // and occur later in the string.
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        i < lastOccurrence[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop());
      }

      // Add the current character to the stack and mark it as seen.
      seen.add(char);
      stack.push(char);
    }
  }

  // Return the result by joining the characters in the stack.
  return stack.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));
