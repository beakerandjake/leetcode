/**
 * Given n non-negative integers representing an elevation map where the width of
 * each bar is 1, compute how much water it can trap after raining.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png]
 *
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == height.length
 *  * 1 <= n <= 2 * 104
 *  * 0 <= height[i] <= 105
 *
 *
 *
 * https://leetcode.com/problems/trapping-rain-water
 */

const bruteForce = (() => {
  const maxRight = (arr, index) => {
    if (index >= arr.length) {
      return 0;
    }
    return Math.max(arr[index], maxRight(arr, index + 1));
  };

  const maxLeft = (arr, index) => {
    if (index < 0) {
      return 0;
    }
    return Math.max(arr[index], maxLeft(arr, index - 1));
  };

  return (heights) => {
    let result = 0;
    for (let i = 1; i < heights.length - 1; i++) {
      const left = maxLeft(heights, i);
      const right = maxRight(heights, i);
      result += Math.min(left, right) - heights[i];
    }
    return result;
  };
})();

const usingScanning = (() => {
  // returns array which stores the maximum value at the given index when looking left.
  const scanRight = (heights) => {
    const result = Array(heights.length).fill(0);
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
      max = Math.max(max, heights[i]);
      result[i] = max;
    }
    return result;
  };

  // returns array which stores the maximum value at the given index when looking right.
  const scanLeft = (heights) => {
    const result = Array(heights.length).fill(0);
    let max = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
      max = Math.max(max, heights[i]);
      result[i] = max;
    }
    return result;
  };

  return (heights) => {
    const maxRight = scanRight(heights);
    const maxLeft = scanLeft(heights);
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
      result += Math.min(maxRight[i], maxLeft[i]) - heights[i];
    }
    return result;
  };
})();

/**
 * @param {number[]} height
 * @return {number}
 */
export const trap = usingScanning;
