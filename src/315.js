/**
 * Given an integer array nums, return an integer array counts where counts[i] is
 * the number of smaller elements to the right of nums[i].
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [5,2,6,1]
 * Output: [2,1,1,0]
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1]
 * Output: [0]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [-1,-1]
 * Output: [0,0]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * -104 <= nums[i] <= 104
 *
 *
 *
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self
 */

const toSorted = (arr) => [...arr].sort((a, b) => a - b);

const toIndexLookup = (arr) =>
  arr.reduce((acc, x, i) => acc.set(x, [...(acc.get(x) || []), i]), new Map());

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const countSmaller = (nums) => {
  const sorted = toSorted([...new Set(nums)]);
  const indexLookup = toIndexLookup(nums);
  const counts = Array(nums.length).fill(0);

  for (const current of sorted) {
    const indexes = indexLookup.get(current);
    for (let i = 0; i < indexes.length; i++) {
      const numIndex = indexes[i];
      for (let n = numIndex - 1; n >= 0; n--) {
        if (nums[n] === current) {
          break;
        }
        if (nums[n] > current) {
          counts[n] += indexes.length - i;
        }
      }
    }
  }

  return counts;
};
