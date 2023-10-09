/**
 * @param {number[]} prices - An array of stock prices.
 * @return {number} - Returns the maximum profit that can be obtained.
 */
var maxProfit = function (prices) {
  // Initialize variables to keep track of the minimum price and maximum profit.
  let minPrice = Infinity; // Set to positive infinity as an initial placeholder.
  let maxProfit = 0; // Initialize the maximum profit to 0.

  // Iterate through the array of stock prices.
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // If the current price is less than the minimum price seen so far,
      // update the minimum price to the current price.
      minPrice = prices[i];
    } else {
      // If the current price is greater than or equal to the minimum price,
      // calculate the potential profit by selling at the current price.
      let potentialProfit = prices[i] - minPrice;

      // Update the maximum profit if the potential profit is greater.
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }

  // The maximum profit is stored in the 'maxProfit' variable.
  return maxProfit;
};
