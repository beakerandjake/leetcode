/**
 * Given an array of integers nums and an integer k. A continuous subarray is
 * called nice if there are k odd numbers on it.
 *
 * Return the number of nice sub-arrays.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2,1,1], k = 3
 * Output: 2
 * Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,4,6], k = 1
 * Output: 0
 * Explanation: There are no odd numbers in the array.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 * Output: 16
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 50000
 *  * 1 <= nums[i] <= 10^5
 *  * 1 <= k <= nums.length
 *
 *
 *
 * https://leetcode.com/problems/count-number-of-nice-subarrays
 */

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* subarrays(arr, k) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (j - i + 1 >= k) {
          yield arr.slice(i, j + 1);
        }
      }
    }
  }

  // returns true if the number is odd.
  const isOdd = (num) => num % 2 !== 0;

  // returns the number of elements in the array which satisfy the predicate.
  const count = (arr, predicateFn) =>
    arr.reduce((acc, x) => acc + (predicateFn(x) ? 1 : 0), 0);

  return (nums, k) => {
    let result = 0;
    for (const subarray of subarrays(nums, k)) {
      result += count(subarray, isOdd) === k ? 1 : 0;
    }
    return result;
  };
})();

const usingSlidingWindow = (() => {
  // returns the number of subarrays which have 'targetCount' items matching the predicate
  const slidingWindow = (arr, predicateFn, targetCount) => {
    let result = 0;
    let left = 0;
    let right = 0;
    let windowCount = 0;
    let subarrays = 0;
    while (right < arr.length) {
      if (predicateFn(arr[right])) {
        windowCount++;
        subarrays = 0;
      }
      while (windowCount === targetCount) {
        subarrays++;
        windowCount -= predicateFn(arr[left]) ? 1 : 0;
        left++;
      }
      result += subarrays;
      right++;
    }
    return result;
  };

  // returns true if the number is odd.
  const isOdd = (num) => num % 2 !== 0;

  return (nums, k) => slidingWindow(nums, isOdd, k);
})();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const numberOfSubarrays = usingSlidingWindow;
