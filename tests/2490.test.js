import { isCircularSentence } from '../src/2490.js';
import { generateTestName } from './util.js';

describe('2490. Circular Sentence', () => {
  [
    ['leetcode exercises sound delightful', true],
    ['eetcode', true],
    ['Leetcode is cool', false],
  ].forEach((args) => {
    const [sentence, expected] = args;
    test(generateTestName(isCircularSentence, ...args), () => {
      const result = isCircularSentence(sentence);
      expect(result).toBe(expected);
    });
  });
});
