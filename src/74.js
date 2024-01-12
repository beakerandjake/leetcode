/**
 * You are given an m x n integer matrix matrix with the following two properties:
 *
 *     Each row is sorted in non-decreasing order.
 *     The first integer of each row is greater than the last integer of the previous row.
 *
 * Given an integer target, return true if target is in matrix or false otherwise.
 *
 * You must write a solution in O(log(m * n)) time complexity.
 */

const binarySearch = (arr, compareFn) => {
  if (!arr) {
    return null;
  }

  let l = 0;
  let u = arr.length - 1;
  while (l <= u) {
    const m = Math.floor(l + (u - l) / 2);
    const compare = compareFn(arr[m]);
    if (compare < 0) {
      u = m - 1;
    } else if (compare > 0) {
      l = m + 1;
    } else {
      return arr[m];
    }
  }
  return null;
};

const findRow = (matrix, target) =>
  binarySearch(matrix, (row) => {
    if (row[0] <= target && target <= row.at(-1)) {
      return 0;
    }
    return target - row[0];
  });

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export const searchMatrix = (matrix, target) =>
  binarySearch(findRow(matrix, target), (element) => target - element) !== null;
