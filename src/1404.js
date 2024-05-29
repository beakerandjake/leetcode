/**
 * Given the binary representation of an integer as a string s, return the number
 * of steps to reduce it to 1 under the following rules:
 *
 *  * If the current number is even, you have to divide it by 2.
 *
 *  * If the current number is odd, you have to add 1 to it.
 *
 * It is guaranteed that you can always reach one for all test cases.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "1101"
 * Output: 6
 * Explanation: "1101" corressponds to number 13 in their decimal representation.
 * Step 1) 13 is odd, add 1 and obtain 14.
 * Step 2) 14 is even, divide by 2 and obtain 7.
 * Step 3) 7 is odd, add 1 and obtain 8.
 * Step 4) 8 is even, divide by 2 and obtain 4.
 * Step 5) 4 is even, divide by 2 and obtain 2.
 * Step 6) 2 is even, divide by 2 and obtain 1.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "10"
 * Output: 1
 * Explanation: "10" corressponds to number 2 in their decimal representation.
 * Step 1) 2 is even, divide by 2 and obtain 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "1"
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 500
 *  * s consists of characters '0' or '1'
 *  * s[0] == '1'
 *
 *
 *
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
 */

// returns true if the binary string represents a value of exactly one.
const equalsOne = (digits) => {
  if (digits.at(-1) === '0') {
    return false;
  }
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] === '1') {
      return false;
    }
  }
  return true;
};

// returns true if the number represented by the binary string is even.
const isEven = (digits) => digits.at(-1) === '0';

// returns a new binary string formed by shifting the original digits to the right once.
const rightShift = (digits) => `0${digits.slice(0, -1)}`;

// returns the sum and carry bits which result from adding the two bits together.
const halfAdder = (a, b) => [a ^ b, a & b];

// returns a new binary string which is the result of adding one to the original binary string.
const addOne = (digits) => {
  const result = [];
  let carry = 1;
  let index = digits.length - 1;
  while (index >= 0 && carry) {
    const [sum, newCarry] = halfAdder(Number(digits[index]), carry);
    result.push(`${sum}`);
    carry = newCarry;
    index--;
  }
  if (carry) {
    result.push('1');
  }
  return index < 0
    ? result.reverse().join('')
    : digits.slice(0, index + 1) + result.reverse().join('');
};

/**
 * @param {string} s
 * @return {number}
 */
export const numSteps = (s) => {
  if (equalsOne(s)) {
    return 0;
  }
  return 1 + (isEven(s) ? numSteps(rightShift(s)) : numSteps(addOne(s)));
};
