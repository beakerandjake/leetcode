/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 *     answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 *     answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number[][]}
 */
export const findDifference = (a, b) => {
  const aUnique = new Set(a);
  const bUnique = new Set(b);
  return [
    [...aUnique].filter((num) => !bUnique.has(num)),
    [...bUnique].filter((num) => !aUnique.has(num)),
  ];
};
