/**
 * You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.
 *
 * A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
 *
 * Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.
 *
 * Example 1:
 *
 * Input: nums = [0,1,3,50,75], lower = 0, upper = 99
 * Output: [[2,2],[4,49],[51,74],[76,99]]
 * Explanation: The ranges are:
 * [2,2]
 * [4,49]
 * [51,74]
 * [76,99]
 *
 * Example 2:
 *
 * Input: nums = [-1], lower = -1, upper = -1
 * Output: []
 * Explanation: There are no missing ranges since there are no missing numbers.
 *
 * Constraints:
 *
 *     -109 <= lower <= upper <= 109
 *     0 <= nums.length <= 100
 *     lower <= nums[i] <= upper
 *     All the values of nums are unique.
 */

const usingStack = (nums, lower, upper) => {
  const lookup = new Set(nums);
  const missingStack = [];
  // add all missing numbers to the stack
  for (let i = lower; i <= upper; i++) {
    if (!lookup.has(i)) {
      missingStack.push(i);
    }
  }
  if (!missingStack.length) {
    return [];
  }
  // build the missing ranges from the stack.
  const ranges = [];
  while (missingStack.length) {
    const range = [missingStack.at(-1), missingStack.at(-1)];
    missingStack.pop();
    while (range[0] - missingStack.at(-1) === 1) {
      range[0] = missingStack.pop();
    }
    ranges.push(range);
  }
  return ranges.reverse();
};

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
export const findMissingRanges = (nums, lower, upper) => {
  if (!nums.length) {
    return [[lower, upper]];
  }

  const ranges = [];

  // handle edge case where lower outside of nums.
  if (lower < nums[0]) {
    ranges.push([lower, nums[0] - 1]);
  }

  const last = nums.length - 1;
  for (let i = 0; i < last; i++) {
    // add missing range if curr and next aren't consecutive.
    if (nums[i + 1] - nums[i] > 1) {
      ranges.push([nums[i] + 1, nums[i + 1] - 1]);
    }
  }

  // handle edge case where upper outside of nums.
  if (upper > nums.at(-1)) {
    ranges.push([nums.at(-1) + 1, upper]);
  }
  
  return ranges;
};
