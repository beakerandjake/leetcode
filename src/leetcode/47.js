/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */

const splice = (arr, i) => {
  const copy = [...arr];
  copy.splice(i, 1);
  return copy;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permuteUnique = (nums) => {
  const permutations = [];
  const encountered = new Set();
  const recurse = (permutation, remaining) => {
    if (!remaining.length) {
      const hash = permutation.join('.');
      if (!encountered.has(hash)) {
        encountered.add(hash);
        permutations.push([...permutation]);
      } 
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permutation.push(remaining[i]);
      recurse(permutation, splice(remaining, i));
      permutation.pop();
    }
  };
  recurse([], nums);
  return permutations;
};
