/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 */

const countVerticallyNoRegex = (heights) => {
  if (heights.length <= 2) {
    return 0;
  }

  const countBuckets = (height) => {
    let toReturn = 0;
    let consuming = heights[0] >= height;
    let potential = 0;
    for (let x = 1; x < heights.length; x++) {
      const occupied = heights[x] >= height;
      if (consuming && occupied) {
        toReturn += potential;
        potential = 0;
      } else if (consuming && !occupied) {
        potential += 1;
      } else if (!consuming && occupied) {
        consuming = true;
      }
    }
    return toReturn;
  };

  const maxHeight = Math.max(...heights);
  let height = 0;
  let toReturn = 0;
  while (height++ < maxHeight) {
    toReturn += countBuckets(heights, height);
  }
  return toReturn;
};

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

/**
 * @param {number[]} heights
 * @return {number}
 */
export const trap = (heights) => {};
