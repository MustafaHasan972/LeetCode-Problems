/**
 * Calculates the maximum profit that can be obtained by buying and selling stocks.
 *
 * @param {Array<number>} prices - An array of stock prices.
 * @return {number} The maximum profit possible.
 */
const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let potentialProfit = prices[i] - minPrice;
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
