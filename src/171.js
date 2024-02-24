/**
 * Given a string columnTitle that represents the column title as appears in an
 * Excel sheet, return its corresponding column number.
 *
 * For example:
 *
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: columnTitle = "A"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: columnTitle = "AB"
 * Output: 28
 *
 *
 * Example 3:
 *
 *
 * Input: columnTitle = "ZY"
 * Output: 701
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= columnTitle.length <= 7
 *  * columnTitle consists only of uppercase English letters.
 *  * columnTitle is in the range ["A", "FXSHRXW"].
 *
 *
 *
 * https://leetcode.com/problems/excel-sheet-column-number
 */

const COLUMN_START = 'A'.charCodeAt(0) - 1;

// maps a column (A-Z) to a digit (1-26)
const toDigit = (column) => column.charCodeAt(0) - COLUMN_START;

/**
 * @param {string} columnTitle
 * @return {number}
 */
export const titleToNumber = (columnTitle) =>
  [...columnTitle].reverse().reduce((acc, x, i) => acc + 26 ** i * toDigit(x), 0);
