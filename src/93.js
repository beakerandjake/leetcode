/**
 * A valid IP address consists of exactly four integers separated by single dots.
 * Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
 *
 *  * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but
 *    "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Given a string s containing only digits, return all possible valid IP addresses
 * that can be formed by inserting dots into s. You are not allowed to reorder or
 * remove any digits in s. You may return the valid IP addresses in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "25525511135"
 * Output: ["255.255.11.135","255.255.111.35"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "0000"
 * Output: ["0.0.0.0"]
 *
 *
 * Example 3:
 *
 *
 * Input: s = "101023"
 * Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 20
 *  * s consists of digits only.
 *
 *
 *
 * https://leetcode.com/problems/restore-ip-addresses
 */

/* eslint-disable prefer-template */

/**
 * @param {string} s
 * @return {string[]}
 */
export const restoreIpAddresses = (s) => {
  if (s.length < 4 || s.length > 12) {
    return [];
  }
  const result = [];
  const recurse = (index, dots, ip) => {
    if (index >= s.length) {
      // ensure ip has exactly 3 dots appended (number of dots will be 4 in this case)
      if (dots === 4) {
        result.push(ip);
      }
      return;
    }

    // prune branches which will be invalid by having more than three dots
    if (dots > 3) {
      return;
    }

    // prevent leading zeros in segments, any time a zero is encountered start a new segment
    if (s[index] === '0') {
      recurse(index + 1, dots + 1, ip ? `${ip}.${s[index]}` : s[index]);
      return;
    }

    // for current index there are three possibilities
    // place first character only
    // place first and second character
    // place first, second, and third character
    for (let i = 1; i <= 3; i++) {
      if (index + i <= s.length) {
        const segment = s.slice(index, index + i);
        // ensure segment stays within expected limit.
        if (Number(segment) <= 255) {
          recurse(index + i, dots + 1, ip ? `${ip}.${segment}` : segment);
        }
      }
    }
  };
  recurse(0, 0, '');
  return result;
};
