/**
 * A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs
 * on the bottom to represent the minutes (0-59). Each LED represents a zero or
 * one, with the least significant bit on the right.
 *
 *  * For example, the below binary watch reads "4:51".
 *
 * [https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg]
 *
 * Given an integer turnedOn which represents the number of LEDs that are currently
 * on (ignoring the PM), return all possible times the watch could represent. You
 * may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *
 *  * For example, "01:00" is not valid. It should be "1:00".
 *
 * The minute must consist of two digits and may contain a leading zero.
 *
 *  * For example, "10:2" is not valid. It should be "10:02".
 *
 *
 *
 * Example 1:
 *
 * Input: turnedOn = 1
 * Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 *
 *
 * Example 2:
 *
 * Input: turnedOn = 9
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= turnedOn <= 10
 *
 *
 *
 * https://leetcode.com/problems/binary-watch
 */

// returns the number of bits set to 1
const popCount = (binary) => {
  let count = 0;
  let remaining = binary;
  while (remaining > 0) {
    if ((remaining & 1) === 1) {
      count++;
    }
    remaining /= 2;
  }
  return count;
};

// returns the hour of the binary clocks time.
const hour = (binary) => (binary & 0b1111000000) >> 6;

// returns the minute of the binary clocks time.
const minute = (binary) => binary & 0b0000111111;

// does the binary represent a valid time?
const isValid = (binary) => hour(binary) <= 11 && minute(binary) <= 59;

// all possible valid values of the binary clock.
const validBinaryTimes = [...Array(2 ** 10)].map((_, i) => i).filter(isValid);

// formats the time into the expected string.
const formatTime = (h, m) => `${h}:${m.toString().padStart(2, '0')}`;

// maps pop count to all valid times.
const popCountMap = validBinaryTimes.reduce((acc, x) => {
  const key = popCount(x);
  const value = formatTime(hour(x), minute(x));
  if (acc.has(key)) {
    acc.get(key).push(value);
  } else {
    acc.set(key, [value]);
  }
  return acc;
}, new Map());

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
export const readBinaryWatch = (turnedOn) => popCountMap.get(turnedOn) || [];
