/**
 * You are given an integer array nums.
 *
 * In one move, you can choose one element of nums and change it to any value.
 *
 * Return the minimum difference between the largest and smallest value of nums
 * after performing at most three moves.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [5,3,2,4]
 * Output: 0
 * Explanation: We can make at most 3 moves.
 * In the first move, change 2 to 3. nums becomes [5,3,3,4].
 * In the second move, change 4 to 3. nums becomes [5,3,3,3].
 * In the third move, change 5 to 3. nums becomes [3,3,3,3].
 * After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,5,0,10,14]
 * Output: 1
 * Explanation: We can make at most 3 moves.
 * In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
 * In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
 * In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
 * After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
 * It can be shown that there is no way to make the difference 0 in 3 moves.
 *
 * Example 3:
 *
 *
 * Input: nums = [3,100,20]
 * Output: 0
 * Explanation: We can make at most 3 moves.
 * In the first move, change 100 to 7. nums becomes [3,7,20].
 * In the second move, change 20 to 7. nums becomes [3,7,7].
 * In the third move, change 3 to 7. nums becomes [7,7,7].
 * After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 105
 *  * -109 <= nums[i] <= 109
 *
 *
 *
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves
 */

import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

const usingHeaps = (() => {
  const nLargest = (arr, n) => {
    const heap = arr.reduce(
      (acc, x) => {
        acc.enqueue(x);
        return acc;
      },
      new MaxPriorityQueue({ priority: (x) => x }),
    );
    return [...Array(n)].map(() => heap.dequeue().element);
  };

  const nSmallest = (arr, n) => {
    const heap = arr.reduce(
      (acc, x) => {
        acc.enqueue(x);
        return acc;
      },
      new MinPriorityQueue({ priority: (x) => x }),
    );
    return [...Array(n)].map(() => heap.dequeue().element);
  };

  return (nums) => {
    if (nums.length <= 4) {
      return 0;
    }
    const smallest = nSmallest(nums, 4);
    const largest = nLargest(nums, 4);
    const choices = [
      [smallest[0], largest[3]],
      [smallest[1], largest[2]],
      [smallest[2], largest[1]],
      [smallest[3], largest[0]],
    ];
    return Math.min(...choices.map(([a, b]) => Math.abs(a - b)));
  };
})();

const usingSorting = (() => {
  const N = 4;

  // returns an array of pairs which represent all possible moves.
  // each pair contains the index offsets of the max and min number
  const pairs = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push([n - i, i]);
    }
    return result;
  };

  return (nums) => {
    if (nums.length <= N) {
      return 0;
    }
    const sorted = [...nums].sort((a, b) => a - b);
    return Math.min(
      ...pairs(N).map(([hi, lo]) => sorted[sorted.length - hi] - sorted[lo]),
    );
  };
})();

/**
 * @param {number[]} nums
 * @return {number}
 */
export const minDifference = usingSorting;
