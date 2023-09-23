/**
 * Composes an array of functions into a single function that applies each function in the array from right to left.
 * If the array of functions is empty, the returned function simply returns its argument.
 *
 * @param {Function[]} functions - An array of functions to compose.
 * @returns {Function} - The composed function.
 */
const compose = (functions) => {
  // If the array of functions is empty, return a function that simply returns its argument
  if (functions.length === 0) {
    return (x) => x;
  }

  // Return a function that applies each function in the array from right to left
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

// Function composition is a technique in functional programming where two or more functions are combined to create a new function. The output of one function is used as the input for the next function, forming a chain of functions.
