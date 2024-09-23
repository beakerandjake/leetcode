/**
 * You are given a 0-indexed string s and a dictionary of words dictionary. You
 * have to break s into one or more non-overlapping substrings such that each
 * substring is present in dictionary. There may be some extra characters in s
 * which are not present in any of the substrings.
 *
 * Return the minimum number of extra characters left over if you break up s
 * optimally.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
 * Output: 1
 * Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: s = "sayhelloworld", dictionary = ["hello","world"]
 * Output: 3
 * Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 50
 *  * 1 <= dictionary.length <= 50
 *  * 1 <= dictionary[i].length <= 50
 *  * dictionary[i] and s consists of only lowercase English letters
 *  * dictionary contains distinct words
 *
 *
 *
 * https://leetcode.com/problems/extra-characters-in-a-string
 */

const usingDp = (str, dictionary) => {
  const memo = new Map();
  const words = new Set(dictionary);
  const dp = (index, substr) => {
    if (index >= str.length) {
      return 0;
    }
    const hash = `${index}_${substr}`;
    if (!memo.has(hash)) {
      const newSubstr = substr + str[index];
      // if substring is valid word then try breaking here
      const breakHere = words.has(newSubstr) ? newSubstr.length + dp(index + 1, '') : -1;
      // if not breaking here have two possible choices
      const isNotWord = Math.max(
        // continue the substring
        dp(index + 1, newSubstr),
        // abandon the current substring and skip this character
        dp(index + 1, ''),
      );
      memo.set(hash, Math.max(breakHere, isNotWord));
    }
    return memo.get(hash);
  };
  return str.length - dp(0, '');
};

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
export const minExtraChar = (s, dictionary) => usingDp(s, dictionary);
