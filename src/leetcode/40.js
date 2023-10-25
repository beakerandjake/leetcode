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
  const sortedCandidates = [...candidates].sort((a, b) => a - b);
  const recursive = (combination, sum, startIndex) => {
    if (sum === target) {
      combinations.push([...combination]);
      return;
    }

    for (let i = startIndex; i < sortedCandidates.length; i++) {
      // skip next if same as current 
      if (i > startIndex && sortedCandidates[i] === sortedCandidates[i - 1]) {
        continue;
      }
      const newSum = sum + sortedCandidates[i];
      if (newSum <= target) {
        combination.push(sortedCandidates[i]);
        recursive(combination, newSum, i + 1);
        combination.pop();
      }
    }
  };
  recursive([], 0, 0);
  return combinations;
};
