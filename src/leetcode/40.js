/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum2 = (candidates, target) => {
  const combinations = [];
  const encountered = new Set();
  const recursive = (combination, sum, startIndex) => {
    if (sum === target) {
      const copy = [...combination].sort((a, b) => a - b);
      const hash = copy.join('.');
      if (!encountered.has(hash)) {
        encountered.add(hash);
        combinations.push(copy);
      }
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const newSum = sum + candidates[i];
      if (newSum <= target) {
        combination.push(candidates[i]);
        recursive(combination, newSum, i + 1);
        combination.pop();
      }
    }
  };
  recursive([], 0, 0);
  return combinations;
};
