/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value
 * and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

const sum = (nums, start, end) => {
  let total = 0;
  for (let i = start; i < end; i++) {
    total += nums[i];
  }
  return total;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findMaxAverage = (nums, k) => {
  let runningSum = sum(nums, 0, k);
  let toReturn = runningSum;
  const end = nums.length - k;
  for (let i = 1; i <= end; i++) {
    runningSum -= nums[i - 1];
    runningSum += nums[i + k - 1];
    if (runningSum > toReturn) {
      toReturn = runningSum;
    }
  }
  return toReturn / k;
};
