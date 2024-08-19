/**
 * There is only one character 'A' on the screen of a notepad. You can perform one
 * of two operations on this notepad for each step:
 *
 *  * Copy All: You can copy all the characters present on the screen (a partial
 *    copy is not allowed).
 *  * Paste: You can paste the characters which are copied last time.
 *
 * Given an integer n, return the minimum number of operations to get the character
 * 'A' exactly n times on the screen.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: Initially, we have one character 'A'.
 * In step 1, we use Copy All operation.
 * In step 2, we use Paste operation to get 'AA'.
 * In step 3, we use Paste operation to get 'AAA'.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 1000
 *
 *
 *
 * https://leetcode.com/problems/2-keys-keyboard
 */

const MAX_STEPS = 1000;

/**
 * @param {number} n
 * @return {number}
 */
export const minSteps = (n) => {
  const memo = Array(MAX_STEPS).fill(null);
  if (n === 1) {
    return 0;
  }

  const dp = (chars, buffer) => {
    if (chars > n) {
      return MAX_STEPS;
    }
    if (chars === n) {
      return 0;
    }
    if (!memo[chars]) {
      /**
       * Each step of recursion gives us a choice
       *  1. Perform a paste and continue on with the current buffer.
       *  2. Perform a copy and continue with a new buffer equal to the current length of chars.
       *
       * The only exception is when the buffer is equal to the current length of the chars, in that
       * case copying would do nothing, so the only option there is to perform a paste
       */
      return buffer === chars
        ? 1 + dp(chars + buffer, buffer)
        : 1 + Math.min(dp(chars + buffer, buffer), dp(chars, chars));
    }
    return memo[chars];
  };
  return 1 + dp(1, 1);
};
