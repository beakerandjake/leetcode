/* eslint-disable no-param-reassign */

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = (nums) => {
  let leftMostZero = nums.findIndex((x) => x === 0);
  if (leftMostZero === -1) {
    return;
  }
  let i = leftMostZero;
  while (++i < nums.length) {
    if (nums[i] !== 0) {
      nums[leftMostZero++] = nums[i];
      nums[i] = 0;
    }
  }
};
