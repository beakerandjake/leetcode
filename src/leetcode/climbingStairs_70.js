/**
 * You are climbing a staircase.
 * It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

const topDown = (count) => {
  const memo = new Map();
  const recursive = (n) => {
    if (n <= 2) {
      return n;
    }
    if (!memo.has(n)) {
      memo.set(n, recursive(n - 1) + recursive(n - 2));
    }
    return memo.get(n);
  };
  return recursive(count);
};

const bottomUp = (count) => {
  const history = [1, 2];
  for (let i = 2; i < count; i++) {
    history[i] = history[i - 1] + history[i - 2];
  }
  return history[count - 1];
};

/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = bottomUp;
