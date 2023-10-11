/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const getIndexMap = (nums) =>
  nums.reduce((acc, x, i) => acc.set(x, [...(acc.get(x) || []), i]), new Map());

const hashTriplet = ([a, b, c]) => `${a}.${b}.${c}`;

const findTripletsForNum = (nums, index, indexMap) => {
  const toReturn = [];
  const src = nums[index];
  for (let i = 0; i < nums.length; i++) {
    if (i === index) {
      continue;
    }
    const twoSum = src + nums[i];
    const result = indexMap.get(-twoSum)?.find((x) => x !== i && x !== index) || null;
    if (result !== null) {
      toReturn.push([src, nums[i], nums[result]].sort());
    }
  }
  return toReturn;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = (nums) => {
  const indexMap = getIndexMap(nums);
  const toReturn = [];
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    const triplets = findTripletsForNum(nums, i, indexMap);
    for (const triplet of triplets) {
      const hash = hashTriplet(triplet);
      if (!seen.has(hash)) {
        seen.add(hash);
        toReturn.push(triplet);
      }
    }
  }
  return toReturn;
};
