/**
 * Given an integer array arr, return true if there are three consecutive odd
 * numbers in the array. Otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [2,6,4,1]
 * Output: false
 * Explanation: There are no three consecutive odds.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2,34,3,4,5,7,23,12]
 * Output: true
 * Explanation: [5,7,23] are three consecutive odds.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= arr.length <= 1000
 *  * 1 <= arr[i] <= 1000
 *
 *
 *
 * https://leetcode.com/problems/three-consecutive-odds
 */

const bruteForce = (() => {
  // return each triplet of the array using a sliding window.
  // eslint-disable-next-line func-style
  function* slidingWindow(arr, windowSize) {
    const end = arr.length - windowSize;
    for (let i = 0; i <= end; i++) {
      yield arr.slice(i, i + windowSize);
    }
  }

  // returns true if the number is odd.
  const isOdd = (x) => x % 2 !== 0;

  return (arr) => {
    for (const triplet of slidingWindow(arr, 3)) {
      if (triplet.every(isOdd)) {
        return true;
      }
    }
    return false;
  };
})();

const usingSlidingWindow = (() => {
  // returns 1 if the number is odd, 0 if even.
  const isOdd = (num) => num % 2 !== 0;

  // runs a sliding window on the array, returns true if all elements in the window match the predicateFn
  const slidingWindow = (arr, predicateFn, windowSize) => {
    let left = 0;
    let right = 0;
    let matchCount = 0;
    while (right < arr.length) {
      matchCount += predicateFn(arr[right]) ? 1 : 0;
      // contract window when greater than window size.
      while (right - left + 1 > windowSize) {
        matchCount -= predicateFn(arr[left]) ? 1 : 0;
        left++;
      }
      if (matchCount === windowSize) {
        return true;
      }
      right++;
    }
    return false;
  };

  // find the first odd triplet.
  return (arr) => slidingWindow(arr, isOdd, 3);
})();

/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const threeConsecutiveOdds = usingSlidingWindow;
