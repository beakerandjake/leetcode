/**
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const subsetsWithDup = (nums) => {
  const subsets = [];
  const encountered = new Set();
  const helper = (current, remaining) => {
    if (!remaining.length) {
      const copy = [...current].sort((a, b) => a - b);
      const hash = copy.join('.');
      if (!encountered.has(hash)) {
        subsets.push(copy);
        encountered.add(hash);
      }
      return;
    }
    const [head, ...rest] = remaining;
    helper([...current, head], rest);
    helper(current, rest);
  };
  helper([], nums);
  return subsets;
};
