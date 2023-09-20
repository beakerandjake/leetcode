/**
 * Given an integer array nums, return true if
 * there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
 * If no such indices exists, return false.
 */

const smallestSeen = (nums) => {
  const toReturn = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    toReturn[i] = nums[i] < toReturn[i - 1] ? nums[i] : toReturn[i - 1];
  }
  return toReturn;
};

const largestSeen = (nums) => {
  const toReturn = [...nums];
  for (let i = nums.length - 2; i >= 0; i--) {
    toReturn[i] = nums[i] > toReturn[i + 1] ? nums[i] : toReturn[i + 1];
  }
  return toReturn;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const increasingTriplet = (nums) => {
  if (nums.length < 3) {
    return false;
  }
  const sm = smallestSeen(nums);
  const lg = largestSeen(nums);
  for (let i = 1; i < nums.length - 1; i++) {
    if (sm[i] < nums[i] && lg[i] > nums[i]) {
      return true;
    }
  }
  return false;
};
