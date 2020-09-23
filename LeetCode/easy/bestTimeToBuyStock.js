/**
 * The points of interest are the peaks and valleys, we need to find the largest peak following the smallest
 * valley. We can maintain two variables - minprice and maxprofit corresponding to the smallest valley and
 * maximum profit and maximum profit
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1])) // Quadratic equation

