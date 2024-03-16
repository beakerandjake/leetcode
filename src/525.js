/**
 * Given a binary array nums, return the maximum length of a contiguous subarray
 * with an equal number of 0 and 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * nums[i] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/contiguous-array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxLength = (nums) => {
  const memo = new Map();
  const dp = (index, startIndex, zeros, ones) => {
    if (index >= nums.length) {
      return zeros > 0 && zeros === ones ? index - startIndex : 0;
    }
    const newOnes = nums[index] === 1 ? ones + 1 : ones;
    const newZeros = nums[index] === 0 ? zeros + 1 : zeros;
    if (startIndex != null) {
      return Math.max(
        newOnes === newZeros ? index - startIndex + 1 : 0,
        dp(index + 1, startIndex, newZeros, newOnes)
      );
    }
    return Math.max(dp(index + 1, null, 0, 0), dp(index + 1, index, newZeros, newOnes));
  };
  return dp(0, null, 0, 0);
};
