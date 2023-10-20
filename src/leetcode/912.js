/**
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 */

const mergeSort = (() => {
  const merge = (a, b) => {
    const merged = [];
    let aIndex = 0;
    let bIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
      merged.push(a[aIndex] < b[bIndex] ? a[aIndex++] : b[bIndex++]);
    }
    if (aIndex !== a.length) {
      merged.push(...a.slice(aIndex));
    }
    if (bIndex !== b.length) {
      merged.push(...b.slice(bIndex));
    }
    return merged;
  };

  const doMergeSort = (nums) => {
    if (nums.length === 1) {
      return nums;
    }
    const m = Math.floor(nums.length / 2);
    const left = doMergeSort(nums.slice(0, m));
    const right = doMergeSort(nums.slice(m));
    return merge(left, right);
  };

  return doMergeSort;
})();

const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  const lessThan = [];
  const greaterThan = [];
  arr.forEach((item, index) => {
    if (index === pivotIndex) {
      return;
    }
    if (item < pivot) {
      lessThan.push(item);
    } else {
      greaterThan.push(item);
    }
  });
  return [...quicksort(lessThan), pivot, ...quicksort(greaterThan)];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArray = quicksort;
