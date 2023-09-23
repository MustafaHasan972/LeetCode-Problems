/**
 * Maps each element of an array to a new value using the provided function.
 *
 * @param {Array} arr - The array to be mapped.
 * @param {Function} fn - The function to be applied to each element of the array.
 * @returns {Array} The resulting array with the transformed values.
 */
function map(arr, fn) {
  // Use the map() method to apply the provided function to each element of the array
  return arr.map(fn);
}

//The map() method in JavaScript is used to create a new array by applying a provided function to each element of an existing array. It takes in a callback function as an argument, which is applied to each element of the array. The callback function can transform or modify the elements of the array, and the map() method collects the returned values of the callback function and creates a new array with those values.
