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

const countDifferences = (nums) => {
  const differences = [];
  let zeros = 0;
  let ones = 0;
  for (const num of nums) {
    if (num === 0) {
      zeros++;
    } else {
      ones++;
    }
    differences.push(zeros - ones);
  }
  return differences;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxLength = (nums) => {
  const differences = countDifferences(nums);
  const differenceLookup = differences.reduce((acc, x, i) => {
    if (!acc.has(x)) {
      acc.set(x, i);
    }
    return acc;
  }, new Map([[0, -1]]));

  let maxLength = 0;
  for (const [i, diff] of differences.entries()) {
    const firstSeen = differenceLookup.get(diff);
    if (firstSeen !== i) {
      maxLength = Math.max(i - firstSeen, maxLength);
    }
  }
  return maxLength;
};
