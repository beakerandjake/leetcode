/* eslint-disable no-param-reassign */

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */
export const merge = (a, aLength, b, bLength) => {
  let aIndex = aLength - 1;
  let bIndex = bLength - 1;
  for (let index = aLength + bLength; index--; ) {
    if (aIndex < 0) {
      a[index] = b[bIndex--];
    } else if (bIndex < 0) {
      a[index] = a[aIndex--];
    } else {
      a[index] = a[aIndex] >= b[bIndex] ? a[aIndex--] : b[bIndex--];
    }
  }
};
