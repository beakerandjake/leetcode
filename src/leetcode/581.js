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

const scanMax = (nums) => {
  const max = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    max.push(Math.max(nums[i], max[i - 1]));
  }
  return max;
};

const scanMin = (nums) => {
  const min = [];
  min[nums.length - 1] = nums.at(-1);
  for (let i = nums.length - 2; i >= 0; i--) {
    min[i] = Math.min(nums[i], min[i + 1]);
  }
  return min;
};

const lastIndexOf = (array, predicate) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i)) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findUnsortedSubarray = (nums) => {
  const max = scanMax(nums);
  const min = scanMin(nums);

  const start = max.findIndex((x, i) => x !== min[i]);
  const end = lastIndexOf(nums, (x, i) => x !== max[i]);

  if (start === -1 && end === -1) {
    return 0;
  }

  return end - start + 1;
};
