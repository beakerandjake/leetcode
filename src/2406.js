/**
 * You are given a 2D integer array intervals where intervals[i] = [lefti, righti]
 * represents the inclusive interval [lefti, righti].
 *
 * You have to divide the intervals into one or more groups such that each interval
 * is in exactly one group, and no two intervals that are in the same group
 * intersect each other.
 *
 * Return the minimum number of groups you need to make.
 *
 * Two intervals intersect if there is at least one common number between them. For
 * example, the intervals [1, 5] and [5, 8] intersect.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
 * Output: 3
 * Explanation: We can divide the intervals into the following groups:
 * - Group 1: [1, 5], [6, 8].
 * - Group 2: [2, 3], [5, 10].
 * - Group 3: [1, 10].
 * It can be proven that it is not possible to divide the intervals into fewer than 3 groups.
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,3],[5,6],[8,10],[11,13]]
 * Output: 1
 * Explanation: None of the intervals overlap, so we can put all of them in one group.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= intervals.length <= 105
 *  * intervals[i].length == 2
 *  * 1 <= lefti <= righti <= 106
 *
 *
 *
 * https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups
 */

const start = (i) => i[0];

const end = (i) => i[1];

const isBefore = (a, b) => end(a) < start(b);

const usingHeap = async () => {
  const { MinPriorityQueue } = await import('@datastructures-js/priority-queue');
  return (intervals) => {
    const sorted = [...intervals].sort((a, b) => start(a) - start(b));
    const heap = new MinPriorityQueue({ priority: end });
    heap.enqueue(sorted[0]);
    for (let i = 1; i < sorted.length; i++) {
      // if current element does not overlap with current "group" (represented by top of heap)
      // then merge it into the group by popping and replacing, so the current interval
      // becomes the end of the group.
      if (isBefore(heap.front().element, sorted[i])) {
        heap.dequeue();
      }
      heap.enqueue(sorted[i]);
    }
    return heap.size();
  };
};

const usingLineSweep = (() => {
  // merges the intervals together into one range which covers all intervals.
  const merge = (intervals) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (const interval of intervals) {
      min = Math.min(min, start(interval));
      max = Math.max(max, end(interval));
    }
    return [min, max];
  };

  // returns an array representing the line sweep count of the intervals.
  const lineSweep = (intervals) => {
    const range = merge(intervals);
    const counts = Array(end(range) - start(range) + 2).fill(0);
    for (const i of intervals) {
      counts[start(i) - start(range)]++;
      counts[end(i) - start(range) + 1]--;
    }
    return counts;
  };

  return (intervals) => {
    let overlapping = 0;
    return lineSweep(intervals).reduce((acc, count) => {
      overlapping += count;
      return Math.max(acc, overlapping);
    }, 0);
  };
})();

/**
 * @param {number[][]} intervals
 * @return {number}
 */
export const minGroups = usingLineSweep;
