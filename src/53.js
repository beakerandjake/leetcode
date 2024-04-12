/**
 * Given an integer array nums, find the subarray with the largest sum, and return
 * its sum.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
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
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution using the divide and conquer approach, which is more subtle.
 *
 *
 *
 * https://leetcode.com/problems/maximum-subarray
 */

const bruteForce = (() => {
  // returns the sum of the array.
  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

  // invokes the visit fn on every sub array of the array.
  const subarrays = (arr, visitFn) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        visitFn(arr.slice(i, j + 1));
      }
    }
  };

  return (nums) => {
    let max = Number.MIN_SAFE_INTEGER;
    subarrays(nums, (arr) => {
      max = Math.max(max, sum(arr));
    });
    return max;
  };
})();

const kadane = (nums) => {
  let best = Number.MIN_SAFE_INTEGER;
  let current = 0;
  for (const num of nums) {
    current = Math.max(num, num + current);
    best = Math.max(best, current);
  }
  return best;
};

const dynamicProgramming = (nums) => {
  const memo = new Map();
  const dp = (index, isSubarray) => {
    if (index >= nums.length) {
      // if reached end without starting a subarray, then not valid.
      return isSubarray ? 0 : Number.MIN_SAFE_INTEGER;
    }
    const stateHash = `${index}_${isSubarray}`;
    if (!memo.has(stateHash)) {
      // if currently iterating a subarray, keep iterating it.
      // otherwise best choise is either use the element to start a subarray or skip it.
      memo.set(
        stateHash,
        isSubarray
          ? Math.max(0, nums[index] + dp(index + 1, true))
          : Math.max(dp(index + 1, false), nums[index] + dp(index + 1, true)),
      );
    }
    return memo.get(stateHash);
  };

  return dp(0, false);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = dynamicProgramming;
