/**
 * A simple HashMap (Dictionary) implementation.
 */
class MyHashMap {
  constructor() {
    // Initialize the data array to store key-value pairs.
    // We use an array of size 1000001 to accommodate a wide range of keys.
    this.data = new Array(1000001);
  }

  /**
   * Add a key-value pair to the HashMap.
   * @param {number} key - The key to be added.
   * @param {number} value - The corresponding value for the key.
   */
  put(key, value) {
    // Store the value at the index corresponding to the key.
    this.data[key] = value;
  }

  /**
   * Get the value associated with a given key.
   * @param {number} key - The key to search for.
   * @return {number} - Returns the value associated with the key or -1 if not found.
   */
  get(key) {
    // Retrieve the value stored at the index corresponding to the key.
    let value = this.data[key];

    // If the value is not undefined, return it; otherwise, return -1.
    return value !== undefined ? value : -1;
  }

  /**
   * Remove a key-value pair from the HashMap.
   * @param {number} key - The key to be removed.
   */
  remove(key) {
    // Use the 'delete' operator to remove the key-value pair associated with the key.
    delete this.data[key];
  }
}
