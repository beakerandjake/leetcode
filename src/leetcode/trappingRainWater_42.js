/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
export const trap = (heights) => {
  if (heights.length === 1) {
    return 0;
  }

  // speed up no need to step every level down, can move y between unique heights descending.
  // eliminates edge case of a few really tall heights

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
    // console.log('row', row, 'matches', matches);
  }
  return total;

};
