/**
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the
 * resulting array. Return 0 if there is no such subarray.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,0,1]
 * Output: 3
 * Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1,1,0,1,1,0,1]
 * Output: 5
 * Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: You must delete one element.
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
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
 */

// const topDown = (nums) => {
//   const memo = [...Array(nums.length)].map(() => [-1, -1]);
//   const dp = (start, hasDeleted) => {
//     if (memo[start][hasDeleted] === -1) {
//       if (start === nums.length - 1) {
//         // if have not deleted then score is zero
//         memo[start][hasDeleted] = hasDeleted ? nums[start] : 0;
//       } else if (nums[start] === 0) {
//         // delete this zero if possible, otherwise reached the end.
//         memo[start][hasDeleted] = !hasDeleted ? dp(start + 1, 1) : 0;
//       } else {
//         // keep the chain going with a 1.
//         memo[start][hasDeleted] = 1 + dp(start + 1, hasDeleted);
//       }
//     }
//     return memo[start][hasDeleted];
//   };
//   let longest = 0;
//   for (let i = 0; i < nums.length; i++) {
//     longest = Math.max(longest, dp(i, 0));
//   }
//   return longest;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestSubarray = (nums) => {
  let longest = 0;
  let windowStart = 0;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }
    while (zeroCount > 1) {
      if (nums[windowStart] === 0) {
        zeroCount--;
      }
      windowStart++;
    }
    longest = Math.max(longest, i - windowStart);
  }
  return longest;
};
