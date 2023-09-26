/**
 * Given a binary array nums and an integer k,
 * return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */

const firstPass = (nums, k) => {
  const consume = (start) => {
    let streak = 0;
    let flips = k;
    let i = start;

    while (i < nums.length) {
      if (nums[i] === 0 && flips > 0) {
        flips--;
      } else if (nums[i] === 0 && flips === 0) {
        break;
      }
      streak++;
      i++;
    }

    return streak;
  };

  return nums.reduce((best, _, i) => Math.max(consume(i), best), 0);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const longestOnes = firstPass;
