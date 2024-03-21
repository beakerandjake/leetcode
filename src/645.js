/**
 * You have a set of integers s, which originally contains all the numbers from 1
 * to n. Unfortunately, due to some error, one of the numbers in s got duplicated
 * to another number in the set, which results in repetition of one number and loss
 * of another number.
 *
 * You are given an integer array nums representing the data status of this set
 * after the error.
 *
 * Find the number that occurs twice and the number that is missing and return them
 * in the form of an array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 *
 *
 * Example 2:
 *
 * Input: nums = [1,1]
 * Output: [1,2]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= nums.length <= 104
 *  * 1 <= nums[i] <= 104
 *
 *
 *
 * https://leetcode.com/problems/set-mismatch
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findErrorNums = (nums) => {
  // map each number to its frequency.
  const set = nums.reduce((acc, x) => {
    acc[x] += 1;
    return acc;
  }, Array(nums.length + 1).fill(0));

  // find the two error elements using the frequency array.
  let twice = null;
  let missing = null;
  for (let i = 1; i <= nums.length; i++) {
    if (set[i] === 0) {
      missing = i;
    } else if (set[i] === 2) {
      twice = i;
    }
    if (missing != null && twice != null) {
      break;
    }
  }
  return [twice, missing];
};
