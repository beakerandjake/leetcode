/**
 * You are given an integer array prices where prices[i] is the price of a given
 * stock on the ith day.
 *
 * On each day, you may decide to buy and/or sell the stock. You can only hold at
 * most one share of the stock at any time. However, you can buy it then
 * immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * Total profit is 4 + 3 = 7.
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Total profit is 4.
 *
 *
 * Example 3:
 *
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= prices.length <= 3 * 104
 *  * 0 <= prices[i] <= 104
 *
 *
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = (prices) => {
  const memo = [...Array(prices.length)].map(() => Array(2).fill(null));
  const dp = (index, holding) => {
    if (index >= prices.length) {
      return 0;
    }
    if (memo[index][holding] == null) {
      /**
       * holding stock choices:
       *    - don't sell stock (same result as sell stock and re-buy)
       *    - sell stock and don't re-buy
       * not holding stock choices:
       *    - buy stock today
       *    - don't buy stock today
       */
      memo[index][holding] = holding
        ? Math.max(dp(index + 1, 1), prices[index] + dp(index + 1, 0))
        : Math.max(dp(index + 1, 1) - prices[index], dp(index + 1, 0));
    }
    return memo[index][holding];
  };
  return dp(0, 0);
};
