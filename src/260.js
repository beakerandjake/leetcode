/**
 * Given an integer array nums, in which exactly two elements appear only once and
 * all the other elements appear exactly twice. Find the two elements that appear
 * only once. You can return the answer in any order.
 *
 * You must write an algorithm that runs in linear runtime complexity and uses only
 * constant extra space.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,1,3,2,5]
 * Output: [3,5]
 * Explanation:  [5, 3] is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,0]
 * Output: [-1,0]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,1]
 * Output: [1,0]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= nums.length <= 3 * 104
 *  * -231 <= nums[i] <= 231 - 1
 *  * Each integer in nums will appear twice, only two integers will appear once.
 *
 *
 *
 * https://leetcode.com/problems/single-number-iii
 */

// returns the index of the first non zero bit (from right)
const indexOfFirstNonZeroBit = (number) => {
  for (let i = 0; i < 32; i++) {
    if ((number & (1 << i)) !== 0) {
      return i;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const singleNumber = (nums) => {
  const xorTotal = nums.reduce((acc, x) => acc ^ x, 0);
  const xorBitmask = 1 << indexOfFirstNonZeroBit(xorTotal);
  // split nums into two groups based on if they have the xorBitmask bit set.
  // taking the xor of these two groups provides the two unique numbers.
  return nums.reduce(
    ([zeroGroup, oneGroup], num) =>
      num & xorBitmask ? [zeroGroup, oneGroup ^ num] : [zeroGroup ^ num, oneGroup],
    [0, 0],
  );
};
