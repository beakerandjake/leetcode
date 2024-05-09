/**
 * Given a set of distinct positive integers nums, return the largest subset answer
 * such that every pair (answer[i], answer[j]) of elements in this subset
 * satisfies:
 *
 *  * answer[i] % answer[j] == 0, or
 *  * answer[j] % answer[i] == 0
 *
 * If there are multiple solutions, return any of them.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [1,2]
 * Explanation: [1,3] is also accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,4,8]
 * Output: [1,2,4,8]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 1000
 *  * 1 <= nums[i] <= 2 * 109
 *  * All the integers in nums are unique.
 *
 *
 *
 * https://leetcode.com/problems/largest-divisible-subset
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const largestDivisibleSubset = (nums) => {
  const memo = new Map();
  const sorted = [...nums].sort((a, b) => a - b);
  const dp = (index, previous) => {
    if (index >= sorted.length) {
      return [];
    }
    const hash = `${index}_${previous}`;
    if (!memo.has(hash)) {
      const skip = dp(index + 1, previous);
      const take =
        sorted[index] % previous === 0
          ? [sorted[index], ...dp(index + 1, sorted[index])]
          : [];
      memo.set(hash, skip.length > take.length ? skip : take);
    }
    return memo.get(hash);
  };
  return dp(0, 1);
};
