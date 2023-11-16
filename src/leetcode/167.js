/**
 * Given a 1-indexed array of integers numbers that is already sorted in
 * non-decreasing order, find two numbers such that they add up to a specific
 * target number. Let these two numbers be numbers[index1] and numbers[index2]
 * where 1 <= index1 < index2 < numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an
 * integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use
 * the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 *
 *
 * Example 2:
 *
 *
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
 *
 *
 * Example 3:
 *
 *
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= numbers.length <= 3 * 104
 *  * -1000 <= numbers[i] <= 1000
 *  * numbers is sorted in non-decreasing order.
 *  * -1000 <= target <= 1000
 *  * The tests are generated such that there is exactly one solution.
 *
 *
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */

const binarySearch = (() => {
  const indexOf = (numbers, target) => {
    let l = 0;
    let u = numbers.length - 1;
    while (l <= u) {
      const m = Math.floor(l + (u - l) / 2);
      if (numbers[m] > target) {
        u = m - 1;
      } else if (numbers[m] < target) {
        l = m + 1;
      } else {
        return m;
      }
    }
    return -1;
  };
  return (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
      const foundIndex = indexOf(numbers, target - numbers[i]);
      if (foundIndex !== -1 && foundIndex !== i) {
        const nums = [i + 1, foundIndex + 1];
        return nums.sort((a, b) => a - b);
      }
    }
    throw new Error('not found');
  };
})();

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = binarySearch;
