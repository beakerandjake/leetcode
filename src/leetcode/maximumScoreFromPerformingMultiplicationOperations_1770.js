/**
 * You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively, where n >= m.
 * You begin with a score of 0. You want to perform exactly m operations.
 * On the ith operation (0-indexed) you will:
 *
 *     Choose one integer x from either the start or the end of the array nums.
 *     Add multipliers[i] * x to your score.
 *         Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second operation, and so on.
 *     Remove x from nums.
 *
 * Return the maximum score after performing m operations.
 */

const topDown = (nums, multipliers) => {
  const n = nums.length;
  const m = multipliers.length;
  const memo = new Map();
  const recursive = (index, left) => {
    if (index === m) {
      return 0;
    }
    const hash = `${index}_${left}`;
    if (!memo.has(hash)) {
      const mCurrent = multipliers[index];
      const right = n - 1 - (index - left);
      const takeLeft = mCurrent * nums[left] + recursive(index + 1, left + 1);
      const takeRight = mCurrent * nums[right] + recursive(index + 1, left);
      memo.set(hash, Math.max(takeLeft, takeRight));
    }
    return memo.get(hash);
  };
  const result = recursive(0, 0, nums.length - 1);
  return result;
};

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
export const maximumScore = topDown;
