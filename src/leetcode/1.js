/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

const twoPassMap = (nums, target) => {
  const indexMap = () => {
    const toReturn = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!toReturn.has(nums[i])) {
        toReturn.set(nums[i], [i]);
      } else {
        toReturn.get(nums[i]).push(i);
      }
    }
    return toReturn;
  };

  const frequencies = indexMap();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    const neededIndexes = frequencies.get(needed);
    if (!neededIndexes?.length || (needed === nums[i] && neededIndexes.length === 1)) {
      continue;
    }
    return needed === nums[i] ? [i, neededIndexes[1]] : [i, neededIndexes[0]];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  const indexLookup = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (indexLookup.has(needed)) {
      return [indexLookup.get(needed), i];
    }
    indexLookup.set(nums[i], i);
  }
};
