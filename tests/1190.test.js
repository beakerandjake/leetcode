import { reverseParentheses } from '../src/1190.js';
import { generateTestName } from './util.js';

describe('1190. Reverse Substrings Between Each Pair of Parentheses', () => {
  [
    ['(abcd)', 'dcba'],
    ['(u(love)i)', 'iloveu'],
    ['(ed(et(oc))el)', 'leetcode'],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(reverseParentheses, ...args), () => {
      const result = reverseParentheses(s);
      expect(result).toBe(expected);
    });
  });
});
