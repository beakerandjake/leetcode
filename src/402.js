/**
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
 *
 *
 * Example 2:
 *
 *
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 *
 *
 * Example 3:
 *
 *
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= num.length <= 105
 *  * num consists of only digits.
 *  * num does not have any leading zeros except for the zero itself.
 *
 *
 *
 * https://leetcode.com/problems/remove-k-digits
 */

// const bruteForce = (num, k) => {
//   const recurse = (current, index, removals) => {
//     if (removals <= 0) {
//       return current + num.slice(index);
//     }
//     if (index >= num.length) {
//       return current;
//     }
//     // remove char at index, or don't
//     return Math.min(
//       Number(recurse(current, index + 1, removals - 1)),
//       Number(recurse(current + num[index], index + 1, removals)),
//     );
//   };
//   return `${recurse('', 0, k)}` || '0';
// };

const usingStack = (() => {
  const trimLeadingZeros = (num) => {
    if (num.length <= 1) {
      return num;
    }
    let i = 0;
    while (i < num.length && num[i] === '0') {
      i++;
    }
    return num.slice(i);
  };

  return (num, k) => {
    const stack = [];
    let deletes = k;
    for (let i = 0; i < num.length; i++) {
      while (stack.length && deletes && stack.at(-1) > num[i]) {
        stack.pop();
        deletes--;
      }
      stack.push(num[i]);
    }

    while (deletes--) {
      stack.pop();
    }

    return trimLeadingZeros(stack).join('') || '0';
  };
})();

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeKdigits = usingStack;
