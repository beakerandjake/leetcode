/**
 * Given an unsorted integer array nums. Return the smallest positive integer that
 * is not present in nums.
 *
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary
 * space.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 * Explanation: The smallest positive integer 1 is missing.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * -231 <= nums[i] <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/first-missing-positive
 */

const usingSet = (nums) => {
  // find all unique numbers gt 0.
  const visited = new Set(nums.filter((x) => x > 0));
  const min = Math.min(...visited);
  // easy result is if min number in array is gt 1, then result has to be 1.
  if (min > 1) {
    return 1;
  }
  // after sorting, if two neighbors differ by more than one, there is a missing number between them.
  const sorted = [...visited].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > 1) {
      return sorted[i - 1] + 1;
    }
  }
  // all nums diffed by one, missing num must be 1 + max.
  return sorted.at(-1) + 1;
};

const usingBitVector = (nums) => {
  // track if seen each number 1 to N.
  const visited = Array(nums.length + 1).fill(false);
  for (const num of nums) {
    if (num > 0 && num < visited.length) {
      visited[num] = true;
    }
  }
  // find first number not visited between 1 and N.
  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      return i;
    }
  }
  // nums was range 1 to N. The missing number must be N+1.
  return visited.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const firstMissingPositive = usingBitVector;
