/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 */

const getOccurrenceCounts = (arr) =>
  arr.reduce((acc, x) => {
    acc.set(x, (acc.get(x) || 0) + 1);
    return acc;
  }, new Map());

/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const uniqueOccurrences = (arr) => {
  const counts = getOccurrenceCounts(arr);
  const uniqueCounts = new Set(counts.values());
  return uniqueCounts.size === counts.size;
};
