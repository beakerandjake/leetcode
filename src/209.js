/**
 * Given an array of positive integers nums and a positive integer target, return
 * the minimal length of a subarray whose sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 *
 * Example 2:
 *
 *
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= target <= 109
 *  * 1 <= nums.length <= 105
 *  * 1 <= nums[i] <= 104
 *
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution of which the time complexity is O(n log(n)).
 *
 *
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum
 */

const bruteForce = (() => {
  const subarray = (arr, visitFn) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        visitFn(i, j);
      }
    }
  };

  const prefixSum = (arr) => {
    let sum = 0;
    return arr.map((x) => {
      sum += x;
      return sum;
    });
  };

  return (target, nums) => {
    let minLength = Number.MAX_SAFE_INTEGER;
    const sums = prefixSum(nums);
    subarray(nums, (from, to) => {
      const sum = sums[to] - sums[from] + nums[from];
      if (sum >= target) {
        minLength = Math.min(to - from + 1, minLength);
      }
    });
    return minLength !== Number.MAX_SAFE_INTEGER ? minLength : 0;
  };
})();

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = bruteForce;
