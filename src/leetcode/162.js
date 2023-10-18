/**
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */

const elementAt = (nums, index) =>
  index >= 0 && index < nums.length ? nums[index] : Number.MIN_SAFE_INTEGER;

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findPeakElement = (nums) => {
  if (nums.length === 1) {
    return 0;
  }

  let l = 0;
  let u = nums.length - 1;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    const previous = elementAt(nums, m - 1);
    const current = elementAt(nums, m);
    const next = elementAt(nums, m + 1);
    if (previous < current && current > next) {
      return m;
    }
    if (current < previous) {
      u = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};
