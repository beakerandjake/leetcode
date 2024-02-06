/**
 * Given an array of integers nums, sort the array in ascending order and return
 * it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n))
 * time complexity and with the smallest space complexity possible.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessairly unique.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 5 * 104
 *  * -5 * 104 <= nums[i] <= 5 * 104
 *
 *
 *
 * https://leetcode.com/problems/sort-an-array
 */

const mergeSort = (() => {
  const merge = (lhs, rhs) => {
    const merged = [];
    let lhsIndex = 0;
    let rhsIndex = 0;
    while (lhsIndex < lhs.length && rhsIndex < rhs.length) {
      merged.push(lhs[lhsIndex] < rhs[rhsIndex] ? lhs[lhsIndex++] : rhs[rhsIndex++]);
    }
    while (lhsIndex < lhs.length) {
      merged.push(lhs[lhsIndex++]);
    }
    while (rhsIndex < rhs.length) {
      merged.push(rhs[rhsIndex++]);
    }
    return merged;
  };

  const doMergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const lhs = doMergeSort(arr.slice(0, mid));
    const rhs = doMergeSort(arr.slice(mid));
    return merge(lhs, rhs);
  };

  return doMergeSort;
})();

const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const lt = [];
  const gte = [];
  arr.forEach((x, i) => {
    if (i === pivotIndex) {
      return;
    }
    if (x < arr[pivotIndex]) {
      lt.push(x);
    } else {
      gte.push(x);
    }
  });
  return [...quicksort(lt), arr[pivotIndex], ...quicksort(gte)];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArray = quicksort;
