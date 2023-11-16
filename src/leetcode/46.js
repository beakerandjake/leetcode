/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * Example 2:
 *
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 *
 * Example 3:
 *
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 6
 *  * -10 <= nums[i] <= 10
 *  * All the integers of nums are unique.
 *
 *
 *
 * https://leetcode.com/problems/permutations
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = (nums) => {
  const results = [];
  const backtrack = (current, used) => {
    if (current.length === nums.length) {
      results.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used.has(i)) {
        current.push(nums[i]);
        used.add(i);
        backtrack(current, used);
        current.pop();
        used.delete(i);
      }
    }
  };
  backtrack([], new Set(), 0);
  return results;
};
