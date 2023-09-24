# Champagne Tower

This JavaScript code defines a function `champagneTower` that simulates a champagne tower and calculates the amount of champagne that will be poured into a specific glass at a given row and column (query_row, query_glass). The code uses a 2D array (`pyramid`) to represent the champagne distribution. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `champagneTower` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Import or require the function in your project.

```javascript
// Import the champagneTower function
const champagneTower = require("./champagneTower.js"); // Modify the path accordingly
```

3. Call the `champagneTower` function with the following arguments:

   - `poured`: The amount of champagne poured at the top of the pyramid.
   - `query_row`: The row number of the glass you want to query.
   - `query_glass`: The column number of the glass you want to query.

```javascript
const poured = 5;
const query_row = 2;
const query_glass = 1;

const result = champagneTower(poured, query_row, query_glass);
```

4. The function will return the amount of champagne in the specified glass at the given row.

```javascript
console.log(`Champagne in glass (${query_row}, ${query_glass}): ${result}`);
```

## Function Description

The `champagneTower` function is defined as follows:

```javascript
/**
 * Simulates a champagne tower and calculates the amount of champagne in a specific glass at the given row and column.
 *
 * @param {number} poured - The amount of champagne poured at the top.
 * @param {number} query_row - The row number of the glass to query.
 * @param {number} query_glass - The column number of the glass to query.
 * @return {number} The amount of champagne in the specified glass.
 */
function champagneTower(poured, query_row, query_glass) {
  // ... (code implementation as described in the code snippet)
}
```

The function takes three parameters: the amount of champagne poured (`poured`), the row number of the glass to query (`query_row`), and the column number of the glass to query (`query_glass`). It returns the amount of champagne in the specified glass.

## Algorithm Explanation

The code simulates the champagne distribution in a pyramid-shaped tower. It uses a 2D array called `pyramid` to represent the champagne distribution. Here's how the algorithm works:

1. Create a 2D array `pyramid` with a fixed size of 100x100 and initialize all elements to 0.

2. Pour the initial amount of champagne (`poured`) into the top glass of the pyramid (`pyramid[0][0]`).

3. Use nested loops to iterate through the rows and columns of the pyramid. For each glass in the pyramid, calculate the overflow (champagne that flows to the glasses below) as `(pyramid[i][j] - 1) / 2`. If the overflow is greater than 0, distribute it equally to the glasses in the row below (`pyramid[i + 1][j]` and `pyramid[i + 1][j + 1]`).

4. Continue the simulation until you reach the second-to-last row (`99` iterations for `i`). This ensures that the champagne distribution reaches a stable state.

5. Return the amount of champagne in the specified glass at `query_row` and `query_glass`. Ensure that the result is capped at `1` to represent a full glass of champagne.

## Example

Here's an example of how to use the `champagneTower` function:

```javascript
const poured = 5;
const query_row = 2;
const query_glass = 1;
const result = champagneTower(poured, query_row, query_glass);
console.log(`Champagne in glass (${query_row}, ${query_glass}): ${result}`);
```

In this example, the function would return `0.5` because at the end of the simulation, glass `(2, 1)` contains that amount of champagne.
