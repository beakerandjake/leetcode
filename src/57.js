/**
 * You are given an array of non-overlapping intervals intervals where intervals[i]
 * = [starti, endi] represent the start and the end of the ith interval and
 * intervals is sorted in ascending order by starti. You are also given an interval
 * newInterval = [start, end] that represents the start and end of another
 * interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in
 * ascending order by starti and intervals still does not have any overlapping
 * intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Note that you don't need to modify intervals in-place. You can make a new array
 * and return it.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= intervals.length <= 104
 *  * intervals[i].length == 2
 *  * 0 <= starti <= endi <= 105
 *  * intervals is sorted by starti in ascending order.
 *  * newInterval.length == 2
 *  * 0 <= start <= end <= 105
 *
 *
 *
 * https://leetcode.com/problems/insert-interval
 */

// returns the start of the interval
const start = (interval) => interval[0];

// returns the end of the interval
const end = (interval) => interval[1];

// returns true if interval a comes before interval b
const comesBefore = (a, b) => end(a) < start(b);

// returns true if interval a comes after interval
const comesAfter = (a, b) => start(a) > end(b);

// returns true if a and b overlap
const overlaps = (a, b) => !comesBefore(a, b) && !comesAfter(a, b);

// merges the overlapping intervals into one interval.
const merge = (a, b) =>
  a && b ? [Math.min(start(a), start(b)), Math.max(end(a), end(b))] : a || b;

// merge an array of sorted overlapping intervals into a single interval.
const compress = (overlapping) => {
  if (!overlapping.length) {
    return null;
  }
  if (overlapping.length === 1) {
    return overlapping[0];
  }
  return merge(overlapping.at(0), overlapping.at(-1));
};

const simpleSolution = (intervals, newInterval) => {
  const before = intervals.filter((interval) => comesBefore(interval, newInterval));
  const overlapping = intervals.filter((interval) => overlaps(interval, newInterval));
  const after = intervals.filter((interval) => comesAfter(interval, newInterval));
  return [...before, merge(compress(overlapping), newInterval), ...after];
};

const recursiveSolution = (intervals, newInterval) => {
  if (!intervals?.length) {
    return [newInterval];
  }
  if (!newInterval) {
    return intervals;
  }
  if (comesBefore(newInterval, intervals[0])) {
    return [newInterval, ...intervals];
  }
  if (comesAfter(newInterval, intervals[0])) {
    return [intervals[0], ...recursiveSolution(intervals.slice(1), newInterval)];
  }
  return recursiveSolution(intervals.slice(1), merge(newInterval, intervals[0]));
};

const partitionSolution = (() => {
  const partition = (intervals, newInterval) =>
    intervals.reduce(
      (acc, x) => {
        if (comesBefore(x, newInterval)) {
          acc[0].push(x);
        } else if (comesAfter(x, newInterval)) {
          acc[2].push(x);
        } else {
          acc[1].push(x);
        }
        return acc;
      },
      [[], [], []]
    );

  return (intervals, newInterval) => {
    const [before, overlapping, after] = partition(intervals, newInterval);
    return [...before, merge(compress(overlapping), newInterval), ...after];
  };
})();

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export const insert = recursiveSolution;
