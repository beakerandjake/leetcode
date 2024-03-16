/**
 * Given a binary array nums, return the maximum length of a contiguous subarray
 * with an equal number of 0 and 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * nums[i] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/contiguous-array
 */

const recursive = (nums) => {
  const maxLength = (startIndex, index, sum) => {
    if (index >= nums.length) {
      return 0;
    }
    // keep going if currently in a subarray
    if (startIndex != null) {
      const length = index - startIndex + 1;
      const newSum = sum + nums[index];
      // best value for this subarray could end here, or continue onward.
      return Math.max(
        // if equal zeros and ones, this could be the best.
        newSum * 2 === length ? length : 0,
        maxLength(startIndex, index + 1, newSum)
      );
    }
    // max could come from either skipping this element, or starting a new subarray with it.
    return Math.max(
      maxLength(null, index + 1, 0),
      maxLength(index, index + 1, nums[index])
    );
  };
  return maxLength(null, 0, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxLength = recursive;
