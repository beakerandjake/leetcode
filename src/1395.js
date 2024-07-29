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
  // iterates each triplet combination of the array.`
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

const usingBacktracking = (rating) => {
  let result = 0;
  const backtrack = (start, team) => {
    if (team.length === 3) {
      if (
        (team[0] < team[1] && team[1] < team[2]) ||
        (team[0] > team[1] && team[1] > team[2])
      ) {
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

const usingDp = (rating) => {
  // returns a function which can count the number of teams which satisfy the predicate
  const buildCountFn = (predicateFn) => {
    const memo = new Map();
    const dp = (index, teamSize) => {
      if (index >= rating.length) {
        return 0;
      }
      if (teamSize === 3) {
        return 1;
      }
      const hash = `${index}.${teamSize}`;
      if (!memo.has(hash)) {
        let result = 0;
        for (let next = index + 1; next < rating.length; next++) {
          if (predicateFn(rating[index], rating[next])) {
            result += dp(next, teamSize + 1);
          }
        }
        memo.set(hash, result);
      }
      return memo.get(hash);
    };
    return dp;
  };

  const increasing = buildCountFn((previous, current) => current > previous);
  const decreasing = buildCountFn((previous, current) => current < previous);
  // count the number of teams which start at each index.
  return rating.reduce((acc, _, i) => acc + increasing(i, 1) + decreasing(i, 1), 0);
};

/**
 * @param {number[]} rating
 * @return {number}
 */
export const numTeams = usingDp;
