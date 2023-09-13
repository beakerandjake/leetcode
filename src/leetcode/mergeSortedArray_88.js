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
export const merge = (nums1, num1Length, nums2, num2Length) => {
  let num1Index = num1Length - 1;
  let num2Index = num2Length - 1;
  for (let i = num1Length + num2Length; i--; ) {
    if (num1Index < 0) {
      nums1[i] = nums2[num2Index--];
    } else if (num2Index < 0) {
      nums1[i] = nums1[num1Index--];
    } else {
      nums1[i] =
        nums1[num1Index] >= nums2[num2Index] ? nums1[num1Index--] : nums2[num2Index--];
    }
  }
};;
