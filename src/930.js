/**
 * Given a binary array nums and an integer goal, return the number of non-empty
 * subarrays with a sum goal.
 *
 * A subarray is a contiguous part of the array.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,1,0,1], goal = 2
 * Output: 4
 * Explanation: The 4 subarrays are bolded and underlined below:
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,0,0,0], goal = 0
 * Output: 15
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 3 * 104
 *  * nums[i] is either 0 or 1.
 *  * 0 <= goal <= nums.length
 *
 *
 *
 * https://leetcode.com/problems/binary-subarrays-with-sum
 */

const bruteForce = (() => {
  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

  const subarrays = (arr, visitFn) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        visitFn(arr.slice(i, j + 1));
      }
    }
  };

  return (nums, goal) => {
    let count = 0;
    subarrays(nums, (subarray) => {
      if (sum(subarray) === goal) {
        count++;
      }
    });
    return count;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
export const numSubarraysWithSum = bruteForce;
