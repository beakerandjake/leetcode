/**
 * You are given a string s and two integers x and y. You can perform two types of
 * operations any number of times.
 *
 *  * Remove substring "ab" and gain x points.
 *    * For example, when removing "ab" from "cabxbae" it becomes "cxbae".
 *  * Remove substring "ba" and gain y points.
 *    * For example, when removing "ba" from "cabxbae" it becomes "cabxe".
 *
 * Return the maximum points you can gain after applying the above operations on s.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "cdbcbbaaabab", x = 4, y = 5
 * Output: 19
 * Explanation:
 * - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
 * - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
 * - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
 * - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
 * Total score = 5 + 4 + 5 + 5 = 19.
 *
 * Example 2:
 *
 *
 * Input: s = "aabbaaxybbaabb", x = 5, y = 4
 * Output: 20
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * 1 <= x, y <= 104
 *  * s consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/maximum-score-from-removing-substrings
 */

const bruteForce = (() => {
  const pop = (arr) => arr.slice(0, -1);

  const push = (arr, item) => [...arr, item];

  return (s, x, y) => {
    const recurse = (index, previous) => {
      if (index >= s.length) {
        return 0;
      }
      if (s[index] === 'b' && previous.at(-1) === 'a') {
        // either remove this 'ba' substring, or don't.
        return Math.max(
          x + recurse(index + 1, pop(previous)),
          recurse(index + 1, push(previous, s[index])),
        );
      }
      if (s[index] === 'a' && previous.at(-1) === 'b') {
        // either remove this 'ab' substring, or don't.
        return Math.max(
          y + recurse(index + 1, pop(previous)),
          recurse(index + 1, push(previous, s[index])),
        );
      }
      // not a substring of interest, just continue.
      return recurse(index + 1, push(previous, s[index]));
    };

    return recurse(0, []);
  };
})();

const usingStack = (() => {
  const cons = (a, b) => [a, b];

  const car = (x) => x[0];

  const cdr = (x) => x[1];

  // continually removes each occurrence of the substring and returns the resulting string.
  const remove = (str, substring) => {
    const chars = [];
    let index = 0;
    while (index < str.length) {
      if (chars.at(-1) + str[index] === substring) {
        chars.pop();
      } else {
        chars.push(str[index]);
      }
      index++;
    }
    return chars.join('');
  };

  // continually replaces all of the substrings and returns the total score.
  const replaceAll = (str, substringPairs) => {
    let totalScore = 0;
    let current = str;
    for (const pair of substringPairs) {
      const result = remove(current, cdr(pair));
      totalScore += Math.floor((current.length - result.length) / 2) * car(pair);
      current = result;
    }
    return totalScore;
  };

  return (s, x, y) => {
    const pX = cons(x, 'ab');
    const pY = cons(y, 'ba');
    return replaceAll(s, x >= y ? [pX, pY] : [pY, pX]);
  };
})();

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const maximumGain = usingStack;
