/**
 * There are n workers. You are given two integer arrays quality and wage where
 * quality[i] is the quality of the ith worker and wage[i] is the minimum wage
 * expectation for the ith worker.
 *
 * We want to hire exactly k workers to form a paid group. To hire a group of k
 * workers, we must pay them according to the following rules:
 *
 *  1. Every worker in the paid group must be paid at least their minimum wage
 *     expectation.
 *  2. In the group, each worker's pay must be directly proportional to their
 *     quality. This means if a worker’s quality is double that of another worker
 *     in the group, then they must be paid twice as much as the other worker.
 *
 * Given the integer k, return the least amount of money needed to form a paid
 * group satisfying the above conditions. Answers within 10-5 of the actual answer
 * will be accepted.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: quality = [10,20,5], wage = [70,50,30], k = 2
 * Output: 105.00000
 * Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
 *
 *
 * Example 2:
 *
 *
 * Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
 * Output: 30.66667
 * Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == quality.length == wage.length
 *  * 1 <= k <= n <= 104
 *  * 1 <= quality[i], wage[i] <= 104
 *
 *
 *
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const zip = (a, b) => a.map((x, i) => [x, b[i]]);

const quality = (candidate) => candidate[0];

const wage = (candidate) => candidate[1];

const wageToQualityRatio = (candidate) => wage(candidate) / quality(candidate);

const sorted = (candidates) =>
  [...candidates].sort((a, b) => wageToQualityRatio(a) - wageToQualityRatio(b));

/**
 * @param {number[]} qualities
 * @param {number[]} wages
 * @param {number} k
 * @return {number}
 */
export const mincostToHireWorkers = (qualities, wages, k) => {
  let result = Number.MAX_SAFE_INTEGER;
  const candidates = sorted(zip(qualities, wages));
  const heap = new MaxPriorityQueue();
  let qSum = 0;
  for (const candidate of candidates) {
    const cRatio = wageToQualityRatio(candidate);
    heap.enqueue(cRatio, quality(candidate));
    qSum += quality(candidate);
    // when queue is full remove candidates who are too high of quality.
    if (heap.size() > k) {
      qSum -= heap.dequeue().priority;
    }
    // see if these candidates result in the smallest sum
    if (heap.size() === k) {
      result = Math.min(result, qSum * cRatio);
    }
  }
  return result;
};
