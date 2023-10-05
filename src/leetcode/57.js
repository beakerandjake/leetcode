/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 */

const isBefore = (a, b) => a[1] < b[0];

const isAfter = (a, b) => a[0] > b[1];

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
  const toInsert = newInterval;
  let inserted = false;
  for (const current of intervals) {
    if (isAfter(toInsert, current)) {
      toReturn.push(current);
    } else if (isBefore(toInsert, current)) {
      if (!inserted) {
        toReturn.push(toInsert);
        inserted = true;
      }
      toReturn.push(current);
    } else {
      toInsert[0] = Math.min(toInsert[0], current[0]);
      toInsert[1] = Math.max(toInsert[1], current[1]);
    }
  }
  if (!inserted) {
    toReturn.push(toInsert);
  }

  return toReturn;
};
