/**
 * You are given a binary array nums and an integer k.
 *
 * A k-bit flip is choosing a subarray of length k from nums and simultaneously
 * changing every 0 in the subarray to 1, and every 1 in the subarray to 0.
 *
 * Return the minimum number of k-bit flips required so that there is no 0 in the
 * array. If it is not possible, return -1.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1,0], k = 1
 * Output: 2
 * Explanation: Flip nums[0], then flip nums[2].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,0], k = 2
 * Output: -1
 * Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0,1,0,1,1,0], k = 3
 * Output: 3
 * Explanation:
 * Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0]
 * Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0]
 * Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * 1 <= k <= nums.length
 *
 *
 *
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips
 */

const bruteForce = (() => {
  const flip = (value) => Number(!value);

  const flipNext = (arr, start, length) => {
    for (let i = 0; i < length; i++) {
      if (i >= arr.length) {
        break;
      }
      arr[start + i] = flip(arr[start + i]);
    }
  };

  const allOnes = (arr) => arr.every((x) => x === 1);

  return (nums, k) => {
    let result = 0;
    const flipped = [...nums];
    for (let i = 0; i <= flipped.length - k; i++) {
      if (flipped[i] === 1) {
        continue;
      }
      flipNext(flipped, i, k);
      result++;
    }
    return allOnes(flipped) ? result : -1;
  };
})();

const usingLookupArray = (nums, k) => {
  let result = 0;
  let flipCount = 0;
  const flipLookup = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if ((!nums[i] && flipCount % 2 === 0) || (nums[i] && flipCount % 2 !== 0)) {
      if (i + k - 1 >= nums.length) {
        return -1;
      }
      result++;
      flipCount++;
      flipLookup[i + k - 1] = 1;
    }
    if (flipLookup[i]) {
      flipCount--;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const minKBitFlips = usingLookupArray;
