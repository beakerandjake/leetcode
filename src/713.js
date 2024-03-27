/**
 * Given an array of integers nums and an integer k, return the number of
 * contiguous subarrays where the product of all the elements in the subarray is
 * strictly less than k.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [10,5,2,6], k = 100
 * Output: 8
 * Explanation: The 8 subarrays that have product less than 100 are:
 * [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3], k = 0
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 3 * 104
 *  * 1 <= nums[i] <= 1000
 *  * 0 <= k <= 106
 *
 *
 *
 * https://leetcode.com/problems/subarray-product-less-than-k
 */

const bruteForce = (() => {
  const subarrays = (arr, visitFn) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        visitFn(i, j);
      }
    }
  };

  const product = (arr, from, to) => {
    let total = 1;
    for (let i = from; i <= to; i++) {
      total *= arr[i];
    }
    return total;
  };

  return (nums, k) => {
    let count = 0;
    subarrays(nums, (from, to) => {
      if (product(nums, from, to) < k) {
        count++;
      }
    });
    return count;
  };
})();

const usingTwoPointers = (() => {
  // returns the number of subarrays between the left and right index (inclusive)
  const numSubArrays = (left, right) => right - left + 1;

  return (nums, k) => {
    let subarrayCount = 0;
    let left = 0;
    let right = 0;
    let product = 1;
    while (right < nums.length) {
      product *= nums[right];
      // attempt to hit target by contracting window from left.
      while (left < right && product >= k) {
        product /= nums[left];
        left++;
      }
      if (product < k) {
        subarrayCount += numSubArrays(left, right);
      }
      // expand window right.
      right++;
    }
    return subarrayCount;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const numSubarrayProductLessThanK = usingTwoPointers;
