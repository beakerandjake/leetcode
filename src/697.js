/**
 * Given a non-empty array of non-negative integers nums, the degree of this array
 * is defined as the maximum frequency of any one of its elements.
 *
 * Your task is to find the smallest possible length of a (contiguous) subarray of
 * nums, that has the same degree as nums.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,2,3,1]
 * Output: 2
 * Explanation:
 * The input array has a degree of 2 because both elements 1 and 2 appear twice.
 * Of the subarrays that have the same degree:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * The shortest length is 2. So return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,2,3,1,4,2]
 * Output: 6
 * Explanation:
 * The degree is 3 because the element 2 is repeated 3 times.
 * So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 *
 *
 *
 *
 * Constraints:
 *
 *  * nums.length will be between 1 and 50,000.
 *  * nums[i] will be an integer between 0 and 49,999.
 *
 *
 *
 * https://leetcode.com/problems/degree-of-an-array
 */

const bruteForce = (() => {
  // returns the numbers which occur the most frequently in the array.
  const findMostFrequent = (nums) => {
    const toReturn = [];
    const counts = nums.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());
    const max = Math.max(...counts.values());
    for (const [num, count] of counts.entries()) {
      if (count === max) {
        toReturn.push(num);
      }
    }
    return toReturn;
  };

  // returns the length of the smallest subarray which contains all instances of the target number
  const smallestSubarray = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < nums.length && nums[left] !== target) {
      left++;
    }
    while (right >= 0 && nums[right] !== target) {
      right--;
    }
    return right - left + 1;
  };

  return (nums) =>
    nums.length
      ? Math.min(...findMostFrequent(nums).map((num) => smallestSubarray(nums, num)))
      : 0;
})();

const usingFirstAndLastLookup = (nums) => {
  const first = Array(nums.length).fill(null);
  const last = Array(nums.length).fill(null);
  const counts = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (first[nums[i]] == null) {
      first[nums[i]] = i;
    }
    last[nums[i]] = i;
    counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
  }
  let result = Number.MAX_SAFE_INTEGER;
  const maxCount = Math.max(...counts.values());
  for (const [num, count] of counts) {
    if (count === maxCount) {
      result = Math.min(result, last[num] - first[num] + 1);
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findShortestSubArray = usingFirstAndLastLookup;
