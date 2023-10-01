/**
 * Reverses the order of characters in each word of a given string.
 *
 * @param {string} s - The input string.
 * @return {string} - The string with reversed words.
 */
function reverseWords(s) {
  // Split the input string into an array of words
  const arr = s.split(" ");

  // Iterate through each word in the array
  for (let i = 0; i < arr.length; i++) {
    // Split the word into an array of characters, reverse the order, and join them back into a string
    arr[i] = arr[i].split("").reverse().join("");
  }

  // Join the array of reversed words back into a string, separated by spaces
  return arr.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
