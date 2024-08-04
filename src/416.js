/**
 * Given an integer array nums, return true if you can partition the array into two
 * subsets such that the sum of the elements in both subsets is equal or false
 * otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,5,11,5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 200
 *  * 1 <= nums[i] <= 100
 *
 *
 *
 * https://leetcode.com/problems/partition-equal-subset-sum
 */

const usingDp = (nums) => {
  const memo = [...Array(nums.length)].map(() => Array(nums.length * 200).fill(null));
  const dp = (index, lSum, rSum) => {
    if (index >= nums.length) {
      return lSum === rSum;
    }
    if (memo[index][lSum] == null) {
      const result =
        dp(index + 1, lSum + nums[index], rSum) ||
        dp(index + 1, lSum, rSum + nums[index]);
      memo[index][lSum] = result;
    }
    return memo[index][lSum];
  };
  return dp(0, 0, 0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canPartition = usingDp;
