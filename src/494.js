/**
 * You are given an integer array nums and an integer target.
 *
 * You want to build an expression out of nums by adding one of the symbols '+' and
 * '-' before each integer in nums and then concatenate all the integers.
 *
 *  * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1
 *    and concatenate them to build the expression "+2-1".
 *
 * Return the number of different expressions that you can build, which evaluates
 * to target.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,1,1], target = 3
 * Output: 5
 * Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], target = 1
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 20
 *  * 0 <= nums[i] <= 1000
 *  * 0 <= sum(nums[i]) <= 1000
 *  * -1000 <= target <= 1000
 *
 *
 *
 * https://leetcode.com/problems/target-sum
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const findTargetSumWays = (nums, target) => {
  // bail if not possible to reach target.
  if (nums.reduce((acc, x) => acc + x, 0) < Math.abs(target)) {
    return 0;
  }

  const memo = new Map();
  const recurse = (sum, index) => {
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }
    const hash = `${index}.${sum}`;
    if (!memo.has(hash)) {
      const positive = recurse(nums[index] + sum, index + 1);
      const negative = recurse(sum - nums[index], index + 1);
      memo.set(hash, positive + negative);
    }
    return memo.get(hash);
  };
  return recurse(0, 0);
};
