/**
 * Given an integer array sorted in non-decreasing order, there is exactly one
 * integer in the array that occurs more than 25% of the time, return that integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,1]
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= arr.length <= 104
 *  * 0 <= arr[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
 */

const bruteForce = (() => {
  const frequencyCounts = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  return (arr) => {
    const target = Math.ceil(arr.length / 4);
    for (const [num, count] of frequencyCounts(arr).entries()) {
      if (count >= target) {
        return num;
      }
    }
    return -1;
  };
})();

/**
 * @param {number[]} arr
 * @return {number}
 */
export const findSpecialInteger = (arr) => {
  const minLength = Math.floor(arr.length / 4);
  const search = (i) => {
    if (i > arr.length - minLength - 1) {
      return -1;
    }
    // arr is sorted, so arr[i] must occupy at least next minLength spaces in array
    return arr[i] === arr[i + minLength] ? arr[i] : search(i + 1);
  };
  return search(0);
};
