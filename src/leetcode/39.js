/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

const simple = (candidates, target) => {
  const combinations = [];
  const encountered = new Set();
  const recurse = (combination, sum) => {
    if (sum === target) {
      const hash = [...combination].sort((a, b) => a - b).join('.');
      if (!encountered.has(hash)) {
        combinations.push([...combination]);
        encountered.add(hash);
      }
      return;
    }

    for (const num of candidates) {
      const newSum = num + sum;
      if (newSum <= target) {
        combination.push(num);
        recurse(combination, newSum);
        combination.pop();
      }
    }
  };
  recurse([], 0);
  return combinations;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = (candidates, target) => {
  const combinations = [];
  const recursive = (combination, currentSum, candidateStart) => {
    if (currentSum === target) {
      combinations.push([...combination]);
      return;
    }
    for (let i = candidateStart; i < candidates.length; i++) {
      if (candidates[i] + currentSum <= target) {
        combination.push(candidates[i]);
        recursive(combination, candidates[i] + currentSum, i);
        combination.pop();
      }
    }
  };
  recursive([], 0, 0);
  return combinations;
};
