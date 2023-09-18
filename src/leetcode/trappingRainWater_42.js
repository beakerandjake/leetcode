/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 */

// const countVerticallyNoRegex = (heights) => {
//   if (heights.length <= 2) {
//     return 0;
//   }

//   const countBuckets = (height) => {
//     let toReturn = 0;
//     let consuming = heights[0] >= height;
//     let potential = 0;
//     for (let x = 1; x < heights.length; x++) {
//       const occupied = heights[x] >= height;
//       if (consuming && occupied) {
//         toReturn += potential;
//         potential = 0;
//       } else if (consuming && !occupied) {
//         potential += 1;
//       } else if (!consuming && occupied) {
//         consuming = true;
//       }
//     }
//     return toReturn;
//   };

//   const maxHeight = Math.max(...heights);
//   let height = 0;
//   let toReturn = 0;
//   while (height++ < maxHeight) {
//     toReturn += countBuckets(heights, height);
//   }
//   return toReturn;
// };

// const countVerticallyRegex = (heights) => {
//   if (heights.length === 1) {
//     return 0;
//   }

//   const rows = [];
//   const maxHeight = Math.max(...heights);
//   for (let y = 1; y <= maxHeight; y++) {
//     const row = [];
//     for (let x = 0; x < heights.length; x++) {
//       row.push(heights[x] === 0 || heights[x] < y ? 0 : 1);
//     }
//     rows.push(row.join(''));
//   }
//   let total = 0;
//   for (const row of rows) {
//     const matches = row.match(/(?<=1)0+(?=1)/g);
//     if (!matches) {
//       continue;
//     }
//     total += matches.reduce((acc, x) => acc + x.length, 0);
//   }
//   return total;
// };

// const scanRightBuckets = (heights) => {
//   if (heights.length <= 2) {
//     return 0;
//   }

//   const scanRight = (start) => {
//     const startHeight = heights[start];
//     let secondChoice = start === heights.length - 1 ? -1 : start + 1;
//     for (let i = start + 1; i < heights.length; i++) {
//       const height = heights[i];
//       // if we find a height that is equal or greater we're done with this search.
//       if (height >= startHeight) {
//         return i - start > 1 ? i : -1;
//       }
//       if (height > secondChoice) {
//         secondChoice = i;
//       }
//     }
//     return secondChoice === -1 || secondChoice === start + 1 ? -1 : secondChoice;
//   };

//   const getBucketsRight = () => {
//     const buckets = [];
//     let i = 0;
//     while (i < heights.length) {
//       const end = scanRight(i);
//       if (end === -1) {
//         i++;
//         continue;
//       }
//       buckets.push([i, end]);
//       i = end;
//     }
//     return buckets;
//   };

//   const sumBuckets = (buckets) => {
//     let toReturn = 0;
//     for (const [start, end] of buckets) {
//       const min = Math.min(heights[start], heights[end]);
//       for (let i = start + 1; i < end; i++) {
//         toReturn += min - heights[i];
//       }
//     }
//     return toReturn;
//   };

//   const buckets = getBucketsRight();
//   return sumBuckets(buckets);
// };

/**
 * @param {number[]} heights
 * @return {number}
 */
export const trap = (heights) => {
  if (heights.length <= 2) {
    return 0;
  }

  const findBucketEnd = (start) => {
    let bestHeight = 0;
    let bestHeightIndex = -1;
    for (let i = start + 1; i < heights.length; i++) {
      // equal or greater height
      if (heights[i] >= heights[start]) {
        // return -1 if one unit away
        return i - start > 1 ? i : -1;
      }
      // store max height encountered, only update if greater than max
      if (heights[i] > bestHeight) {
        bestHeight = heights[i];
        bestHeightIndex = i;
      }
    }
    // return max height if > 1 unit away, otherwise -1
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

  const sumBuckets = (buckets) => {
    let total = 0;
    for (const [start, end] of buckets) {
      const height = Math.min(heights[start], heights[end]);
      for (let i = start + 1; i < end; i++) {
        total += height - heights[i];
      }
    }
    return total;
  };

  return sumBuckets(findBuckets());
};
