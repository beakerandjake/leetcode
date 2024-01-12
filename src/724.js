/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index
 * is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
 * This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 */

const recursive = (nums) => {
  const leftMemo = Array(nums.length);
  const rightMemo = Array(nums.length);

  const sumRight = (index) => {
    if (index >= nums.length) {
      return 0;
    }
    if (rightMemo[index] == null) {
      rightMemo[index] = nums[index] + sumRight(index + 1);
    }
    return rightMemo[index];
  };

  const sumLeft = (index) => {
    if (index < 0) {
      return 0;
    }
    if (leftMemo[index] == null) {
      leftMemo[index] = nums[index] + sumLeft(index - 1);
    }
    return leftMemo[index];
  };

  return nums.findIndex((_, i) => sumLeft(i) === sumRight(i));
};

const iterative = (nums) => {
  const getSumsLeft = () => {
    const toReturn = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
      toReturn[i] = (toReturn[i - 1] || 0) + nums[i];
    }
    return toReturn;
  };

  const getSumsRight = () => {
    const toReturn = Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
      toReturn[i] = (toReturn[i + 1] || 0) + nums[i];
    }
    return toReturn;
  };

  const leftSums = getSumsLeft();
  const rightSums = getSumsRight();
  return leftSums.findIndex((leftSum, i) => leftSum === rightSums[i]);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const pivotIndex = (nums) => {
  let totalSum = nums.reduce((acc, x) => acc + x, 0);
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    if (runningSum === totalSum) {
      return i;
    }
    totalSum -= nums[i];
  }
  return -1;
};
