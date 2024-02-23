/**
 * Given an integer n, return true if it is a power of two. Otherwise, return
 * false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 1
 * Output: true
 * Explanation: 20 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: n = 16
 * Output: true
 * Explanation: 24 = 16
 *
 *
 * Example 3:
 *
 *
 * Input: n = 3
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * -231 <= n <= 231 - 1
 *
 *
 *
 * Follow up: Could you solve it without loops/recursion?
 *
 *
 *
 * https://leetcode.com/problems/power-of-two
 */

const recursive = (n) => {
  if (n < 1) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n % 2 !== 0) {
    return false;
  }
  return recursive(n / 2);
};

const iterative = (n) => {
  if (n < 1) {
    return false;
  }
  let current = n;
  while (current > 1 && current % 2 === 0) {
    current >>= 1;
  }
  return current === 1;
};

const usingLookup = (() => {
  const powers = new Set([...Array(32)].map((_, i) => 2 ** i));
  return (n) => n > 0 && powers.has(n);
})();

const usingLog = (n) => n > 0 && Number.isInteger(Math.log2(n));

const usingBitCount = (() => {
  const popCount = (n) => {
    let current = n;
    let count = 0;
    while (current) {
      count += current & 1;
      current >>= 1;
    }
    return count;
  };
  return (n) => n > 0 && popCount(n) === 1;
})();

const usingBitLogic = (n) => n > 0 && ((n - 1) ^ n) === n * 2 - 1;

/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = usingBitLogic;
