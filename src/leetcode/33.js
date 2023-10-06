/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 */

const findPivot = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i;
    }
  }
  return -1;
};

const binarySearch = (nums, target, lower, upper) => {
  let l = lower;
  let u = upper;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      u = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = (nums, target) => {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  // array is not pivoted.
  if (nums[0] < nums.at(-1)) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }

  const pivot = findPivot(nums);
  return Math.max(
    binarySearch(nums, target, 0, pivot),
    binarySearch(nums, target, pivot, nums.length - 1)
  );
};
