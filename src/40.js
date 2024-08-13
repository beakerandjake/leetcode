/**
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate numbers
 * sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= candidates.length <= 100
 *  * 1 <= candidates[i] <= 50
 *  * 1 <= target <= 30
 *
 *
 *
 * https://leetcode.com/problems/combination-sum-ii
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum2 = (candidates, target) => {
  const result = [];
  const sorted = [...candidates].sort((a, b) => a - b);
  const backtrack = (index, chosen, sum) => {
    if (sum === target) {
      result.push([...chosen]);
      return;
    }

    for (let i = index; i < sorted.length; i++) {
      // skip duplicate numbers
      if (i > index && sorted[i] === sorted[i - 1]) {
        continue;
      }
      // no point continuing if current and remaining elements are bigger than target.
      if (sorted[i] > target) {
        break;
      }
      const newSum = sum + sorted[i];
      if (newSum <= target) {
        chosen.push(sorted[i]);
        backtrack(i + 1, chosen, newSum);
        chosen.pop();
      }
    }
  };
  backtrack(0, [], 0);
  return result;
};
