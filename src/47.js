/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */

const splice = (arr, index) => arr.filter((_, i) => index !== i);

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
