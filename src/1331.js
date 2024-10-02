/**
 * Given an array of integers arr, replace each element with its rank.
 *
 * The rank represents how large the element is. The rank has the following rules:
 *
 *  * Rank is an integer starting from 1.
 *  * The larger the element, the larger the rank. If two elements are equal, their
 *    rank must be the same.
 *  * Rank should be as small as possible.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [40,10,20,30]
 * Output: [4,1,2,3]
 * Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
 *
 * Example 2:
 *
 *
 * Input: arr = [100,100,100]
 * Output: [1,1,1]
 * Explanation: Same elements share the same rank.
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [37,12,28,9,100,56,80,5,12]
 * Output: [5,3,4,2,8,6,7,1,3]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= arr.length <= 105
 *  * -109 <= arr[i] <= 109
 *
 *
 *
 * https://leetcode.com/problems/rank-transform-of-an-array
 */

// returns all of the unique elements of the array.
const unique = (arr) => [...new Set(arr)];

// returns a copy of the array sorted ascending
const sorted = (arr) => [...arr].sort((a, b) => a - b);

// converts a sorted array to its rank mapping
// each item is mapped to its index in the array (1 based)
const toRankMap = (arr) => arr.reduce((acc, x, i) => acc.set(x, i + 1), new Map());

// returns new array of the rank of each item
const ranks = (arr, rankMap) => arr.map((x) => rankMap.get(x));

/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const arrayRankTransform = (arr) => ranks(arr, toRankMap(sorted(unique(arr))));
