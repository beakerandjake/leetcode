/**
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 100
 *  * 1 <= nums[i] <= 100
 *
 *
 *
 * https://leetcode.com/problems/number-of-good-pairs
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const numIdenticalPairs = (nums) => {
  const counts = new Map();
  return nums.reduce((acc, x) => {
    const previous = counts.get(x) || 0;
    counts.set(x, previous + 1);
    return acc + previous;
  }, 0);
};
