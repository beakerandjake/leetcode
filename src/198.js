/**
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
 * is that adjacent houses have security systems connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

const topDown = (nums) => {
  const memo = new Map();
  const recurse = (index) => {
    if (index === 0) {
      return nums[index];
    }
    if (index === 1) {
      return Math.max(nums[0], nums[1]);
    }
    if (!memo.has(index)) {
      const robCurrent = nums[index] + recurse(index - 2);
      const robPrevious = recurse(index - 1);
      memo.set(index, Math.max(robCurrent, robPrevious));
    }
    return memo.get(index);
  };
  return recurse(nums.length - 1);
};

const bottomUp = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  const history = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    history[i] = Math.max(history[i - 1], nums[i] + history[i - 2]);
  }
  return history.pop();
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = bottomUp;
