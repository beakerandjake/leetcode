/**
 * The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
 *     For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
 * Given an array nums, return the sum of all XOR totals for every subset of nums.
 * Note: Subsets with the same elements should be counted multiple times.
 * An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.
 */

const xorSum = (arr) => arr.reduce((acc, x) => acc ^ x, 0);

const subsets = (arr) => {
  const toReturn = [];
  const recursive = (current, remaining) => {
    if (!remaining.length) {
      toReturn.push([...current]);
      return;
    }
    const [head, ...rest] = remaining;
    recursive([...current, head], rest);
    recursive(current, rest);
  };
  recursive([], arr);
  return toReturn;
};

const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {number[]} nums
 * @return {number}
 */
export const subsetXORSum = (nums) => sum(subsets(nums).map(xorSum));
