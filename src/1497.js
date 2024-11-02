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
  // iterates each possible pair of the array.
  const pairs = function* (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield [arr[i], arr[j]];
      }
    }
  };

  // filters an iterate to only those items which match the predicate
  const filter = function* (iterator, predicate) {
    for (const item of iterator) {
      if (predicate(item)) {
        yield item;
      }
    }
  };

  // returns true if n is divisible by k
  const isDivisible = (n, k) => ((n % k) + k) % k === 0;

  // returns an iterator of each pair of the array which is divisible by k
  const divisiblePairs = (arr, k) =>
    filter(pairs(arr), ([a, b]) => isDivisible(a + b, k));

  // returns a function which keeps track of pairs it has seen
  // and returns false if a pair is not unique (it's elements have been used by other pairs)
  const uniquePairs = (arr) => {
    // map each element to its frequency
    const counts = arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());
    // decrement the elements count by one, and remove if no more remain
    const decrement = (key) => {
      counts.set(key, counts.get(key) - 1);
      if (counts.get(key) === 0) {
        counts.delete(key);
      }
    };
    return ([a, b]) => {
      if (!counts.has(a) || !counts.has(b)) {
        return false;
      }
      decrement(counts, a);
      decrement(counts, b);
      return true;
    };
  };

  // returns true if the iterator has a length of at least n
  const hasLength = (iterator, n) => {
    for (let i = 0; i < n; i++) {
      const next = iterator.next();
      if (next.done) {
        return false;
      }
    }
    return true;
  };

  return (arr, k) =>
    hasLength(filter(divisiblePairs(arr, k), uniquePairs(arr)), arr.length / 2);
})();

const bruteForceTwoSum = (() => {
  // maps each item of the array to its count
  const frequencyMap = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  // decrements the value of the key by one and removes if count reaches zero
  const decrement = (map, key) => {
    map.set(key, map.get(key) - 1);
    if (map.get(key) === 0) {
      map.delete(key);
    }
  };

  // returns an generator which can create an iterator which iterates each pair who sum to target
  // keeps track of elements which have been used and only allows an element to be used once.
  const twoSummer = (arr) => {
    const counts = frequencyMap(arr);
    return function* (target) {
      for (const num of counts.keys()) {
        const compliment = target - num;
        if (!counts.has(compliment) || (compliment === num && counts.get(num) === 1)) {
          continue;
        }
        while (counts.has(num) && counts.has(compliment)) {
          yield [num, compliment];
          decrement(counts, num);
          decrement(counts, compliment);
          if (compliment === num && counts.get(compliment) === 1) {
            break;
          }
        }
      }
    };
  };

  // iterates all pairs which are divisible by k
  const divisiblePairs = function* (arr, k) {
    const twoSum = twoSummer(arr);
    // first yield all pairs which sum to 0 since 0 is divisible by k
    yield* twoSum(0);
    let multiple = k;
    const max = Math.max(Math.abs(Math.max(...arr)) * 2, k);
    while (multiple <= max) {
      yield* twoSum(multiple);
      yield* twoSum(-multiple);
      multiple += k;
    }
  };

  const hasLength = (iterator, n) => {
    for (let i = 0; i < n; i++) {
      const next = iterator.next();
      if (next.done) {
        return false;
      }
    }
    return true;
  };

  return (arr, k) => hasLength(divisiblePairs(arr, k), arr.length / 2);
})();

const usingRemainders = (() => {
  // returns a % b (accounting for negative numbers)
  const remainder = (a, b) => ((a % b) + b) % b;

  // maps the remainder of each item and k to the number of times that remainder occurs
  const remainderMap = (arr, k) =>
    arr.reduce((acc, x) => {
      const r = remainder(x, k);
      return acc.set(r, (acc.get(r) || 0) + 1);
    }, new Map());

  return (arr, k) => {
    const remainders = remainderMap(arr, k);
    // nums divisible by k can only pair with themselves (ensure even pair count)
    if (remainders.has(0) && remainders.get(0) % 2 !== 0) {
      return false;
    }
    for (let i = 1; i <= Math.floor(k / 2); i++) {
      // must match exactly or a num will be left out and we won't end up with k/2 pairs
      if (remainders.get(i) !== remainders.get(k - i)) {
        return false;
      }
    }
    return true;
  };
})();

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
export const canArrange = usingRemainders;
