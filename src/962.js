/**
 * A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <=
 * nums[j]. The width of such a ramp is j - i.
 *
 * Given an integer array nums, return the maximum width of a ramp in nums. If
 * there is no ramp in nums, return 0.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [6,0,8,2,1,5]
 * Output: 4
 * Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [9,8,1,0,1,9,4,0,4,1]
 * Output: 7
 * Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= nums.length <= 5 * 104
 *  * 0 <= nums[i] <= 5 * 104
 *
 *
 *
 * https://leetcode.com/problems/maximum-width-ramp
 */

const usingSorting = (() => {
  // sorts an array in ascending order, using the result of valueFn as a sort key
  const sortBy = (arr, valueFn) => [...arr].sort((a, b) => valueFn(a) - valueFn(b));

  // returns an array containing the indexes from zero to n-1.
  const indexes = (n) => [...Array(n).keys()];

  return (nums) => {
    let minIndex = nums.length;
    return sortBy(indexes(nums.length), (i) => nums[i]).reduce((acc, index) => {
      minIndex = Math.min(minIndex, index);
      return Math.max(acc, index - minIndex);
    }, 0);
  };
})();

const usingMonotonicStack = (() => {
  // returns an array of indexes where there is an element to the right
  // whose value is less than or equal to the value at that index.
  const decreasingIndexes = (arr) =>
    arr.reduce((acc, x, i) => {
      if (!acc.length || x < arr[acc.at(-1)]) {
        acc.push(i);
      }
      return acc;
    }, []);

  return (nums) => {
    let result = 0;
    const dec = decreasingIndexes(nums);
    for (let i = nums.length - 1; i >= 0; i--) {
      while (dec.length && nums[dec.at(-1)] <= nums[i]) {
        result = Math.max(result, i - dec.at(-1));
        dec.pop();
      }
    }
    return result;
  };
})();

/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxWidthRamp = usingMonotonicStack;
