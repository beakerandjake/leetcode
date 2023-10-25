/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

const simple = (() => {
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

  return (n) => {
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
})();

/**
 * @param {number} n
 * @return {string[]}
 */
export const generateParenthesis = (n) => {
  const combinations = [];
  const maxLength = n * 2;
  const helper = (combination, openCount, closedCount) => {
    if (combination.length === maxLength) {
      combinations.push(combination.join(''));
      return;
    }
    if (openCount < n) {
      combination.push('(');
      helper(combination, openCount + 1, closedCount);
      combination.pop();
    }
    if (closedCount < openCount) {
      combination.push(')');
      helper(combination, openCount, closedCount + 1);
      combination.pop();
    }
  };
  helper([], 0, 0);
  return combinations;
};
