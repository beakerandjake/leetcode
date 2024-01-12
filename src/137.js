/**
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = (nums) => {
  const setBits = Array(32).fill(0);
  for (const num of nums) {
    for (let bit = 0; bit < 32; bit++) {
      if (num & (1 << bit)) {
        setBits[bit]++;
      }
    }
  }
  let toReturn = 0;
  for (let bit = 0; bit < 32; bit++) {
    if (setBits[bit] % 3 !== 0) {
      toReturn |= 1 << bit;
    }
  }
  return toReturn;
};
