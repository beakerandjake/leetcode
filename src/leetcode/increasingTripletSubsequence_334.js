/**
 * Given an integer array nums, return true if
 * there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
 * If no such indices exists, return false.
 */

const smallest = (nums, index) => {
  if (index === 0) {
    return nums[0];
  }
  return Math.min(nums[index], smallest(nums, index - 1));
};

const largest = (nums, index) => {
  if (index === nums.length - 1) {
    return nums[nums.length - 1];
  }
  return Math.max(nums[index], largest(nums, index + 1));
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const increasingTriplet = (nums) => {
  if (nums.length < 3) {
    return false;
  }
  const sm = nums.map((_, i) => smallest(nums, i));
  const lg = nums.map((_, i) => largest(nums, i));
  for (let i = 1; i < nums.length - 1; i++) {
    if (sm[i] < nums[i] && lg[i] > nums[i]) {
      return true;
    }
  }
  return false;
};
