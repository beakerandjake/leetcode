/**
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */

const simple = (() => {
  const findGreater = (nums, index) => {
    const orig = nums[index];
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > orig) {
        return nums[i];
      }
    }
    return -1;
  };

  return (nums1, nums2) => {
    const indexMap = nums2.reduce((acc, x, index) => acc.set(x, index), new Map());
    return nums1.map((num) => findGreater(nums2, indexMap.get(num)));
  };
})();

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const nextGreaterElement = simple;
