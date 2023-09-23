/**
 * You are given an integer array nums.
 * You want to maximize the number of points you get by performing the following operation any number of times:
 *     Pick any nums[i] and delete it to earn nums[i] points.
 *     Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 * Return the maximum number of points you can earn by applying the above operation some number of times.
 */

const getPointMap = (nums) =>
  nums.reduce((acc, num) => {
    if (!acc.has(num)) {
      acc.set(num, num);
    } else {
      acc.set(num, acc.get(num) + num);
    }
    return acc;
  }, new Map());

const topDown = (pointMap, maxNum) => {
  const memo = new Map();
  const recurse = (n) => {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return pointMap.get(1) || 0;
    }
    if (!memo.has(n)) {
      const pickN = (pointMap.get(n) || 0) + recurse(n - 2);
      const skipN = recurse(n - 1);
      memo.set(n, Math.max(pickN, skipN));
    }
    return memo.get(n);
  };
  return recurse(maxNum);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const deleteAndEarn = (nums) => {
  return topDown(getPointMap(nums), Math.max(...nums));
};
