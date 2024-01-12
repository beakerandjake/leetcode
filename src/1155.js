/**
 * You have n dice, and each die has k faces numbered from 1 to k.
 * Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target.
 * Since the answer may be too large, return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
export const numRollsToTarget = (n, k, target) => {
  const mod = 1e9 + 7;
  const memo = new Map();
  const recurse = (remainingDice, currentSum) => {
    if (remainingDice === 0) {
      return 1;
    }
    const hash = `${remainingDice},${currentSum}`;
    if (!memo.has(hash)) {
      let ways = 0;
      for (let i = 1; i <= k; i++) {
        const newSum = currentSum + i;
        // skip branch if can't possibly produce target.
        if (
          newSum + 1 * (remainingDice - 1) > target ||
          newSum + k * (remainingDice - 1) < target
        ) {
          continue;
        }
        ways = (ways + recurse(remainingDice - 1, newSum)) % mod;
      }
      memo.set(hash, ways);
    }
    return memo.get(hash);
  };
  return recurse(n, 0);
};
