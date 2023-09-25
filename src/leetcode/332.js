/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

const topDown = (coins, amount) => {
  const memo = [...Array(amount)];
  const recursive = (remaining) => {
    if (remaining < 0) {
      return -1;
    }
    if (remaining === 0) {
      return 0;
    }
    if (memo[remaining] == null) {
      let best = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < coins.length; i++) {
        const result = recursive(remaining - coins[i]);
        if (result >= 0 && result < best) {
          best = 1 + result;
        }
      }
      memo[remaining] = best === Number.MAX_SAFE_INTEGER ? -1 : best;
    }
    return memo[remaining];
  };
  return recursive(amount);
};

const bottomUp = (coins, amount) => {
  const dp = [0, ...Array(amount).fill(Number.MAX_SAFE_INTEGER)];
  for (let remaining = 1; remaining < dp.length; remaining++) {
    for (let coin = 0; coin < coins.length; coin++) {
      const diff = remaining - coins[coin];
      if (diff < 0) {
        continue;
      }
      dp[remaining] = Math.min(dp[remaining], dp[diff] + 1);
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = bottomUp;
