import { checkValidString } from '../src/678.js';
import { generateTestName } from './util.js';

describe('678. Valid Parenthesis String', () => {
  [
    ['()', true],
    ['(*)', true],
    ['(*))', true],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(checkValidString, ...args), () => {
      const result = checkValidString(s);
      expect(result).toBe(expected);
    });
  });
});
