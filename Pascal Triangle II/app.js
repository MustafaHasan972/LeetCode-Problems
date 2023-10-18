function getRow(rowIndex) {
  if (rowIndex < 0) {
    return [];
  }

  const row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1];
    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }
    newRow.push(1);
    row.length = 0; // Clear the original row
    row.push(...newRow); // Copy newRow to row
  }

  return row;
}
