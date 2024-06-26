/**
 * You are given a sorted integer array arr containing 1 and prime numbers, where
 * all the integers of arr are unique. You are also given an integer k.
 *
 * For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i]
 * / arr[j].
 *
 * Return the kth smallest fraction considered. Return your answer as an array of
 * integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,3,5], k = 3
 * Output: [2,5]
 * Explanation: The fractions to be considered in sorted order are:
 * 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
 * The third fraction is 2/5.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,7], k = 1
 * Output: [1,7]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= arr.length <= 1000
 *  * 1 <= arr[i] <= 3 * 104
 *  * arr[0] == 1
 *  * arr[i] is a prime number for i > 0.
 *  * All the numbers of arr are unique and sorted in strictly increasing order.
 *  * 1 <= k <= arr.length * (arr.length - 1) / 2
 *
 *
 *
 * Follow up: Can you solve the problem with better than O(n2) complexity?
 *
 *
 *
 * https://leetcode.com/problems/k-th-smallest-prime-fraction
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* enumerateFractions(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield [arr[i], arr[j]];
      }
    }
  }

  const value = ([numer, denom]) => numer / denom;

  const sorted = (fractions) => [...fractions].sort((a, b) => value(a) - value(b));

  return (arr, k) => sorted([...enumerateFractions(arr)])[k - 1];
})();

const usingHeap = (arr, k) => {
  const heap = MinPriorityQueue.from(
    arr.map((x, i) => [[i, arr.length - 1], x / arr.at(-1)]),
  );
  let remaining = k;
  while (remaining > 1) {
    const [nI, dI] = heap.dequeue().element;
    heap.enqueue([nI, dI - 1], arr[nI] / arr[dI - 1]);
    remaining--;
  }
  const [numIndex, denomIndex] = heap.dequeue().element;
  return [arr[numIndex], arr[denomIndex]];
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export const kthSmallestPrimeFraction = usingHeap;
