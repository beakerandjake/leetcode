/**
 * Given an integer array nums and an integer k, return the number of non-empty
 * subarrays that have a sum divisible by k.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,5,0,-2,-3,1], k = 5
 * Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by k = 5:
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5], k = 9
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 3 * 104
 *  * -104 <= nums[i] <= 104
 *  * 2 <= k <= 104
 *
 *
 *
 * https://leetcode.com/problems/subarray-sums-divisible-by-k
 */

const bruteForceRecursive = (nums, k) => {
  const recurse = (current, start, sum) => {
    if (current >= nums.length) {
      return 0;
    }
    // if currently in a subarray, continue it
    if (start != null) {
      const newSum = sum + nums[current];
      const self = newSum % k === 0 ? 1 : 0;
      return self + recurse(current + 1, start, newSum);
    }
    // start a subarray at this number
    const take = recurse(current + 1, current, nums[current]);
    // skip this number, don't start a subarray here
    const skip = recurse(current + 1, null, 0);
    // consider a subarray of just this number
    const self = nums[current] % k === 0 ? 1 : 0;
    return self + skip + take;
  };
  return recurse(0, null, 0);
};

const bruteForcePrefixSum = (() => {
  const prefixSum = (arr) => [
    0,
    ...arr.reduce((acc, x, i) => {
      acc[i] = i ? x + acc[i - 1] : x;
      return acc;
    }, []),
  ];

  return (nums, k) => {
    let result = 0;
    const sums = prefixSum(nums);
    for (let start = 0; start < nums.length; start++) {
      for (let end = start; end < nums.length; end++) {
        if ((sums[end + 1] - sums[start]) % k === 0) {
          result++;
        }
      }
    }
    return result;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraysDivByK = (nums, k) => {
  const map = new Map([[0, 1]]);
  let result = 0;
  let sum = 0;
  for (const num of nums) {
    sum = (sum + num) % k;
    sum += sum < 0 ? k : 0;
    result += map.get(sum) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return result;
};
