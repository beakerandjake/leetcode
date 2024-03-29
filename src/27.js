/* eslint-disable no-param-reassign */

/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. T
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *  -Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 *   The remaining elements of nums are not important as well as the size of nums.
 *
 *  -Return k.
 *
 * https://leetcode.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = (nums, val) => {
  let lhsIndex = 0;
  let rhsIndex = nums.length;
  let total = 0;
  while (lhsIndex < rhsIndex) {
    if (nums[lhsIndex] === val) {
      nums[lhsIndex] = nums[--rhsIndex];
    } else {
      total++;
      lhsIndex++;
    }
  }
  return total;
};
