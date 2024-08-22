/**
 * The complement of an integer is the integer you get when you flip all the 0's to
 * 1's and all the 1's to 0's in its binary representation.
 *
 *  * For example, The integer 5 is "101" in binary and its complement is "010"
 *    which is the integer 2.
 *
 * Given an integer num, return its complement.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 1
 * Output: 0
 * Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= num < 231
 *
 *
 *
 * Note: This question is the same as 1009:
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * [https://leetcode.com/problems/complement-of-base-10-integer/]
 *
 *
 *
 * https://leetcode.com/problems/number-complement
 */

const usingArrays = (() => {
  // returns an array representing the bits of the number with the msb at index 0 and the lsb at the last index
  const toBits = (number) => {
    const result = [];
    let current = number;
    while (current) {
      result.push(current % 2);
      current = Math.floor(current / 2);
    }
    return result.reverse();
  };

  // flips a 1 bit to 0 and a 0 bit to 1.
  const flip = (bit) => (bit ? 0 : 1);

  // converts an array of bits to the number it represents
  const toNumber = (bits) =>
    bits.reduce((acc, bit, i) => acc + 2 ** (bits.length - i - 1) * bit, 0);

  return (num) => toNumber(toBits(num).map(flip));
})();

const usingXor = (num) => {
  let result = 0;
  let current = num;
  let mask = 1;
  while (current) {
    // only set result bit if current bit is not set (0 -> 1)
    result |= num & mask ? 0 : mask;
    mask <<= 1;
    current >>= 1;
  }
  return result;
};

/**
 * @param {number} num
 * @return {number}
 */
export const findComplement = usingXor;
