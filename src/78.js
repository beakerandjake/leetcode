/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const subsets = (nums) => {
  const toReturn = [];
  const recurse = (chosen, available) => {
    if (!available.length) {
      toReturn.push([...chosen]);
      return;
    }
    const [head, ...rest] = available;
    // use first element of available
    recurse([...chosen, head], rest);
    // don't use first element of available
    recurse(chosen, rest);
  };
  recurse([], nums);
  return toReturn;
};
