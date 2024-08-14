/**
 * The distance of a pair of integers a and b is defined as the absolute difference
 * between a and b.
 *
 * Given an integer array nums and an integer k, return the kth smallest distance
 * among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,1], k = 1
 * Output: 0
 * Explanation: Here are all the pairs:
 * (1,3) -> 2
 * (1,1) -> 0
 * (3,1) -> 2
 * Then the 1st smallest distance pair is (1,1), and its distance is 0.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1], k = 2
 * Output: 0
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,6,1], k = 3
 * Output: 5
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == nums.length
 *  * 2 <= n <= 104
 *  * 0 <= nums[i] <= 106
 *  * 1 <= k <= n * (n - 1) / 2
 *
 *
 *
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance
 */

const bruteForce = (() => {
  // iterates each pair of the array
  const pairs = function* (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield [arr[i], arr[j]];
      }
    }
  };

  // returns the absolute difference between the pair
  const difference = ([a, b]) => Math.abs(a - b);

  // returns the kth smallest distance pair.
  return (nums, k) => [...pairs(nums)].map(difference).sort((a, b) => a - b)[k - 1];
})();

const usingBinarySearch = (() => {
  // returns the number of pairs whose difference is greater than the target distance
  const numberOfPairs = (arr, targetDifference) => {
    let result = 0;
    let left = 0;
    let right = 0;
    while (right < arr.length) {
      // shrink window until no longer possible to have difference larger than target
      while (arr[right] - arr[left] > targetDifference) {
        left++;
      }
      result += right - left;
      right++;
    }
    return result;
  };

  return (nums, k) => {
    const sorted = [...nums].sort((a, b) => a - b);
    let lo = 0;
    let hi = sorted.at(-1) - sorted[0];
    // binary search to find the kth difference
    while (lo <= hi) {
      const m = Math.floor(lo + (hi - lo) / 2);
      if (numberOfPairs(sorted, m) < k) {
        lo = m + 1;
      } else {
        hi = m - 1;
      }
    }
    return lo;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const smallestDistancePair = usingBinarySearch;
