/**
 * Calculates the amount of champagne in a specified glass of a champagne tower.
 *
 * @param {number} poured - The amount of champagne poured into the top glass of the pyramid.
 * @param {number} query_row - The row of the glass to query (0-indexed).
 * @param {number} query_glass - The column of the glass to query (0-indexed).
 * @return {number} The amount of champagne in the specified glass.
 */
let champagneTower = function (poured, query_row, query_glass) {
  // Create a pyramid array with dimensions 100x100 and initialize all values to 0
  const pyramid = Array.from({ length: 100 }, () => new Array(100).fill(0));

  // Set the top glass of the pyramid to the amount poured
  pyramid[0][0] = poured;

  // Loop through each row of the pyramid, starting from the top
  for (let i = 0; i < 99; i++) {
    // Loop through each glass in the current row
    for (let j = 0; j <= i; j++) {
      // Calculate the amount of overflow from the current glass
      const overflow = (pyramid[i][j] - 1) / 2;

      // If there is overflow, distribute it to the glasses in the next row
      if (overflow > 0) {
        pyramid[i + 1][j] += overflow;
        pyramid[i + 1][j + 1] += overflow;
      }
    }
  }

  // Return the amount of champagne in the specified glass
  return Math.min(1, pyramid[query_row][query_glass]);
};
