/**
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 */

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

const mergeSort = (nums) => {
  if (nums.length === 1) {
    return nums;
  }
  const m = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, m));
  const right = mergeSort(nums.slice(m));
  return merge(left, right);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArray = mergeSort;
