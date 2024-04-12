/**
 * Given a circular integer array nums of length n, return the maximum possible sum
 * of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the
 * array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the
 * previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once.
 * Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not
 * exist i <= k1, k2 <= j with k1 % n == k2 % n.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5,-3,5]
 * Output: 10
 * Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [-3,-2,-3]
 * Output: -2
 * Explanation: Subarray [-2] has maximum sum -2.
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == nums.length
 *  * 1 <= n <= 3 * 104
 *  * -3 * 104 <= nums[i] <= 3 * 104
 *
 *
 *
 * https://leetcode.com/problems/maximum-sum-circular-subarray
 */

const bruteForce = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    maxSum = Math.max(currentSum, maxSum);
    for (let j = 1; j < nums.length; j++) {
      currentSum += nums[(i + j) % nums.length];
      maxSum = Math.max(currentSum, maxSum);
    }
  }
  return maxSum;
};

const modifiedKadane = (nums) => {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let currentMax = 0;
  let currentMin = 0;
  let totalSum = 0;
  for (const num of nums) {
    currentMax = Math.max(num, currentMax + num);
    max = Math.max(max, currentMax);
    currentMin = Math.min(num, currentMin + num);
    min = Math.min(min, currentMin);
    totalSum += num;
  }
  return max > 0 ? Math.max(max, totalSum - min) : max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubarraySumCircular = modifiedKadane;
