/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

const topDown = (coins, amount) => {
  const memo = new Map();
  const recursive = (remaining) => {
    if (remaining < 0) {
      return -1;
    }
    if (remaining === 0) {
      return 0;
    }
    if (!memo.has(remaining)) {
      let best = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < coins.length; i++) {
        const result = recursive(remaining - coins[i]);
        if (result >= 0 && result < best) {
          best = 1 + result;
        }
      }
      memo.set(remaining, best === Number.MAX_SAFE_INTEGER ? -1 : best);
    }

    return memo.get(remaining);
  };
  return recursive(amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = topDown;
