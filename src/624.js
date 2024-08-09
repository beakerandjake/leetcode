/**
 * You are given m arrays, where each array is sorted in ascending order.
 *
 * You can pick up two integers from two different arrays (each array picks one)
 * and calculate the distance. We define the distance between two integers a and b
 * to be their absolute difference |a - b|.
 *
 * Return the maximum distance.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arrays = [[1,2,3],[4,5],[1,2,3]]
 * Output: 4
 * Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
 *
 *
 * Example 2:
 *
 *
 * Input: arrays = [[1],[1]]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == arrays.length
 *  * 2 <= m <= 105
 *  * 1 <= arrays[i].length <= 500
 *  * -104 <= arrays[i][j] <= 104
 *  * arrays[i] is sorted in ascending order.
 *  * There will be at most 105 integers in all the arrays.
 *
 *
 *
 * https://leetcode.com/problems/maximum-distance-in-arrays
 */

// returns the smallest value in the sorted (asc) array.
const minElement = (arr) => arr[0];

// returns the largest value in the sorted (asc) array.
const maxElement = (arr) => arr.at(-1);

/**
 * @param {number[][]} arrays
 * @return {number}
 */
export const maxDistance = (arrays) => {
  let distance = 0;
  let min = minElement(arrays[0]);
  let max = maxElement(arrays[0]);
  for (let i = 1; i < arrays.length; i++) {
    distance = Math.max(
      Math.abs(maxElement(arrays[i]) - min),
      Math.abs(max - minElement(arrays[i])),
      distance,
    );
    min = Math.min(min, minElement(arrays[i]));
    max = Math.max(max, maxElement(arrays[i]));
  }
  return distance;
};
