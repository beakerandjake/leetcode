/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export const insert = (intervals, newInterval) => {
  if (intervals.length <= 0) {
    return [newInterval];
  }
  const toReturn = [];
  const current = newInterval;
  let inserted = false;
  for (const interval of intervals) {
    if (interval[1] < current[0]) {
      toReturn.push(interval);
    } else if (current[1] < interval[0]) {
      if (!inserted) {
        toReturn.push(current);
        inserted = true;
      }
      toReturn.push(interval);
    } else {
      current[0] = Math.min(current[0], interval[0]);
      current[1] = Math.max(current[1], interval[1]);
    }
  }
  if (!inserted) {
    toReturn.push(current);
  }

  return toReturn;
};
