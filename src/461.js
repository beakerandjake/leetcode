/**
 * The Hamming distance [https://en.wikipedia.org/wiki/Hamming_distance] between
 * two integers is the number of positions at which the corresponding bits are
 * different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 3, y = 1
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= x, y <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/hamming-distance
 */

const popCount = (number) => (number > 0 ? popCount(number >> 1) + (number & 1) : 0);

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const hammingDistance = (x, y) => popCount(x ^ y);
