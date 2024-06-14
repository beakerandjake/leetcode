/**
 * You are given an integer array nums. In one move, you can pick an index i where
 * 0 <= i < nums.length and increment nums[i] by 1.
 *
 * Return the minimum number of moves to make every value in nums unique.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,2]
 * Output: 1
 * Explanation: After 1 move, the array could be [1, 2, 3].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,1,2,1,7]
 * Output: 6
 * Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
 * It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * 0 <= nums[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique
 */

// returns a bit vector of the specified range.
// each index i represents the number of times that number appeared in the source arr.
const toBitVector = (arr, range) =>
  arr.reduce((acc, x) => {
    acc[x]++;
    return acc;
  }, Array(range).fill(0));

// returns the number of increments needed to make the final element in the bit vector unique
const carryOverflow = (remaining) => {
  if (remaining <= 1) {
    return 0;
  }
  return remaining - 1 + carryOverflow(remaining - 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const minIncrementForUnique = (nums) => {
  let result = 0;
  const max = 10 ** 5;
  // add one to bit vector because range is inclusive, add another one to hold any carry from max.
  const bitVector = toBitVector(nums, max + 2);
  // iterate over all possible numbers in range (also has effect of iterating numbers in asc order)
  for (let i = 0; i <= max; i++) {
    // skip if number is unique (or non existent)
    if (bitVector[i] <= 1) {
      continue;
    }
    // simulate leaving only one copy of this number and increment all duplicates by one
    const carry = bitVector[i] - 1;
    bitVector[i + 1] += carry;
    result += carry;
  }
  // ensure that any overflow is handled
  return result + carryOverflow(bitVector.at(-1));
};
