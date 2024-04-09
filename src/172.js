/**
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 0
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= n <= 104
 *
 *
 *
 * Follow up: Could you write a solution that works in logarithmic time complexity?
 *
 *
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes
 */

const bruteForce = (() => {
  const factorial = (n) => (n > 2n ? n * factorial(n - 1n) : n);

  const trailingZeroCount = (n) => {
    if (n <= 0n) {
      return 0;
    }
    if (n % 10n !== 0n) {
      return 0;
    }
    return 1 + trailingZeroCount(n / 10n);
  };

  return (n) => trailingZeroCount(factorial(BigInt(n)));
})();

/**
 * @param {number} n
 * @return {number}
 */
export const trailingZeroes = bruteForce;
