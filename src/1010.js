/**
 * You are given a list of songs where the ith song has a duration of time[i]
 * seconds.
 *
 * Return the number of pairs of songs for which their total duration in seconds is
 * divisible by 60. Formally, we want the number of indices i, j such that i < j
 * with (time[i] + time[j]) % 60 == 0.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: time = [30,20,150,100,40]
 * Output: 3
 * Explanation: Three pairs have a total duration divisible by 60:
 * (time[0] = 30, time[2] = 150): total duration 180
 * (time[1] = 20, time[3] = 100): total duration 120
 * (time[1] = 20, time[4] = 40): total duration 60
 *
 *
 * Example 2:
 *
 *
 * Input: time = [60,60,60]
 * Output: 3
 * Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= time.length <= 6 * 104
 *  * 1 <= time[i] <= 500
 *
 *
 *
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
 */

const bruteForce = (() => {
  // iterates each pair of the array and yields their sum
  // eslint-disable-next-line func-style
  function* pairSums(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        yield arr[i] + arr[j];
      }
    }
  }

  // returns the number of elements in the array which satisfy the predicate
  const count = (arr, predicateFn) =>
    arr.reduce((acc, x) => acc + (predicateFn(x) ? 1 : 0), 0);

  return (time) => count([...pairSums(time)], (x) => x % 60 === 0);
})();

const twoSum = (times) => {
  const remainders = Array(60).fill(0);
  return times.reduce((acc, time) => {
    const pairs = time % 60 === 0 ? remainders[0] : remainders[60 - (time % 60)];
    remainders[time % 60]++;
    return acc + pairs;
  }, 0);
};

/**
 * @param {number[]} time
 * @return {number}
 */
export const numPairsDivisibleBy60 = twoSum;
