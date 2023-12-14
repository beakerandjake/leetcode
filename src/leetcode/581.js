/**
 * Given an integer array nums, you need to findLastIndex() one continuous subarray such that
 * if you only sort this subarray in non-decreasing order, then the whole array
 * will be sorted in non-decreasing order.
 *
 * Return the shortest such subarray and output its length.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,6,4,8,10,9,15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: 0
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 104
 *  * -105 <= nums[i] <= 105
 *
 *
 *
 * Follow up: Can you solve it in O(n) time complexity?
 *
 *
 *
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray
 */

const findStart = (nums) => {
  let start = -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = nums.length - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      start = i;
    }
  }
  return start;
};

const findEnd = (nums) => {
  let end = -1;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      end = i;
    }
  }
  return end;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findUnsortedSubarray = (nums) => {
  const start = findStart(nums);
  const end = findEnd(nums);
  return start !== -1 && end !== -1 ? end - start + 1 : 0;
};
