/**
 * You are given an array nums of positive integers and a positive integer k.
 *
 * A subset of nums is beautiful if it does not contain two integers with an
 * absolute difference equal to k.
 *
 * Return the number of non-empty beautiful subsets of the array nums.
 *
 * A subset of nums is an array that can be obtained by deleting some (possibly
 * none) elements from nums. Two subsets are different if and only if the chosen
 * indices to delete are different.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,4,6], k = 2
 * Output: 4
 * Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
 * It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], k = 1
 * Output: 1
 * Explanation: The beautiful subset of the array nums is [1].
 * It can be proved that there is only 1 beautiful subset in the array [1].
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 20
 *  * 1 <= nums[i], k <= 1000
 *
 *
 *
 * https://leetcode.com/problems/the-number-of-beautiful-subsets
 */

const difference = (a, b) => Math.abs(a - b);

const isBeautiful = (number, subset, k) =>
  subset.map((x) => difference(number, x)).every((x) => x !== k);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const beautifulSubsets = (nums, k) => {
  // let result = 0;
  const recurse = (index, subset) => {
    if (index >= nums.length) {
      // result += subset.length ? 1 : 0;
      return Number(!!subset.length);
    }
    let take = 0;
    // take item if possible
    if (isBeautiful(nums[index], subset, k)) {
      subset.push(nums[index]);
      take = recurse(index + 1, subset);
      subset.pop();
    }

    // don't take item
    return take + recurse(index + 1, subset);
  };

  return recurse(0, []);
};
