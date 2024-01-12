/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
 * such that nums[i] == nums[j] and abs(i - j) <= k.
 */

const simple = (nums, k) => {
  const getIndexMap = () => {
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
  const getPartner = (indexes, index) =>
    indexes.find((i) => i !== index && Math.abs(i - index) <= k);
  const indexMap = getIndexMap(nums);
  return nums.some((x, i) => !!getPartner(indexMap.get(x), i, k));
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const containsNearbyDuplicate = (nums, k) => {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (indexMap.has(num) && Math.abs(indexMap.get(num) - i) <= k) {
      return true;
    }
    indexMap.set(num, i);
  }
  return false;
};
