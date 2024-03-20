/**
 * An integer has sequential digits if and only if each digit in the number is one
 * more than the previous digit.
 *
 * Return a sorted list of all the integers in the range [low, high] inclusive that
 * have sequential digits.
 *
 *
 *
 * Example 1:
 *
 * Input: low = 100, high = 300
 * Output: [123,234]
 *
 *
 * Example 2:
 *
 * Input: low = 1000, high = 13000
 * Output: [1234,2345,3456,4567,5678,6789,12345]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 10 <= low <= high <= 10^9
 *
 *
 *
 * https://leetcode.com/problems/sequential-digits
 */

// invokes the visitFn for every substring of the str.
const substrings = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j + 1));
    }
  }
  return result;
};

const bruteForce = (() => {
  // contains all possible sequential numbers for the input range.
  const lookup = new Set(substrings('123456789').map((x) => Number.parseInt(x, 10)));

  // invokes the visitFn on every number in range (from-to) inclusive.
  const iterateRange = (from, to, visitFn) => {
    for (let i = from; i <= to; i++) {
      visitFn(i);
    }
  };

  return (low, high) => {
    const nums = [];
    iterateRange(low, high, (num) => {
      if (lookup.has(num)) {
        nums.push(num);
      }
    });
    return nums;
  };
})();

const usingBinarySearch = (() => {
  const lookup = substrings('123456789')
    .map((x) => Number.parseInt(x, 10))
    .sort((a, b) => a - b);

  // returns the index of the first value higher than target
  const findLowIndex = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const m = low + Math.floor((high - low) / 2);
      if (arr[m] < target) {
        low = m + 1;
      } else {
        high = m - 1;
      }
    }
    return low;
  };

  // returns the index of the first value larger than target.
  const findHighIndex = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const m = low + Math.floor((high - low) / 2);
      if (target < arr[m]) {
        high = m - 1;
      } else {
        low = m + 1;
      }
    }
    return low;
  };

  return (low, high) =>
    lookup.slice(findLowIndex(lookup, low), findHighIndex(lookup, high));
})();

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
export const sequentialDigits = usingBinarySearch;
