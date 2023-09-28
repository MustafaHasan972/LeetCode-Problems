/**
 * @param {number[]} nums - Array of numbers to be sorted by parity.
 * @return {number[]} - New array with even numbers first, followed by odd numbers.
 */
var sortArrayByParity = function (nums) {
  // Initialize two empty arrays to store even and odd numbers
  let even = [];
  let odd = [];

  // Iterate through each number in the input array
  for (let n of nums) {
    // Check if the number is even
    if (n % 2 === 0) {
      // If it is even, push it to the 'even' array
      even.push(n);
    } else {
      // If it is odd, push it to the 'odd' array
      odd.push(n);
    }
  }

  // Concatenate the 'even' and 'odd' arrays and return the result
  return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
