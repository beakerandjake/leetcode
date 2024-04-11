/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
 * rows like this: (you may want to display this pattern in a fixed font for better
 * legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number
 * of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 *
 * Example 3:
 *
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 1000
 *  * s consists of English letters (lower-case and upper-case), ',' and '.'.
 *  * 1 <= numRows <= 1000
 *
 *
 *
 * https://leetcode.com/problems/zigzag-conversion
 */

// returns a function which returns a value each time called
// the value will oscillate between 0 (inclusive) and n (exclusive)
const oscillator = (n) => {
  if (n <= 1) {
    throw new RangeError('min value to oscillate between is 2');
  }
  let current = -1;
  let direction = 1;
  return () => {
    const next = current + direction;
    if (next === n || next === -1) {
      direction *= -1;
    }
    current += direction;
    return current;
  };
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  const rows = [...Array(numRows)].map(() => []);
  const zigZagIndex = oscillator(numRows);
  for (let i = 0; i < s.length; i++) {
    rows[zigZagIndex()].push(s[i]);
  }
  return rows.map((row) => row.join('')).join('');
};
