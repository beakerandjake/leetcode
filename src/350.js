/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * Explanation: [9,4] is also accepted.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums1.length, nums2.length <= 1000
 *  * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 *
 * Follow up:
 *
 *  * What if the given array is already sorted? How would you optimize your
 *    algorithm?
 *  * What if nums1's size is small compared to nums2's size? Which algorithm is
 *    better?
 *  * What if elements of nums2 are stored on disk, and the memory is limited such
 *    that you cannot load all elements into the memory at once?
 *
 *
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii
 */

// maps each unique element in the array to the number of times it occurs.
const frequencyMap = (arr) =>
  arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// returns the intersection of the two frequency maps
const intersection = (a, b) =>
  [...a].reduce(
    (acc, [k, v]) => (b.has(k) ? acc.set(k, Math.min(v, b.get(k))) : acc),
    new Map(),
  );

// returns an array where x is repeated n times.
const repeat = ([value, times]) => Array(times).fill(value);

// expands the frequency map into an array where each element occurs 'value' times
const expand = (map) => [...map].flatMap(repeat);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersect = (nums1, nums2) =>
  expand(intersection(frequencyMap(nums1), frequencyMap(nums2)));
