# Maximum Profit from Buying and Selling Stocks

This JavaScript code defines a function `maxProfit` that calculates the maximum profit that can be obtained by buying and selling a single stock based on its prices. The function takes an array `prices`, where each element represents the price of the stock on a given day. The goal is to find the maximum profit that can be obtained by buying and selling the stock following the constraints: you must buy before you sell, and you may complete as many transactions as you like (but not simultaneously).

## Usage

To use the `maxProfit` function, follow these steps:

1. Include the code snippet in your JavaScript project.

2. Call the `maxProfit` function with one argument:
   - `prices`: An array of stock prices.

```javascript
const prices = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(prices);
console.log(maxProfitValue); // Output: 5
```

3. After calling the function, it will return the maximum profit that can be obtained by buying and selling the stock.

## Function Description

The `maxProfit` function is defined as follows:

```javascript
/**
 * Calculates the maximum profit that can be obtained by buying and selling a single stock.
 *
 * @param {number[]} prices - An array of stock prices.
 * @return {number} - Returns the maximum profit that can be obtained.
 */
const maxProfit = function (prices) {
  // ... (code implementation as described in the code snippet)
};
```

The function takes an array `prices` and returns the maximum profit as an integer.

## Algorithm Explanation

The `maxProfit` function uses a simple iterative algorithm to calculate the maximum profit:

1. Initialize `minPrice` to positive infinity (as a placeholder for the minimum price) and `maxProfit` to 0 (initial maximum profit).

2. Iterate through the array of stock prices:

   - If the current price is less than `minPrice`, update `minPrice` to the current price. This step identifies a new potential buying opportunity.
   - If the current price is greater than or equal to `minPrice`, calculate the potential profit by selling at the current price (`potentialProfit = prices[i] - minPrice`).
   - Update `maxProfit` to the maximum value between its current value and `potentialProfit` if `potentialProfit` is greater.

3. Continue the loop to examine all potential buying and selling opportunities in the array.

4. Return `maxProfit` as the final result, representing the maximum profit that can be obtained by buying and selling the stock.

## Example

Here's an example of how to use the `maxProfit` function:

```javascript
const prices = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(prices);
console.log(maxProfitValue); // Output: 5
```

In this example, the `maxProfit` function is called with an array of stock prices `prices`. The function calculates the maximum profit that can be obtained by buying and selling the stock, considering the historical price data. The maximum profit value of `5` indicates that the optimal strategy is to buy at `1` and sell at `6`, resulting in a profit of `5`.
