/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

// const combinationHash = (combination) => {
//   const toReturn = Array(40 - 2).fill(0);
//   for (let i = 0; i < combination.length; i++) {
//     const num = combination[i];
//     toReturn[num - 2] += 1;
//   }
//   return toReturn.join('.');
// };

const combinationHash = (combination) => [...combination].sort((a, b) => a - b).join('.');

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = (candidates, target) => {
  const combinations = [];
  const encountered = new Set();
  const recurse = (combination, sum) => {
    if (sum === target) {
      const hash = combinationHash(combination);
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
