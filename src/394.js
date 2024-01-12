/**
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed to
 * be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra white
 * spaces, square brackets are well-formed, etc. Furthermore, you may assume that
 * the original data does not contain any digits and that digits are only for those
 * repeat numbers, k. For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never exceed
 * 105.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 30
 *  * s consists of lowercase English letters, digits, and square brackets '[]'.
 *  * s is guaranteed to be a valid input.
 *  * All the integers in s are in the range [1, 300].
 *
 *
 *
 * https://leetcode.com/problems/decode-string
 */

const isStartOfEncoding = (char) => /[0-9]/.test(char);

const repeat = (str, times) => {
  const toReturn = Array(times);
  for (let i = 0; i < times; i++) {
    toReturn.push(str);
  }
  return toReturn.join('');
};

const getEncoded = (str, startIndex) => {
  let i = startIndex;
  // consume number characters until first bracket appears.
  while (str[i] !== '[') {
    i++;
  }
  const brackets = [str[i++]];
  while (brackets.length) {
    if (str[i] === '[') {
      brackets.push(str[i]);
    } else if (str[i] === ']') {
      brackets.pop();
    }
    i++;
  }
  return str.slice(startIndex, i);
};

const evaluate = (str) => {
  const toReturn = [];
  let i = 0;
  while (i < str.length) {
    if (isStartOfEncoding(str[i])) {
      const encoded = getEncoded(str, i);
      i += encoded.length;
      // eslint-disable-next-line no-use-before-define
      toReturn.push(apply(encoded));
    } else {
      toReturn.push(str[i]);
      i++;
    }
  }
  return toReturn.join('');
};

const apply = (encoded) => {
  let start = 0;
  // consume digits until opening bracket appears.
  while (encoded[start] !== '[') {
    start++;
  }
  const times = Number(encoded.slice(0, start));
  const inner = encoded.slice(start + 1, -1);
  return repeat(evaluate(inner), times);
};

/**
 * @param {string} s
 * @return {string}
 */
export const decodeString = (s) => evaluate(s);
