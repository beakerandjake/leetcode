/**
 * Given two integers n and k, return all possible combinations of k numbers chosen
 * from the range [1, n].
 *
 * You may return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 20
 *  * 1 <= k <= n
 *
 *
 *
 * https://leetcode.com/problems/combinations
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export const combine = (n, k) => {
  // numbers 1 - n
  // size of array = k

  const results = [];
  const backtrack = (current, start) => {
    if (current.length === k) {
      results.push([...current]);
      return;
    }
    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(current, i + 1);
      current.pop();
    }
  };
  backtrack([], 1);
  return results;
};
