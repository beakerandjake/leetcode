/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 */

const countVerticallyRegex = (heights) => {
  if (heights.length === 1) {
    return 0;
  }
  const rows = [];
  const maxHeight = Math.max(...heights);
  for (let y = 1; y <= maxHeight; y++) {
    const row = [];
    for (let x = 0; x < heights.length; x++) {
      row.push(heights[x] === 0 || heights[x] < y ? 0 : 1);
    }
    rows.push(row.join(''));
  }
  let total = 0;
  for (const row of rows) {
    const matches = row.match(/(?<=1)0+(?=1)/g);
    if (!matches) {
      continue;
    }
    total += matches.reduce((acc, x) => acc + x.length, 0);
  }
  return total;
};

const buckets = (heights) => {
  if (heights.length <= 2) {
    return 0;
  }

  const findBucketEnd = (start) => {
    let bestHeight = 0;
    let bestHeightIndex = -1;
    for (let i = start + 1; i < heights.length; i++) {
      if (heights[i] >= heights[start]) {
        return i - start > 1 ? i : -1;
      }
      if (heights[i] > bestHeight) {
        bestHeight = heights[i];
        bestHeightIndex = i;
      }
    }
    return bestHeight > 0 && bestHeightIndex - start > 1 ? bestHeightIndex : -1;
  };

  const findBuckets = () => {
    const buckets = [];
    let i = 0;
    while (i < heights.length - 1) {
      const end = findBucketEnd(i);
      if (end === -1) {
        i++;
        continue;
      }
      buckets.push([i, end]);
      i = end;
    }
    return buckets;
  };

  const sumBuckets = (buckets) =>
    buckets.reduce((acc, [start, end]) => {
      const height = Math.min(heights[start], heights[end]);
      for (let i = start + 1; i < end; i++) {
        acc += height - heights[i];
      }
      return acc;
    }, 0);

  return sumBuckets(findBuckets());
};

/**
 * @param {number[]} heights
 * @return {number}
 */
export const trap = (heights) => {
  if (heights.length <= 2) {
    return 0;
  }

  const leftMemo = new Map();
  const leftMax = (index) => {
    if (index === 0) {
      return heights[index];
    }
    if (leftMemo.has(index)) {
      return leftMemo.get(index);
    }
    const result = Math.max(heights[index], leftMax(index - 1));
    leftMemo.set(index, result);
    return result;
  };

  const rightMemo = new Map();
  const rightMax = (index) => {
    if (index === heights.length - 1) {
      return heights[index];
    }
    if (rightMemo.has(index)) {
      return rightMemo.get(index);
    }
    const result = Math.max(heights[index], rightMax(index + 1));
    rightMemo.set(index, result);
    return result;
  };

  return heights.reduce((acc, x, i) => acc + Math.min(leftMax(i), rightMax(i)) - x, 0);
};
