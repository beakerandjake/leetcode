/**
 * Given a string containing just the characters '(' and ')', return the length of
 * the longest valid (well-formed) parentheses substring.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 *
 * Example 2:
 *
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 *
 * Example 3:
 *
 *
 * Input: s = ""
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s.length <= 3 * 104
 *  * s[i] is '(', or ')'.
 *
 *
 *
 * https://leetcode.com/problems/longest-valid-parentheses
 */

const bruteForce = (() => {
  const iterateSubstrings = (str, visitFn) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        visitFn(i, j);
      }
    }
  };

  const isBalanced = (arr, from, to) => {
    let opening = 0;
    for (let i = from; i <= to; i++) {
      if (arr[i] === '(') {
        opening++;
      } else {
        if (!opening) {
          return false;
        }
        opening--;
      }
    }
    return opening === 0;
  };

  return (s) => {
    let max = 0;
    iterateSubstrings(s, (from, to) => {
      if (isBalanced(s, from, to)) {
        max = Math.max(max, to - from + 1);
      }
    });
    return max;
  };
})();

const markingValid = (() => {
  // returns an array of booleans which indicate if the parenthesis at that index is part of a valid pair.
  const findValid = (str) => {
    const toReturn = Array(str.length).fill(false);
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(i);
      } else if (stack.length) {
        // valid pair found, mark these indexes.
        toReturn[stack.pop()] = true;
        toReturn[i] = true;
      }
    }
    return toReturn;
  };

  // returns the length of the longest contiguous subarray whose elements are all true.
  const longestValid = (arr) => {
    let max = 0;
    let length = 0;
    for (const item of arr) {
      length = item ? length + 1 : 0;
      max = Math.max(max, length);
    }
    return max;
  };

  return (str) => longestValid(findValid(str));
})();

/**
 * @param {string} s
 * @return {number}
 */
export const longestValidParentheses = markingValid;
