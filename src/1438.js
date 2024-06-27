/**
 * Given an array of integers nums and an integer limit, return the size of the
 * longest non-empty subarray such that the absolute difference between any two
 * elements of this subarray is less than or equal to limit.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [8,2,4,7], limit = 4
 * Output: 2
 * Explanation: All subarrays are:
 * [8] with maximum absolute diff |8-8| = 0 <= 4.
 * [8,2] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
 * [2] with maximum absolute diff |2-2| = 0 <= 4.
 * [2,4] with maximum absolute diff |2-4| = 2 <= 4.
 * [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
 * [4] with maximum absolute diff |4-4| = 0 <= 4.
 * [4,7] with maximum absolute diff |4-7| = 3 <= 4.
 * [7] with maximum absolute diff |7-7| = 0 <= 4.
 * Therefore, the size of the longest subarray is 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [10,1,2,4,7,2], limit = 5
 * Output: 4
 * Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [4,2,2,2,4,4,2,2], limit = 0
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * 1 <= nums[i] <= 109
 *  * 0 <= limit <= 109
 *
 *
 *
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
 */

import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

const bruteForce = (() => {
  // iterates each subarray of the given array.
  // eslint-disable-next-line func-style
  function* subarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        yield arr.slice(i, j + 1);
      }
    }
  }

  // returns the absolute difference of the array.
  const absoluteDiff = (arr) => Math.max(...arr) - Math.min(...arr);

  return (nums, limit) =>
    Math.max(
      ...[...subarrays(nums)]
        .filter((x) => absoluteDiff(x) <= limit)
        .map((x) => x.length),
    );
})();

const bruteForceTwoPointers = (() => {
  const findMax = (arr, start, end) =>
    start <= end
      ? Math.max(arr[start], findMax(arr, start + 1, end))
      : Number.MIN_SAFE_INTEGER;

  const findMin = (arr, start, end) =>
    start <= end
      ? Math.min(arr[start], findMin(arr, start + 1, end))
      : Number.MAX_SAFE_INTEGER;

  return (nums, limit) => {
    let result = 0;
    let left = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let right = 0; right < nums.length; right++) {
      min = Math.min(min, nums[right]);
      max = Math.max(max, nums[right]);
      while (left < right && max - min > limit) {
        left++;
        min = findMin(nums, left, right);
        max = findMax(nums, left, right);
      }
      result = Math.max(result, right - left + 1);
    }
    return result;
  };
})();

const usingTwoHeaps = (nums, limit) => {
  let result = 0;
  const min = new MinPriorityQueue();
  const max = new MaxPriorityQueue();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    max.enqueue(right, nums[right]);
    min.enqueue(right, nums[right]);
    while (left <= right && max.front().priority - min.front().priority > limit) {
      left++;
      while (!max.isEmpty() && max.front().element < left) {
        max.dequeue();
      }
      while (!min.isEmpty() && min.front().element < left) {
        min.dequeue();
      }
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
export const longestSubarray = usingTwoHeaps;
