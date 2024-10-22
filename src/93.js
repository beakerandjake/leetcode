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

// returns true if the string represents a valid ip octet.
const isValid = (octet) => {
  // need 1-3 digits.
  if (octet.length < 1 || octet.length > 3) {
    return false;
  }
  // any single digit is valid.
  if (octet.length === 1) {
    return true;
  }
  // cannot have leading zeros
  if (octet[0] === '0') {
    return false;
  }
  // any two digit number is valid
  // any three digit number less than 255 is valid.
  return octet.length < 3 || Number(octet) < 256;
};

// converts a valid octet array to an ip string.
const toIp = (octets) => octets.join('.');

/**
 * @param {string} str
 * @return {string[]}
 */
export const restoreIpAddresses = (str) => {
  const result = [];
  const backtrack = (digits, octets) => {
    if (octets.length === 3) {
      if (isValid(digits)) {
        result.push(toIp([...octets, digits]));
      }
      return;
    }
    // can form octet from up to three digits from source
    for (let i = 1; i < 4; i++) {
      const octet = digits.slice(0, i);
      if (isValid(octet)) {
        octets.push(octet);
        backtrack(digits.slice(i), octets);
        octets.pop();
      }
    }
  };
  backtrack(str, []);
  return result;
};
