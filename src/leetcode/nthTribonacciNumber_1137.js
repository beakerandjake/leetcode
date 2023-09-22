/**
 * The Tribonacci sequence Tn is defined as follows:
 *   T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */

const topDown = (n) => {
  const memo = new Map();
  const recursive = (x) => {
    if (x === 0) {
      return 0;
    }
    if (x <= 2) {
      return 1;
    }
    if (!memo.has(x)) {
      memo.set(x, recursive(x - 1) + recursive(x - 2) + recursive(x - 3));
    }
    return memo.get(x);
  };
  return recursive(n);
};

const bottomUp = (n) => {
  const history = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    history[i] = history[i - 1] + history[i - 2] + history[i - 3];
  }
  return history[n];
};

/**
 * @param {number} n
 * @return {number}
 */
export const tribonacci = bottomUp;
