/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

const isWellFormed = (parens) => {
  if (!parens.length || parens.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(1);
    } else {
      if (!stack.length) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

/**
 * @param {number} n
 * @return {string[]}
 */
export const generateParenthesis = (n) => {
  const combinations = [];
  const maxLength = n * 2;
  const helper = (combination) => {
    if (combination.length === maxLength) {
      if (isWellFormed(combination)) {
        combinations.push(combination.join(''));
      }
      return;
    }

    if (!combination.length) {
      helper([...combination, '(']);
    } else {
      helper([...combination, '(']);
      helper([...combination, ')']);
    }
  };
  helper([]);
  return combinations;
};
