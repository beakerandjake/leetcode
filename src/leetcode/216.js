/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *     Only numbers 1 through 9 are used.
 *     Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 */

/**
 * @param {number} k
 * @param {number} targetSum
 * @return {number[][]}
 */
export const combinationSum3 = (k, targetSum) => {
  const combinations = [];
  const recurse = (combination, currentSum, startNum) => {
    if (combination.length === k) {
      if (currentSum === targetSum) {
        combinations.push([...combination]);
      }
      return;
    }

    for (let num = startNum; num <= 9; num++) {
      const newSum = currentSum + num;
      if (newSum <= targetSum) {
        combination.push(num);
        recurse(combination, newSum, num + 1);
        combination.pop();
      }
    }
  };
  recurse([], 0, 1);
  return combinations;
};
