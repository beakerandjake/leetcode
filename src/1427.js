/**
 * You are given a string s containing lowercase English letters, and a matrix
 * shift, where shift[i] = [directioni, amounti]:
 *
 *  * directioni can be 0 (for left shift) or 1 (for right shift).
 *  * amounti is the amount by which string s is to be shifted.
 *  * A left shift by 1 means remove the first character of s and append it to the
 *    end.
 *  * Similarly, a right shift by 1 means remove the last character of s and add it
 *    to the beginning.
 *
 * Return the final string after all operations.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abc", shift = [[0,1],[1,2]]
 * Output: "cab"
 * Explanation:
 * [0,1] means shift to left by 1. "abc" -> "bca"
 * [1,2] means shift to right by 2. "bca" -> "cab"
 *
 * Example 2:
 *
 *
 * Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
 * Output: "efgabcd"
 * Explanation:
 * [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
 * [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
 * [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
 * [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 100
 *  * s only contains lower case English letters.
 *  * 1 <= shift.length <= 100
 *  * shift[i].length == 2
 *  * directioni is either 0 or 1.
 *  * 0 <= amounti <= 100
 *
 *
 *
 * https://leetcode.com/problems/perform-string-shifts
 */

// returns the direction of the shift.
const dir = (shift) => shift[0];

// returns the amount of the shift.
const amount = (shift) => shift[1];

// sums all of the numbers in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// performs a left shift of amount n and returns the new string
const leftShift = (str, n) => str.slice(n) + str.slice(0, n);

// performs a right shift of amount n and returns the new string.
const rightShift = (str, n) => str.slice(-n) + str.slice(0, -n);

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
export const stringShift = (s, shift) => {
  const leftShifts = sum(shift.filter((x) => dir(x) === 0).map(amount));
  const rightShifts = sum(shift.filter((x) => dir(x) === 1).map(amount));
  return leftShifts > rightShifts
    ? leftShift(s, (leftShifts - rightShifts) % s.length)
    : rightShift(s, (rightShifts - leftShifts) % s.length);
};
