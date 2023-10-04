# HashMap Implementation in JavaScript

This JavaScript code defines a class called `MyHashMap`, which is an implementation of a simple hash map (dictionary). The `MyHashMap` class allows you to store key-value pairs and perform basic operations such as `put`, `get`, and `remove` on those pairs. This README.md file provides an overview of the code and how to use the `MyHashMap` class.

## Usage

To use the `MyHashMap` class, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Create an instance of the `MyHashMap` class.

```javascript
const hashMap = new MyHashMap();
```

3. Use the provided methods to store and manipulate key-value pairs.

### `put(key, value)`

The `put` method allows you to add a key-value pair to the hash map.

```javascript
hashMap.put(key, value);
```

### `get(key)`

The `get` method retrieves the value associated with a given key from the hash map. If the key is not found, it returns `-1`.

```javascript
const value = hashMap.get(key);
```

### `remove(key)`

The `remove` method removes a key-value pair from the hash map based on the provided key.

```javascript
hashMap.remove(key);
```

## Class Description

The `MyHashMap` class is defined as follows:

```javascript
class MyHashMap {
  constructor() {
    this.data = new Array(1000001); // Initialize an array to store key-value pairs.
  }
  put(key, value) {
    this.data[key] = value; // Store the key-value pair in the array.
  }
  get(key) {
    let value = this.data[key];
    return value !== undefined ? value : -1; // Retrieve the value associated with the key or return -1 if not found.
  }
  remove(key) {
    delete this.data[key]; // Remove the key-value pair from the array.
  }
}
```

The `MyHashMap` class has the following methods:

- `constructor()`: Initializes an array to store key-value pairs.

- `put(key, value)`: Stores a key-value pair in the array.

- `get(key)`: Retrieves the value associated with a key from the array. If the key is not found, it returns `-1`.

- `remove(key)`: Removes a key-value pair from the array based on the provided key.

## Example

Here's an example of how to use the `MyHashMap` class:

```javascript
const hashMap = new MyHashMap();

// Add key-value pairs
hashMap.put(1, "One");
hashMap.put(2, "Two");
hashMap.put(3, "Three");

// Retrieve values by keys
const value1 = hashMap.get(1); // "One"
const value4 = hashMap.get(4); // -1 (not found)

// Remove a key-value pair
hashMap.remove(2);

// Check if the removed key exists
const removedValue = hashMap.get(2); // -1 (not found)
```

In this example, we create an instance of the `MyHashMap` class and use its methods to store, retrieve, and remove key-value pairs.
