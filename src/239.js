/**
 * You are given an array of integers nums, there is a sliding window of size k
 * which is moving from the very left of the array to the very right. You can only
 * see the k numbers in the window. Each time the sliding window moves right by one
 * position.
 *
 * Return the max sliding window.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * -104 <= nums[i] <= 104
 *  * 1 <= k <= nums.length
 *
 *
 *
 * https://leetcode.com/problems/sliding-window-maximum
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* slidingWindow(arr, n) {
    const end = arr.length - n;
    for (let i = 0; i <= end; i++) {
      yield arr.slice(i, i + n);
    }
  }

  return (nums, k) => [...slidingWindow(nums, k)].map((x) => Math.max(...x));
})();

const usingHeap = (() => {
  // iterates a sliding window of size n and yields [startIndex, endIndex] of each window
  // eslint-disable-next-line func-style
  function* slidingWindow(arr, n) {
    const end = arr.length - n;
    for (let i = 0; i <= end; i++) {
      yield [i, i + n - 1];
    }
  }

  return (nums, k) => {
    const result = [];
    const heap = MaxPriorityQueue.from(nums.slice(0, k).map((x, i) => [i, x]));
    for (const [start, end] of slidingWindow(nums, k)) {
      heap.enqueue(end, nums[end]);
      while (heap.front().element < start) {
        heap.dequeue();
      }
      result.push(heap.front().priority);
    }
    return result;
  };
})();

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const maxSlidingWindow = usingHeap;
