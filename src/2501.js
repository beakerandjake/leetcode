/**
 * You are given an integer array nums. A subsequence of nums is called a square
 * streak if:
 *
 *  * The length of the subsequence is at least 2, and
 *  * after sorting the subsequence, each element (except the first element) is the
 *    square of the previous number.
 *
 * Return the length of the longest square streak in nums, or return -1 if there is
 * no square streak.
 *
 * A subsequence is an array that can be derived from another array by deleting
 * some or no elements without changing the order of the remaining elements.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,3,6,16,8,2]
 * Output: 3
 * Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
 * - 4 = 2 * 2.
 * - 16 = 4 * 4.
 * Therefore, [4,16,2] is a square streak.
 * It can be shown that every subsequence of length 4 is not a square streak.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,3,5,6,7]
 * Output: -1
 * Explanation: There is no square streak in nums so return -1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= nums.length <= 105
 *  * 2 <= nums[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/longest-square-streak-in-an-array
 */

// returns a copy of the array sorted ascending
const toSorted = (arr) => [...arr].sort((a, b) => a - b);

// returns an iterator that yields each square of x.
const squares = function* (x) {
  let current = x;
  for (;;) {
    current **= 2;
    yield current;
  }
};

// returns true if the value is present in the (sorted) array
const contains = (arr, value) => {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const m = lo + Math.floor((hi - lo) / 2);
    if (arr[m] < value) {
      lo = m + 1;
    } else if (arr[m] > value) {
      hi = m - 1;
    } else {
      return true;
    }
  }
  return false;
};

// returns the number of squares of x which are present in nums.
const squareStreak = (x, nums) => {
  let result = 0;
  for (const square of squares(x)) {
    if (!contains(nums, square)) {
      break;
    }
    result++;
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestSquareStreak = (nums) => {
  let result = 0;
  const sorted = toSorted(nums);
  const visited = new Set();
  for (const num of nums) {
    // if visited previous not possible to have a larger streak.
    if (visited.has(num)) {
      continue;
    }
    visited.add(num);
    // add one to ensure 'num' is counted.
    result = Math.max(result, squareStreak(num, sorted) + 1);
  }
  return result > 1 ? result : -1;
};
