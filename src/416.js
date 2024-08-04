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

// returns the sum of the elements in the array
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// returns true if the number is odd
const isOdd = (num) => num % 2 !== 0;

// returns a 2d array of size (m x n) filled with the value
const fill2d = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canPartition = (nums) => {
  const totalSum = sum(nums);
  if (isOdd(totalSum)) {
    return false;
  }
  const maxSubset = Math.floor(totalSum / 2);
  const memo = fill2d(nums.length, maxSubset, null);
  const dp = (index, lSum, rSum) => {
    if (index >= nums.length) {
      return lSum === rSum;
    }
    // prune branch if not possible to make equal subsets
    if (lSum > maxSubset || rSum > maxSubset) {
      return false;
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
