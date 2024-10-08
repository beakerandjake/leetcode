/**
 * Given an integer n, return all the numbers in the range [1, n] sorted in
 * lexicographical order.
 *
 * You must write an algorithm that runs in O(n) time and uses O(1) extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 13
 * Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
 *
 *
 * Example 2:
 *
 * Input: n = 2
 * Output: [1,2]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 5 * 104
 *
 *
 *
 * https://leetcode.com/problems/lexicographical-numbers
 */

/**
 * @param {number} n
 * @return {number[]}
 */
export const lexicalOrder = (n) => {
  const result = [];
  const recurse = (num) => {
    if (num > n) {
      return;
    }
    result.push(num);
    for (let i = 0; i < 10; i++) {
      const newNum = num * 10 + i;
      recurse(newNum);
    }
  };

  for (let i = 1; i < 10; i++) {
    recurse(i);
  }

  return result;
};
