/**
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place [https://en.wikipedia.org/wiki/In-place_algorithm] so that objects of
 * the same color are adjacent, with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == nums.length
 *  * 1 <= n <= 300
 *  * nums[i] is either 0, 1, or 2.
 *
 *
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant extra
 * space?
 *
 *
 *
 * https://leetcode.com/problems/sort-colors
 */

const usingBuiltInSort = (nums) => nums.sort((a, b) => a - b);

const usingMergeSort = (() => {
  const merge = (a, b) => {
    const output = [];
    let aIndex = 0;
    let bIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
      output.push(a[aIndex] < b[bIndex] ? a[aIndex++] : b[bIndex++]);
    }
    while (aIndex < a.length) {
      output.push(a[aIndex++]);
    }
    while (bIndex < b.length) {
      output.push(b[bIndex++]);
    }
    return output;
  };

  const mergeSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return merge(left, right);
  };

  return (nums) => {
    const sorted = mergeSort(nums);
    sorted.forEach((x, i) => (nums[i] = x));
  };
})();

const usingCounting = (() => {
  // maps an input number to the color it represents.
  const numberToColor = new Map([
    [0, 'red'],
    [1, 'white'],
    [2, 'blue'],
  ]);

  // maps a color to an input number.
  const colorToNumber = new Map(
    [...numberToColor.entries()].map(([number, color]) => [color, number]),
  );

  // returns a map of color to the number of times it appears.
  const countColors = (nums) =>
    nums.reduce(
      (acc, x) => acc.set(numberToColor.get(x), (acc.get(numberToColor.get(x)) || 0) + 1),
      new Map(),
    );

  return (nums) => {
    const colorCounts = countColors(nums);
    let i = 0;
    // mutate the input array so the colors in the correct order.
    for (const color of ['red', 'white', 'blue']) {
      let remaining = colorCounts.get(color);
      const number = colorToNumber.get(color);
      while (remaining--) {
        nums[i++] = number;
      }
    }
  };
})();

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const sortColors = usingCounting;
