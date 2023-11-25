/**
 * Given 3 positives numbers a, b and c. Return the minimum flips required in some
 * bits of a and b to make ( a OR b == c ). (bitwise OR operation).
 * Flip operation consists of change any single bit 1 to 0 or change the bit 0 to
 * 1 in their binary representation.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png]
 *
 *
 * Input: a = 2, b = 6, c = 5
 * Output: 3
 * Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
 *
 * Example 2:
 *
 *
 * Input: a = 4, b = 2, c = 7
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: a = 1, b = 2, c = 3
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= a <= 10^9
 *  * 1 <= b <= 10^9
 *  * 1 <= c <= 10^9
 *
 *
 *
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c
 */

const isBitSet = (num, index) => (num & (1 << index)) !== 0;

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
export const minFlips = (a, b, c) => {
  let flips = 0;
  for (let i = 0; i < 32; i++) {
    const aBit = isBitSet(a, i);
    const bBit = isBitSet(b, i);
    const cBit = isBitSet(c, i);
    if ((aBit || bBit) !== cBit) {
      flips += !cBit && aBit && bBit ? 2 : 1;
    }
  }
  return flips;
};
