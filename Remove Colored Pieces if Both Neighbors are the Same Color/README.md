# Determine the Winner of a Game

This JavaScript code defines a function `winnerOfGame` that determines the winner of a game played with two players, 'A' and 'B', using a string of colors as input. In this game, the players take turns, and the objective is to create subsequences of colors. The code counts the number of valid subsequences created by each player and determines the winner based on the count. This README.md file provides an overview of the code and how to use it.

## Usage

To use the `winnerOfGame` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `winnerOfGame` function with a string of colors as an argument.

```javascript
const colors = "AAABBBBBBAA";
const result = winnerOfGame(colors);
```

3. The function will return a boolean value indicating whether player 'A' is the winner (`true`) or player 'B' is the winner (`false`).

```javascript
console.log(`Player A is the winner: ${result}`);
```

## Function Description

The `winnerOfGame` function is defined as follows:

```javascript
/**
 * Determines the winner of a game played with two players, 'A' and 'B', using a string of colors.
 *
 * @param {string} colors - A string representing the sequence of colors played in the game.
 * @return {boolean} - `true` if player 'A' wins, `false` if player 'B' wins.
 */
var winnerOfGame = function (colors) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes a string `colors` as input, which represents the sequence of colors played in the game. It returns a boolean value indicating the winner of the game.

## Algorithm Explanation

The code uses a simple algorithm to determine the winner of the game based on the colors played. Here's how the algorithm works:

1. Initialize two variables, `countA` and `countB`, to keep track of the count of valid subsequences created by players 'A' and 'B', respectively. Initially, both counts are set to 0.

2. Iterate through the characters of the `colors` string using a `for` loop. For each character `x` at index `i`, perform the following steps:

   a. Initialize a variable `count` to 0.

   b. Use a `while` loop to continue iterating as long as the characters at index `i` are equal to `x`. Increment both `i` and `count` during each iteration.

   c. After the `while` loop, check if the character `x` is 'A' or 'B'. If it's 'A', update `countA` by adding the maximum of `(count - 2, 0)` to it. Similarly, if it's 'B', update `countB` by adding the maximum of `(count - 2, 0)` to it. This step accounts for valid subsequences created by each player.

   d. Decrement `i` by 1 to account for the incremented value in the `for` loop.

3. After processing the entire `colors` string, compare `countA` and `countB` to determine the winner. If `countA` is greater than `countB`, return `true`, indicating that player 'A' is the winner. Otherwise, return `false`, indicating that player 'B' is the winner.

## Example

Here's an example of how to use the `winnerOfGame` function:

```javascript
const colors = "AAABBBBBBAA";
const result = winnerOfGame(colors);
console.log(`Player A is the winner: ${result}`);
```

In this example, the `winnerOfGame` function takes the `colors` string representing the sequence of colors played in the game. After processing the string, it determines that player 'A' is the winner, and the function returns `true`.
