/**
 * You are given an array happiness of length n, and a positive integer k.
 *
 * There are n children standing in a queue, where the ith child has happiness
 * value happiness[i]. You want to select k children from these n children in k
 * turns.
 *
 * In each turn, when you select a child, the happiness value of all the children
 * that have not been selected till now decreases by 1. Note that the happiness
 * value cannot become negative and gets decremented only if it is positive.
 *
 * Return the maximum sum of the happiness values of the selected children you can
 * achieve by selecting k children.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: happiness = [1,2,3], k = 2
 * Output: 4
 * Explanation: We can pick 2 children in the following way:
 * - Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
 * - Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. Note that the happiness value cannot become less than 0.
 * The sum of the happiness values of the selected children is 3 + 1 = 4.
 *
 *
 * Example 2:
 *
 *
 * Input: happiness = [1,1,1,1], k = 2
 * Output: 1
 * Explanation: We can pick 2 children in the following way:
 * - Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0,0,0].
 * - Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0,0].
 * The sum of the happiness values of the selected children is 1 + 0 = 1.
 *
 *
 * Example 3:
 *
 *
 * Input: happiness = [2,3,4,5], k = 1
 * Output: 5
 * Explanation: We can pick 1 child in the following way:
 * - Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
 * The sum of the happiness values of the selected children is 5.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n == happiness.length <= 2 * 105
 *  * 1 <= happiness[i] <= 108
 *  * 1 <= k <= n
 *
 *
 *
 * https://leetcode.com/problems/maximize-happiness-of-selected-children
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const usingHeap = (() => {
  const toHeap = (happiness) =>
    happiness.reduce((acc, x) => acc.enqueue(x), new MaxPriorityQueue());

  const decreaseHappiness = (heap) => {
    const newHeap = new MaxPriorityQueue();
    while (!heap.isEmpty()) {
      newHeap.enqueue(Math.max(heap.dequeue().element - 1, 0));
    }
    return newHeap;
  };

  return (happiness, k) => {
    let sum = 0;
    let heap = toHeap(happiness);
    let remaining = k;
    while (remaining && !heap.isEmpty()) {
      sum += heap.dequeue().element;
      heap = decreaseHappiness(heap);
      remaining--;
    }
    return sum;
  };
})();

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
export const maximumHappinessSum = (happiness, k) =>
  [...happiness]
    .sort((a, b) => b - a)
    .slice(0, k)
    .reduce((acc, x, i) => acc + Math.max(x - i, 0), 0);
