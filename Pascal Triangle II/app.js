/**
 * @param {number} rowIndex - The index of the row to generate in Pascal's Triangle.
 * @return {number[]} - Returns an array representing the row.
 */
function getRow(rowIndex) {
  if (rowIndex < 0) {
    return [];
  }

  const row = [1]; // Initialize the first row with a single element, which is always 1.

  // Iterate to generate subsequent rows up to the desired rowIndex.
  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1]; // Initialize a new row with the first element as 1.

    // Calculate the values in the new row based on the previous row.
    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1); // Add the last element as 1.

    // Clear the original row and copy the contents of the new row to it.
    row.length = 0;
    row.push(...newRow);
  }

  // The 'row' array now contains the elements of the desired rowIndex.
  return row;
}
