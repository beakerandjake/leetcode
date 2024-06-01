import { scoreOfString } from '../src/3110.js';
import { generateTestName } from './util.js';

describe('3110. Score of a String', () => {
  [
    ['hello', 13],
    ['zaz', 50],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(scoreOfString, ...args), () => {
      const result = scoreOfString(s);
      expect(result).toBe(expected);
    });
  });
});
