/**
 * Given an integer array nums of length n where all the integers of nums are in
 * the range [1, n] and each integer appears once or twice, return an array of all
 * the integers that appears twice.
 *
 * You must write an algorithm that runs in O(n) time and uses only constant extra
 * space.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 *
 * Example 2:
 *
 * Input: nums = [1,1,2]
 * Output: [1]
 *
 *
 * Example 3:
 *
 * Input: nums = [1]
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == nums.length
 *  * 1 <= n <= 105
 *  * 1 <= nums[i] <= n
 *  * Each element in nums appears once or twice.
 *
 *
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array
 */

const usingSet = (nums) => {
  const output = new Set();
  const set = new Set();
  for (const num of nums) {
    if (set.has(num) && !output.has(num)) {
      output.add(num);
    } else {
      set.add(num);
    }
  }
  return [...output];
};

const usingCycleSort = (() => {
  // mutates array and swaps elements at index a and index b.
  const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  // mutates an array of items 1-N so each item resides at its expectedIndex index (0 based).
  const rearrange = (nums) => {
    let i = 0;
    while (i < nums.length) {
      const expectedIndex = nums[i] - 1;
      if (nums[i] !== nums[expectedIndex]) {
        swap(nums, i, expectedIndex);
      } else {
        i++;
      }
    }
  };

  // returns all the unique elements of the array.
  const unique = (arr) => [...new Set(arr)];

  return (nums) => {
    rearrange(nums);
    return unique(nums.filter((x, i) => x !== i + 1));
  };
})();

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDuplicates = usingCycleSort;
