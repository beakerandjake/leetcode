/**
 * Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
 * Return a list of all possible strings we could create. Return the output in any order.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
export const letterCasePermutation = (s) => {
  const toReturn = [];
  const helper = (current, index) => {
    if (current.length === s.length) {
      toReturn.push(current.join(''));
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (/\d/.test(s[i])) {
        // only one case if digit.
        current.push(s[i]);
        helper(current, i + 1);
        current.pop();
      } else {
        // backtrack with lowercase.
        current.push(s[i].toLowerCase());
        helper(current, i + 1);
        current.pop();
        // backtrack with uppercase
        current.push(s[i].toUpperCase());
        helper(current, i + 1);
        current.pop();
      }
    }
  };
  helper([], 0);
  return toReturn;
};
