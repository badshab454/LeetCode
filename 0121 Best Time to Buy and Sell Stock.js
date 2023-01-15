/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    // set to first element in array by default
    let minprice = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else if (prices[i] - minprice > profit) {
            profit = prices[i] - minprice;
        }
    }
     return profit
};