/**
 * @param {string} colors - A string representing the sequence of colors 'A' and 'B'.
 * @return {boolean} - Returns true if player 'A' can win the game; otherwise, false.
 */
var winnerOfGame = function (colors) {
  // Initialize counters for player A and player B.
  let countA = 0;
  let countB = 0;

  // Iterate through the sequence of colors.
  for (let i = 0; i < colors.length; i++) {
    const x = colors[i];
    let count = 0;

    // Count consecutive occurrences of the current color 'x'.
    while (i < colors.length && colors[i] === x) {
      i++;
      count++;
    }

    // If the current color is 'A', calculate and accumulate the score for player A.
    if (x === "A") {
      // Player A can only score when there are at least 3 consecutive 'A's.
      // Subtracting 2 from the count ensures that only extra 'A's beyond the
      // first two consecutive 'A's contribute to the score.
      countA += Math.max(count - 2, 0);
    }
    // If the current color is 'B', calculate and accumulate the score for player B.
    else if (x === "B") {
      // Player B can only score when there are at least 3 consecutive 'B's.
      // Subtracting 2 from the count ensures that only extra 'B's beyond the
      // first two consecutive 'B's contribute to the score.
      countB += Math.max(count - 2, 0);
    }

    // Decrement 'i' to handle the next color in the sequence.
    i--;
  }

  // Compare the scores of player A and player B to determine the winner.
  return countA > countB;
};
