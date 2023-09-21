/**
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 */

// const dp = (() => {
//   const area = (heights, from, to) =>
//     to > from ? (to - from) * Math.min(heights[to], heights[from]) : 0;

//   return (heights) => {
//     const count = heights.length + 1;
//     const history = [...Array(count)].map(() => Array(count).fill(0));
//     for (let i = 1; i < count; i++) {
//       for (let j = 1; j < count; j++) {
//         history[i][j] = Math.max(
//           area(heights, i - 1, j - 1),
//           history[i - 1][j],
//           history[i][j - 1]
//         );
//       }
//     }
//     return history[count - 1][count - 1];
//   };
// })();

/**
 * @param {number[]} heights
 * @return {number}
 */
export const maxArea = (heights) => {};
