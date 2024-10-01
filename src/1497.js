/**
 * Given an array of integers arr of even length n and an integer k.
 *
 * We want to divide the array into exactly n / 2 pairs such that the sum of each
 * pair is divisible by k.
 *
 * Return true If you can find a way to do that or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
 * Output: true
 * Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,3,4,5,6], k = 7
 * Output: true
 * Explanation: Pairs are (1,6),(2,5) and(3,4).
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [1,2,3,4,5,6], k = 10
 * Output: false
 * Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
 *
 *
 *
 *
 * Constraints:
 *
 *  * arr.length == n
 *  * 1 <= n <= 105
 *  * n is even.
 *  * -109 <= arr[i] <= 109
 *  * 1 <= k <= 105
 *
 *
 *
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k
 */

const bruteForce = (() => {
  const pairs = function* (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield [arr[i], arr[j]];
      }
    }
  };

  const filter = function* (iterator, predicate) {
    for (const item of iterator) {
      if (predicate(item)) {
        yield item;
      }
    }
  };

  const isDivisible = (n, k) => ((n % k) + k) % k === 0;

  const divisiblePairs = (arr, k) =>
    filter(pairs(arr), ([a, b]) => isDivisible(a + b, k));

  const hasLength = (iterator, n) => {
    for (let i = 0; i < n; i++) {
      const next = iterator.next();
      if (next.done) {
        return false;
      }
    }
    return true;
  };

  const frequencyCounts = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  const decrement = (counts, key) => {
    counts.set(key, counts.get(key) - 1);
    if (counts.get(key) === 0) {
      counts.delete(key);
    }
  };

  const uniquePairs = (arr) => {
    const counts = frequencyCounts(arr);
    return ([a, b]) => {
      if (!counts.has(a) || !counts.has(b)) {
        return false;
      }
      decrement(counts, a);
      decrement(counts, b);
      return true;
    };
  };

  return (arr, k) =>
    hasLength(filter(divisiblePairs(arr, k), uniquePairs(arr)), arr.length / 2);
})();

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
export const canArrange = bruteForce;
