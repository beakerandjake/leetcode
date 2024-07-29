/**
 * There are n soldiers standing in a line. Each soldier is assigned a unique
 * rating value.
 *
 * You have to form a team of 3 soldiers amongst them under the following rules:
 *
 *  * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j],
 *    rating[k]).
 *  * A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] >
 *    rating[j] > rating[k]) where (0 <= i < j < k < n).
 *
 * Return the number of teams you can form given the conditions. (soldiers can be
 * part of multiple teams).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: rating = [2,5,3,4,1]
 * Output: 3
 * Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).
 *
 *
 * Example 2:
 *
 *
 * Input: rating = [2,1,3]
 * Output: 0
 * Explanation: We can't form any team given the conditions.
 *
 *
 * Example 3:
 *
 *
 * Input: rating = [1,2,3,4]
 * Output: 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == rating.length
 *  * 3 <= n <= 1000
 *  * 1 <= rating[i] <= 105
 *  * All the integers in rating are unique.
 *
 *
 *
 * https://leetcode.com/problems/count-number-of-teams
 */

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* triplets(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          yield [arr[i], arr[j], arr[k]];
        }
      }
    }
  }

  return (rating) => {
    let result = 0;
    for (const [a, b, c] of triplets(rating)) {
      if ((a < b && b < c) || (a > b && b > c)) {
        result++;
      }
    }
    return result;
  };
})();

const usingBacktracking = (() => {
  const isDescending = (team) => team[0] < team[1] && team[1] < team[2];

  const isAscending = (team) => team[0] > team[1] && team[1] > team[2];

  const isValid = (team) => isAscending(team) || isDescending(team);

  return (rating) => {
    let result = 0;
    const backtrack = (start, team) => {
      if (team.length === 3) {
        if (isValid(team)) {
          result++;
        }
        return;
      }
      for (let i = start; i < rating.length; i++) {
        team.push(rating[i]);
        backtrack(i + 1, team);
        team.pop();
      }
    };
    backtrack(0, []);
    return result;
  };
})();

/**
 * @param {number[]} rating
 * @return {number}
 */
export const numTeams = usingBacktracking;
