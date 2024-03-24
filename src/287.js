/**
 * Given an array of integers nums containing n + 1 integers where each integer is
 * in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only
 * constant extra space.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 105
 *  * nums.length == n + 1
 *  * 1 <= nums[i] <= n
 *  * All the integers in nums appear only once except for precisely one integer
 *    which appears two or more times.
 *
 *
 *
 * Follow up:
 *
 *  * How can we prove that at least one duplicate number must exist in nums?
 *  * Can you solve the problem in linear runtime complexity?
 *
 *
 *
 * https://leetcode.com/problems/find-the-duplicate-number
 */

const usingSet = (nums) => {
  const visited = new Set();
  for (const num of nums) {
    if (visited.has(num)) {
      return num;
    }
    visited.add(num);
  }
  return -1;
};

const usingBitVector = (() => {
  /**
   * Returns a constant sized lookup.
   * Range of N is 1 - 10**5 (100,000).
   * Use array of 32 bit ints where each bit represents whether or not that num was seen.
   * Need at least 10**5 bits, closest power of 2 is 2**17 (131,072).
   * To pack 2**17 bits using 32 bit blocks you get 2**17 / 32 = 4096
   */
  const getLookup = () => Array(4096).fill(0);

  // returns the index of the 32 bit chunk in the lookup arr where the number is stored.
  const chunkIndex = (num) => Math.floor(num / 32);

  // returns the bit index in a chunk where the number is stored.
  const bitIndex = (num) => num % 32;

  // returns true if the number is included in the lookup.
  const visited = (lookup, num) => lookup[chunkIndex(num)] & (1 << bitIndex(num));

  const markVisited = (lookup, num) => {
    lookup[chunkIndex(num)] |= 1 << bitIndex(num);
  };

  // it's technically constant time!
  return (nums) => {
    const lookup = getLookup();
    for (const num of nums) {
      if (visited(lookup, num)) {
        return num;
      }
      markVisited(lookup, num);
    }
    return -1;
  };
})();

const usingBinarySearch = (() => {
  const countLte = (arr, num) => arr.reduce((acc, x) => (x <= num ? acc + 1 : acc), 0);

  return (nums) => {
    let duplicate = -1;
    let left = 1;
    let right = nums.length - 1;
    while (left <= right) {
      const m = left + Math.floor((right - left) / 2);
      if (countLte(nums, m) > m) {
        duplicate = m;
        right = m - 1;
      } else {
        left = m + 1;
      }
    }
    return duplicate;
  };
})();

const usingCycleDetection = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  for (;;) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findDuplicate = usingCycleDetection;
