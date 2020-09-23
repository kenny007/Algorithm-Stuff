/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length; j++) {
      if (i < j && prices[i] !== prices[j]) {
        let profit = prices[j] - prices[i]
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));