/**
 * Given an integer array nums and an integer k, return true if nums has a good
 * subarray or false otherwise.
 *
 * A good subarray is a subarray where:
 *
 *  * its length is at least two, and
 *  * the sum of the elements of the subarray is a multiple of k.
 *
 * Note that:
 *
 *  * A subarray is a contiguous part of the array.
 *  * An integer x is a multiple of k if there exists an integer n such that x = n
 *    * k. 0 is always a multiple of k.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [23,2,4,6,7], k = 6
 * Output: true
 * Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [23,2,6,4,7], k = 6
 * Output: true
 * Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
 * 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [23,2,6,4,7], k = 13
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * 0 <= nums[i] <= 109
 *  * 0 <= sum(nums[i]) <= 231 - 1
 *  * 1 <= k <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/continuous-subarray-sum
 */

const bruteForce = (nums, k) => {
  const recurse = (current, start, sum) => {
    if (current >= nums.length) {
      return false;
    }
    // if currently in subarray, continue with it
    if (start != null) {
      const newSum = nums[current] + sum;
      if (newSum === 0 || newSum % k === 0) {
        return true;
      }
      return recurse(current + 1, start, newSum);
    }
    // not currently in subarray, can skip this num or start a subarray here
    return recurse(current + 1, null, 0) || recurse(current + 1, current, nums[current]);
  };
  return recurse(0, null, 0);
};

const bruteForceWithPrefixSum = (() => {
  const prefixSum = (arr) => [
    0,
    ...arr.reduce((acc, x, i) => {
      acc[i] = i > 0 ? x + acc[i - 1] : x;
      return acc;
    }, []),
  ];

  return (nums, k) => {
    const sums = prefixSum(nums);
    for (let start = 0; start < nums.length; start++) {
      for (let end = start + 1; end < nums.length; end++) {
        const sum = sums[end + 1] - sums[start];
        if (sum === 0 || sum % k === 0) {
          return true;
        }
      }
    }
    return false;
  };
})();

const usingMap = (nums, k) => {
  const modLookup = new Map([[0, -1]]);
  let mod = 0;
  for (const [i, num] of nums.entries()) {
    mod = (mod + num) % k;
    if (!modLookup.has(mod)) {
      modLookup.set(mod, i);
      continue;
    }
    if (i - modLookup.get(mod) > 1) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const checkSubarraySum = usingMap;
