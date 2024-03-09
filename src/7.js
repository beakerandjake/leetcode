/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing
 * x causes the value to go outside the signed 32-bit integer range [-231, 231 -
 * 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or
 * unsigned).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: x = -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: x = 120
 * Output: 21
 *
 *
 *
 *
 * Constraints:
 *
 *  * -231 <= x <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/reverse-integer
 */

// returns an array of digits which make up the number.
const toDigits = (number) => {
  const results = [];
  let remaining = Math.abs(number);
  while (remaining) {
    results.push(`${remaining % 10}`);
    remaining = Math.floor(remaining / 10);
  }
  return results.reverse();
};

// the digits of the max positive number.
const MAX_POSITIVE = toDigits(2 ** 31 - 1);

// the digits of the smallest negative number.
const MAX_NEGATIVE = toDigits(2 ** 31);

// checks if the number formed by the digits is less than or equal to the number formed by the max digits
const isSafeInteger = (digits, maxDigits) => {
  if (digits.length > maxDigits.length) {
    return false;
  }
  if (digits.length < maxDigits.length) {
    return true;
  }
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > maxDigits[i]) {
      return false;
    }
    if (digits[i] < maxDigits[i]) {
      return true;
    }
  }
  return true;
};

// converts the digits into a positive or negative number.
const toNumber = (digits, sign) => {
  let number = 0;
  for (let i = 0; i < digits.length; i++) {
    number += 10 ** (digits.length - i - 1) * digits[i];
  }
  return number * sign;
};

/**
 * @param {number} x
 * @return {number}
 */
export const reverse = (x) => {
  if (!x) {
    return x;
  }
  const sign = Math.sign(x);
  const reversed = toDigits(x).reverse();
  return isSafeInteger(reversed, sign === 1 ? MAX_POSITIVE : MAX_NEGATIVE)
    ? toNumber(reversed, sign)
    : 0;
};
