/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

const splice = (arr, i) => {
  const toReturn = [...arr];
  toReturn.splice(i, 1);
  return toReturn;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = (nums) => {
  const toReturn = [];
  const recurse = (current, remaining) => {
    if (!remaining.length) {
      toReturn.push([...current]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      recurse(current, splice(remaining, i));
      current.pop();
    }
  };
  recurse([], nums);
  return toReturn;
};
