/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export const combine = (n, k) => {
  const toReturn = [];
  const backtrack = (current, firstNum) => {
    if (current.length === k) {
      toReturn.push([...current]);
    }
    for (let num = firstNum; num <= n; num++) {
      current.push(num);
      backtrack(current, num + 1);
      current.pop();
    }
  };
  backtrack([], 1);
  return toReturn;
};
