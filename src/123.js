/**
 * You are given an array prices where prices[i] is the price of a given stock on
 * the ith day.
 *
 * Find the maximum profit you can achieve. You may complete at most two
 * transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must
 * sell the stock before you buy again).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
 *
 * Example 2:
 *
 *
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
 *
 *
 * Example 3:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= prices.length <= 105
 *  * 0 <= prices[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = (prices) => {
  const memo = new Map();
  const dp = (day, holding, remainingBuy) => {
    if (day >= prices.length || remainingBuy < 0) {
      return 0;
    }
    const hash = `${day}_${holding}_${remainingBuy}`;
    if (!memo.has(hash)) {
      let result;
      if (holding) {
        result = Math.max(
          // sell today and don't re buy
          dp(day + 1, false, remainingBuy) + prices[day],
          // don't sell today
          dp(day + 1, true, remainingBuy),
        );
      } else {
        result = Math.max(
          // buy today
          dp(day + 1, true, remainingBuy - 1) - prices[day],
          // don't buy today
          dp(day + 1, false, remainingBuy),
        );
      }
      memo.set(hash, result);
    }
    return memo.get(hash);
  };
  return dp(0, false, 2);
};
