/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */

const bottomUp = (nums) => {
  const dp = Array(nums.length).fill(1);
  for (let end = 1; end < dp.length; end++) {
    let best = Number.MIN_SAFE_INTEGER;
    for (let start = 0; start < end; start++) {
      if (nums[start] < nums[end]) {
        best = Math.max(best, dp[start] + 1);
      }
    }
    dp[end] = Math.max(best, 1);
  }
  return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const lengthOfLIS = bottomUp;
