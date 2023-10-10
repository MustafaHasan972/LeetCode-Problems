/**
 * @param {number[]} prices - An array of stock prices.
 * @return {number} - Returns the maximum profit that can be obtained.
 */
function maxProfit(prices) {
  let profit = 0; // Initialize the profit to 0.

  // Iterate through the array starting from the second element (index 1).
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // If the current price is greater than the previous price,
      // it means there's a potential profit to be made.
      // Add the profit from buying and selling on this day to the total profit.
      profit += prices[i] - prices[i - 1];
    }
  }

  // The 'profit' variable now contains the maximum profit.
  return profit;
}

// Test the function with an example array of stock prices.
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7 (Buy on day 1 (price 1), sell on day 2 (price 5),
// Buy on day 3 (price 3), sell on day 4 (price 6), and
// buy on day 5 (price 4). Total profit = 7)
