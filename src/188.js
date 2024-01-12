/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
 * Find the maximum profit you can achieve.
 * You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 */

const topDown = (k, prices) => {
  const memo = [...Array(prices.length)].map(() => [...Array(k)].map(() => Array(2)));
  const recursive = (day, sold, holding) => {
    if (day === prices.length || sold === k) {
      return 0;
    }
    if (memo[day][sold][holding] === undefined) {
      const doNothing = recursive(day + 1, sold, holding);
      // buy or sell based on if currently holding a stock or not.
      const action = !holding
        ? -prices[day] + recursive(day + 1, sold, 1)
        : prices[day] + recursive(day + 1, sold + 1, 0);
      memo[day][sold][holding] = Math.max(doNothing, action);
    }
    return memo[day][sold][holding];
  };
  return recursive(0, 0, 0);
};

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = topDown;
