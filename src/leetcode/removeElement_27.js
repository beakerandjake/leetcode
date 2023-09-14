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
  if (nums.length === 0) {
    return 0;
  }

  let toReturn = 0;
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (leftIndex === rightIndex) {
      if (nums[leftIndex] !== val) {
        toReturn++;
        break;
      }
    }

    const left = nums[leftIndex];
    // easy case left is not the vale, it's in the right spot, move on..
    if (left !== val) {
      toReturn++;
      leftIndex++;
      continue;
    }

    const right = nums[rightIndex];
    // easy case left is the value and right is not the value, swap
    if (right !== val) {
      nums[leftIndex] = right;
      leftIndex++;
      rightIndex--;
      toReturn++;
      continue;
    }

    // hard case, left is the value and right is the value.
    rightIndex--;
  }

  return toReturn;
};
