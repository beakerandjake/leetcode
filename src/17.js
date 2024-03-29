/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

const charMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = (digits) => {
  if (!digits.length) {
    return [];
  }
  const combinations = [];
  const helper = (combination, digitIndex) => {
    if (combination.length === digits.length) {
      combinations.push(combination.join(''));
      return;
    }
    const chars = charMap[digits[digitIndex]];
    for (const char of chars) {
      combination.push(char);
      helper(combination, digitIndex + 1);
      combination.pop();
    }
  };
  helper([], 0);
  return combinations;
};
