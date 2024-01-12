/**
 * Given an array of integers nums and an integer k, return the total number of
 * subarrays whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 *
 * Example 2:
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 2 * 104
 *  * -1000 <= nums[i] <= 1000
 *  * -107 <= k <= 107
 *
 *
 *
 * https://leetcode.com/problems/subarray-sum-equals-k
 */

const runningSum = (nums, k) => {
  let found = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum === k) {
        found++;
      }
    }
  }
  return found;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraySum = (nums, k) => {
  let found = 0;
  let sum = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      found += 1;
    }
    if (map.has(sum - k)) {
      found += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return found;
};
