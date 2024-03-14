/**
 * Given a binary array nums and an integer goal, return the number of non-empty
 * subarrays with a sum goal.
 *
 * A subarray is a contiguous part of the array.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,1,0,1], goal = 2
 * Output: 4
 * Explanation: The 4 subarrays are bolded and underlined below:
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,0,0,0], goal = 0
 * Output: 15
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 3 * 104
 *  * nums[i] is either 0 or 1.
 *  * 0 <= goal <= nums.length
 *
 *
 *
 * https://leetcode.com/problems/binary-subarrays-with-sum
 */

// o(n^3)
const bruteForce = (() => {
  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

  const subarrays = (arr, visitFn) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        visitFn(arr.slice(i, j + 1));
      }
    }
  };

  return (nums, goal) => {
    let count = 0;
    subarrays(nums, (subarray) => {
      if (sum(subarray) === goal) {
        count++;
      }
    });
    return count;
  };
})();

// o(n ^ 2);
const bruteForce3 = (nums, goal) => {
  let subarrays = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > goal) {
        break;
      }
      if (sum === goal) {
        subarrays++;
      }
    }
  }
  return subarrays;
};

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
export const numSubarraysWithSum = (nums, goal) => {
  let subarrays = 0;
  let sum = 0;
  const history = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === goal) {
      subarrays += 1;
    }
    if (history.has(sum - goal)) {
      subarrays += history.get(sum - goal);
    }
    history.set(sum, (history.get(sum) || 0) + 1);
  }
  return subarrays;
};
