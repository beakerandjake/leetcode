/**
 * Given an integer array nums and an integer k, return the kth largest element in
 * the array.
 *
 * Note that it is the kth largest element in the sorted order, not the kth
 * distinct element.
 *
 * Can you solve it without sorting?
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 *
 * Example 2:
 *
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= nums.length <= 105
 *  * -104 <= nums[i] <= 104
 *
 *
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findKthLargest = (nums, k) => {
  const bitset = Array(2e4 + 1).fill(0);
  for (const num of nums) {
    bitset[num + 1e4]++;
  }
  let current = 0;
  for (let i = bitset.length; i--; ) {
    if (bitset[i]) {
      current += bitset[i];
      if (current >= k) {
        return i - 1e4;
      }
    }
  }
  throw new Error('Not Found')
};
