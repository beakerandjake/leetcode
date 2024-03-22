import { maxScore } from '../src/1422.js';
import { generateTestName } from './util.js';

describe('1422. Maximum Score After Splitting a String', () => {
  [
    ['011101', 5],
    ['00111', 5],
    ['1111', 3],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(maxScore, ...args), () => {
      const result = maxScore(input);
      expect(result).toBe(expected);
    });
  });
});
