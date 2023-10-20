/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

const merge = (a, b) => {
  const toReturn = [];
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < a.length && bIndex < b.length) {
    toReturn.push(a[aIndex] < b[bIndex] ? a[aIndex++] : b[bIndex++]);
  }
  if (aIndex !== a.length) {
    toReturn.push(...a.slice(aIndex));
  }
  if (bIndex !== b.length) {
    toReturn.push(...b.slice(bIndex));
  }
  return toReturn;
};

const median = (arr) =>
  arr.length % 2 === 0
    ? (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2 - 1)]) / 2
    : arr[Math.floor(arr.length / 2)];

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = (nums1, nums2) => median(merge(nums1, nums2));
