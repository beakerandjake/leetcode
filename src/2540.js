/**
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return
 * the minimum integer common to both arrays. If there is no common integer amongst
 * nums1 and nums2, return -1.
 *
 * Note that an integer is said to be common to nums1 and nums2 if both arrays have
 * at least one occurrence of that integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,3], nums2 = [2,4]
 * Output: 2
 * Explanation: The smallest element common to both arrays is 2, so we return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
 * Output: 2
 * Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums1.length, nums2.length <= 105
 *  * 1 <= nums1[i], nums2[j] <= 109
 *  * Both nums1 and nums2 are sorted in non-decreasing order.
 *
 *
 *
 * https://leetcode.com/problems/minimum-common-value
 */

const usingSets = (() => {
  const uniqueElements = (array) => new Set(array);

  const union = (a, b) => {
    const common = [];
    for (const element of a) {
      if (b.has(element)) {
        common.push(element);
      }
    }
    return common;
  };

  const minElement = (elements) => (elements.length ? Math.min(...elements) : -1);

  return (a, b) => {
    const aUnique = uniqueElements(a);
    const bUnique = uniqueElements(b);
    const commonElements = union(aUnique, bUnique);
    return minElement(commonElements);
  };
})();

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
export const getCommon = (a, b) => {
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] === b[bIndex]) {
      return a[aIndex];
    }
    if (a[aIndex] < b[bIndex]) {
      aIndex++;
    } else {
      bIndex++;
    }
  }
  return -1;
};
