/**
 * Given an array of distinct integers arr, find all pairs of elements with the
 * minimum absolute difference of any two elements.
 *
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a,
 * b] follows
 *
 *  * a, b are from arr
 *  * a < b
 *  * b - a equals to the minimum absolute difference of any two elements in arr
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [4,2,1,3]
 * Output: [[1,2],[2,3],[3,4]]
 * Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
 *
 * Example 2:
 *
 *
 * Input: arr = [1,3,6,10,15]
 * Output: [[1,3]]
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [3,8,-10,23,19,-4,-14,27]
 * Output: [[-14,-10],[19,23],[23,27]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= arr.length <= 105
 *  * -106 <= arr[i] <= 106
 *
 *
 *
 * https://leetcode.com/problems/minimum-absolute-difference
 */

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* pairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield [arr[i], arr[j]];
      }
    }
  }

  // returns the minimum difference between any two adjacent elements of the array.
  const minDiff = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
      min = Math.min(min, arr[i] - arr[i - 1]);
    }
    return min;
  };

  return (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const target = minDiff(sorted);
    return [...pairs(sorted)].filter(([a, b]) => a < b && b - a === target);
  };
})();

const usingSorting = (() => {
  // returns a copy of the array, sorted ascending.
  const sortedAsc = (arr) => [...arr].sort((a, b) => a - b);

  // returns the min abs different between any adjacent element of the array.
  const minAbsDiff = (arr) =>
    arr.reduce(
      (acc, x, i) => (i ? Math.min(acc, x - arr[i - 1]) : acc),
      Number.MAX_SAFE_INTEGER,
    );

  return (arr) => {
    const result = [];
    const sorted = sortedAsc(arr);
    const target = minAbsDiff(sorted);
    for (let i = 1; i < arr.length; i++) {
      if (sorted[i] - sorted[i - 1] === target) {
        result.push([sorted[i - 1], sorted[i]]);
      }
    }
    return result;
  };
})();

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
export const minimumAbsDifference = usingSorting;
