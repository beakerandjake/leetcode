/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 */

const consecutiveCount = (nums) => {
  const numLookup = new Set(nums);
  const countMemo = new Map();
  const recursive = (num) => {
    if (!numLookup.has(num)) {
      return 0;
    }
    if (!countMemo.has(num)) {
      countMemo.set(num, 1 + recursive(num + 1));
    }
    return countMemo.get(num);
  };
  return (num) => recursive(num);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = (nums) => {
  let bestCount = 0;
  const consecutiveCounter = consecutiveCount(nums);
  for (const num of nums) {
    bestCount = Math.max(bestCount, consecutiveCounter(num));
  }
  return bestCount;
};
