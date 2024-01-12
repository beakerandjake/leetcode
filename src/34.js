/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */

const findStart = (nums, target, startIndex, endIndex) => {
  let l = startIndex;
  let u = endIndex;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    if (nums[m] === target) {
      if (nums[m - 1] !== target) {
        return m;
      }
      u = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};

const findEnd = (nums, target, startIndex, endIndex) => {
  let l = startIndex;
  let u = endIndex;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    if (nums[m] === target) {
      if (nums[m + 1] !== target) {
        return m;
      }
      l = m + 1;
    } else {
      u = m - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const searchRange = (nums, target) => {
  let l = 0;
  let u = nums.length - 1;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    if (target < nums[m]) {
      u = m - 1;
    } else if (target > nums[m]) {
      l = m + 1;
    } else {
      const start = findStart(nums, target, l, m - 1);
      const end = findEnd(nums, target, m + 1, u);
      return [start >= 0 ? start : m, end >= 0 ? end : m];
    }
  }
  return [-1, -1];
};
