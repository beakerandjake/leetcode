/**
 * Convert a non-negative integer num to its English words representation.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = 123
 * Output: "One Hundred Twenty Three"
 *
 *
 * Example 2:
 *
 *
 * Input: num = 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 *
 *
 * Example 3:
 *
 *
 * Input: num = 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= num <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/integer-to-english-words
 */

const specialNumbers = new Map([
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
  [6, 'Six'],
  [7, 'Seven'],
  [8, 'Eight'],
  [9, 'Nine'],
  [10, 'Ten'],
  [11, 'Eleven'],
  [12, 'Twelve'],
  [13, 'Thirteen'],
  [14, 'Fourteen'],
  [15, 'Fifteen'],
  [16, 'Sixteen'],
  [17, 'Seventeen'],
  [18, 'Eighteen'],
  [19, 'Nineteen'],
  [20, 'Twenty'],
  [30, 'Thirty'],
  [40, 'Forty'],
  [50, 'Fifty'],
  [60, 'Sixty'],
  [70, 'Seventy'],
  [80, 'Eighty'],
  [90, 'Ninety'],
]);

const bases = [
  ['Hundred', 100],
  ['Thousand', 1000],
  ['Million', 1_000_000],
  ['Billion', 1_000_000_000],
];

/**
 * @param {number} num
 * @return {string}
 */
export const numberToWords = (num) => {
  const recursive = (x) => {
    if (x === 0) {
      return [];
    }
    if (x <= 20) {
      return [specialNumbers.get(x)];
    }
    if (x < 100) {
      return [specialNumbers.get(x - (x % 10)), ...recursive(x % 10)];
    }
    const [baseStr, baseNum] = bases[Math.floor(Math.log10(x) / 3)];
    return [...recursive(Math.floor(x / baseNum)), baseStr, ...recursive(x % baseNum)];
  };

  return recursive(num).join(' ') || 'Zero';
};
