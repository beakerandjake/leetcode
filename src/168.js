/**
 * Given an integer columnNumber, return its corresponding column title as it
 * appears in an Excel sheet.
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
 * Input: columnNumber = 1
 * Output: "A"
 *
 *
 * Example 2:
 *
 *
 * Input: columnNumber = 28
 * Output: "AB"
 *
 *
 * Example 3:
 *
 *
 * Input: columnNumber = 701
 * Output: "ZY"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= columnNumber <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/excel-sheet-column-title
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
export const convertToTitle = (columnNumber) => {
  // generate array of [A...Z]
  const columns = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const output = [];
  let remaining = columnNumber;
  while (remaining) {
    // excel starts at 1 not 0, sub 1 from remaining to map range correctly.
    const char = columns[(remaining - 1) % 26];
    output.push(char);
    remaining = Math.floor((remaining - 1) / 26);
  }
  return output.reverse().join('');
};
