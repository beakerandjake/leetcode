/**
 * Given two non-negative integers, num1 and num2 represented as string, return the
 * sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large
 * integers (such as BigInteger). You must also not convert the inputs to integers
 * directly.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 *
 * Example 3:
 *
 *
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= num1.length, num2.length <= 104
 *  * num1 and num2 consist of only digits.
 *  * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 *
 *
 * https://leetcode.com/problems/add-strings
 */

const toDigit = (() => {
  const digitMap = new Map([
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
  ]);
  return (char) => digitMap.get(char);
})();

const toStr = (digit) => `${digit}`;

const reverse = (str) => [...str].reverse().join('');

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addStrings = (a, b) => {
  const output = Array(Math.max(a.length, b.length)).fill('');
  let aIndex = 0;
  let bIndex = 0;
  let carry = 0;
  const aRev = reverse(a);
  const bRev = reverse(b);

  for (let i = 0; i < output.length; i++) {
    const left = aIndex < aRev.length ? toDigit(aRev[aIndex]) : 0;
    const right = bIndex < bRev.length ? toDigit(bRev[bIndex]) : 0;
    const result = left + right + carry;
    output[i] = result >= 10 ? toStr(result)[1] : toStr(result);
    carry = result >= 10 ? 1 : 0;
    aIndex++;
    bIndex++;
  }

  if (carry) {
    output.push('1');
  }

  return output.reverse().join('');
};
