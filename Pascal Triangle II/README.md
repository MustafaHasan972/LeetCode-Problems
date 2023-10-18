# Pascal's Triangle II

The JavaScript code defines a function `getRow` that generates the `rowIndex`-th row of Pascal's Triangle. Pascal's Triangle is a mathematical construct where each number is the sum of the two numbers directly above it. The first few rows of Pascal's Triangle look like this:

```
Row 0: 1
Row 1: 1 1
Row 2: 1 2 1
Row 3: 1 3 3 1
...
```

The `getRow` function calculates the desired row of Pascal's Triangle and returns it as an array.

## Usage

To use the `getRow` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `getRow` function with one argument:
   - `rowIndex`: An integer representing the row number of Pascal's Triangle to generate.

```javascript
const rowIndex = 3;
const pascalsTriangleRow = getRow(rowIndex);
console.log(pascalsTriangleRow); // Output: [1, 3, 3, 1]
```

3. After calling the function, it will return the `rowIndex`-th row of Pascal's Triangle as an array.

## Function Description

The `getRow` function is defined as follows:

```javascript
/**
 * Generates the `rowIndex`-th row of Pascal's Triangle.
 *
 * @param {number} rowIndex - The row number of Pascal's Triangle to generate.
 * @return {number[]} - Returns the `rowIndex`-th row as an array.
 */
const getRow = function (rowIndex) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes the row number `rowIndex` as input and returns the corresponding row of Pascal's Triangle as an array.

## Algorithm Explanation

The `getRow` function uses a dynamic programming approach to generate the desired row of Pascal's Triangle. The steps are as follows:

1. Check if `rowIndex` is less than 0. If it is, return an empty array, as Pascal's Triangle starts from row 0.

2. Initialize the `row` array with the value `[1]`. This array will store the elements of the current row.

3. Use a loop to iterate from row 1 to the desired `rowIndex`.

4. Within the loop, create a new array `newRow` and initialize it with the value `[1]`.

5. Calculate the elements of `newRow` by summing up corresponding elements from the previous `row` array.

6. Append `1` to the end of `newRow`.

7. Clear the original `row` array using `row.length = 0`.

8. Copy the elements from `newRow` to `row` using the spread operator (`...`) to prepare for the next iteration.

9. After the loop completes, the `row` array will contain the `rowIndex`-th row of Pascal's Triangle.

10. Return the `row` array as the output.

## Example

Here's an example of how to use the `getRow` function:

```javascript
const rowIndex = 3;
const pascalsTriangleRow = getRow(rowIndex);
console.log(pascalsTriangleRow); // Output: [1, 3, 3, 1]
```

In this example, the `getRow` function is called with `rowIndex` equal to 3. The function returns the 3rd row of Pascal's Triangle, `[1, 3, 3, 1]`, which is then printed to the console.
