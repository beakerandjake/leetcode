/**
 * You are given an array prices where prices[i] is the price of a given stock on
 * the ith day, and an integer fee representing a transaction fee.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions
 * as you like, but you need to pay the transaction fee for each transaction.
 *
 * Note:
 *
 *  * You may not engage in multiple transactions simultaneously (i.e., you must
 *    sell the stock before you buy again).
 *  * The transaction fee is only charged once for each stock purchase and sale.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: prices = [1,3,2,8,4,9], fee = 2
 * Output: 8
 * Explanation: The maximum profit can be achieved by:
 * - Buying at prices[0] = 1
 * - Selling at prices[3] = 8
 * - Buying at prices[4] = 4
 * - Selling at prices[5] = 9
 * The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 *
 *
 * Example 2:
 *
 *
 * Input: prices = [1,3,7,5,10,3], fee = 3
 * Output: 6
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= prices.length <= 5 * 104
 *  * 1 <= prices[i] < 5 * 104
 *  * 0 <= fee < 5 * 104
 *
 *
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
export const maxProfit = (prices, fee) => {
  const memo = [...Array(prices.length)].map(() => Array(2).fill(-1));
  const dp = (index, holding) => {
    if (index >= prices.length) {
      return 0;
    }
    if (memo[index][holding] === -1) {
      memo[index][holding] = holding
        ? Math.max(
            // sell stock today
            dp(index + 1, 0) + prices[index],
            // don't sell stock today
            dp(index + 1, 1)
          )
        : Math.max(
            // buy stock today
            dp(index + 1, 1) - prices[index] - fee,
            // don't buy stock today
            dp(index + 1, 0)
          );
    }
    return memo[index][holding];
  };
  return dp(0, 0);
};
