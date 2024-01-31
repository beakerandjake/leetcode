/**
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
 *
 *
 * Example 2:
 *
 *
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 *
 *
 * Example 3:
 *
 *
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= num.length <= 105
 *  * num consists of only digits.
 *  * num does not have any leading zeros except for the zero itself.
 *
 *
 *
 * https://leetcode.com/problems/remove-k-digits
 */

const toNumber = (str) => {
  let trimmed = str;
  while (trimmed[0] === '0') {
    trimmed = trimmed.slice(1);
  }
  return Number.parseInt(trimmed || '0', 10);
};

const removeAt = (str, index) =>
  [...str.slice(0, index), ...str.slice(index + 1)].join('');

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeKdigits = (num, k) => {
  if (!num || num.length <= k) {
    return '0';
  }
  let smallest = toNumber(num);
  const recurse = (str, index, remaining) => {
    if (remaining <= 0 || index >= str.length) {
      smallest = Math.min(smallest, toNumber(str));
      return;
    }
    recurse(str, index + 1, remaining);
    recurse(removeAt(str, index), index, remaining - 1);
  };
  recurse(num, 0, k);
  return `${smallest}`;
};
