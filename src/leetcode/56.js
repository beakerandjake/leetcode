/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

const slow = (() => {
  const covers = ([s1, e1], [s2, e2]) => s1 <= e2 && e1 >= s2;

  const mergeOverlapping = ([s1, e1], [s2, e2]) => [Math.min(s1, s2), Math.max(e1, e2)];

  const reduce = (intervals, interval, firstMatchIndex) => {
    const toReturn = [...intervals.slice(0, firstMatchIndex), []];
    let reducing = mergeOverlapping(intervals[firstMatchIndex], interval);
    for (let i = firstMatchIndex + 1; i < intervals.length; i++) {
      if (covers(reducing, intervals[i])) {
        reducing = mergeOverlapping(intervals[i], reducing);
      } else {
        toReturn.push(intervals[i]);
      }
    }
    toReturn[firstMatchIndex] = reducing;
    return toReturn;
  };

  return (intervals) => {
    let merged = [];
    for (const interval of intervals) {
      const mergeIndex = merged.findIndex((x) => covers(x, interval));
      if (mergeIndex === -1) {
        merged.push(interval);
      } else {
        merged = reduce(merged, interval, mergeIndex);
      }
    }
    return merged;
  };
})();

const iterative = (() => {
  const consumeRange = (numberLine, index, length) => {
    let i = index;
    let remaining = length;
    while (remaining) {
      remaining = Math.max(numberLine[i], remaining - 1);
      if (remaining === 0) {
        return i;
      }
      i++;
    }
    return i;
  };

  return (intervals) => {
    const numberLine = Array(10 ** 4 + 1).fill(-1);
    for (const [start, end] of intervals) {
      numberLine[start] = Math.max(numberLine[start], end - start);
    }

    const toReturn = [];
    let i = 0;
    while (i < numberLine.length) {
      if (numberLine[i] < 0) {
        i++;
        continue;
      }
      const rangeEnd = consumeRange(numberLine, i, numberLine[i]);
      toReturn.push([i, rangeEnd]);
      i = rangeEnd + 1;
    }
    return toReturn;
  };
})();

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export const merge = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }
  const covers = ([s1, e1], [s2, e2]) => s1 <= e2 && e1 >= s2;
  const sorted = [...intervals].sort(([s1], [s2]) => s1 - s2);
  const toReturn = [sorted[0]];
  for (const interval of sorted) {
    const currentRange = toReturn.at(-1);
    if (covers(currentRange, interval)) {
      currentRange[0] = Math.min(currentRange[0], interval[0]);
      currentRange[1] = Math.max(currentRange[1], interval[1]);
    } else {
      toReturn.push(interval);
    }
  }
  return toReturn;
};
