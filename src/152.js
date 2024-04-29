/**
 * Given an integer array nums, find a subarray that has the largest product, and
 * return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 2 * 104
 *  * -10 <= nums[i] <= 10
 *  * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 *    integer.
 *
 *
 *
 * https://leetcode.com/problems/maximum-product-subarray
 */

const usingTopDownDp = (nums) => {
  const memo = new Map();
  const dp = (i, inSubarray, total) => {
    if (i >= nums.length) {
      return inSubarray ? total : Number.MIN_SAFE_INTEGER;
    }
    const hash = `${i}_${inSubarray}_${total}`;
    if (!memo.has(hash)) {
      let result;
      if (inSubarray) {
        // if start a subarray, either continue it or end it with this element.
        result = Math.max(dp(i + 1, true, total * nums[i]), total * nums[i]);
      } else {
        // use a single element subarray, start a new subarray here, or don't start one.
        result = Math.max(nums[i], dp(i + 1, true, nums[i]), dp(i + 1, false, 0));
      }
      memo.set(hash, result);
    }
    return memo.get(hash);
  };
  return dp(0, false, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = (nums) => {
  let result = nums[0];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const newMax = Math.max(num, num * min, num * max);
    min = Math.min(num, num * min, num * max);
    max = newMax;
    result = Math.max(result, max);
  }
  return result;
};
