/**
 * Given an array of positive integers nums, remove the smallest subarray (possibly
 * empty) such that the sum of the remaining elements is divisible by p. It is not
 * allowed to remove the whole array.
 *
 * Return the length of the smallest subarray that you need to remove, or -1 if
 * it's impossible.
 *
 * A subarray is defined as a contiguous block of elements in the array.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,1,4,2], p = 6
 * Output: 1
 * Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [6,3,5,2], p = 9
 * Output: 2
 * Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3], p = 3
 * Output: 0
 * Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * 1 <= nums[i] <= 109
 *  * 1 <= p <= 109
 *
 *
 *
 * https://leetcode.com/problems/make-sum-divisible-by-p
 */

const prefixSum = (arr) =>
  arr.reduce((acc, x, i) => {
    acc.push(i > 0 ? x + acc[i - 1] : x);
    return acc;
  }, []);

const usingDp = (() => {
  const isDivisible = (n, k) => n % k === 0;
  const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));
  return (nums, p) => {
    const total = nums.reduce((acc, x) => acc + x, 0);
    if (isDivisible(total, p)) {
      return 0;
    }
    const memo = fill(nums.length + 1, nums.length + 1, null);
    const recurse = (i, sStart, sSum) => {
      if (i >= nums.length) {
        return Number.MAX_SAFE_INTEGER;
      }
      if (memo[i][sStart + 1] === null) {
        let result;
        // if already removing a subarray, keep removing it.
        if (sStart >= 0) {
          const newSum = sSum + nums[i];
          // when arr becomes divisible, end here it's the shortest subArr we can make
          if (isDivisible(total - newSum, p)) {
            const length = i - sStart + 1;
            result = length !== nums.length ? length : Number.MAX_SAFE_INTEGER;
          } else {
            result = recurse(i + 1, sStart, newSum);
          }
        }
        // check if removing single element does the trick
        else if (isDivisible(total - nums[i], p)) {
          result = 1;
        }
        // start a subarray here or don't
        else {
          result = Math.min(recurse(i + 1, -1, 0), recurse(i + 1, i, nums[i]));
        }
        memo[i][sStart + 1] = result;
      }
      return memo[i][sStart + 1];
    };
    const result = recurse(0, -1, 0);
    return result !== Number.MAX_SAFE_INTEGER ? result : -1;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
export const minSubarray = usingDp;
