import { uncommonFromSentences } from '../src/884.js';
import { generateTestName } from './util.js';

describe('884. Uncommon Words from Two Sentences', () => {
  [
    ['this apple is sweet', 'this apple is sour', ['sweet', 'sour']],
    ['apple apple', 'banana', ['banana']],
  ].forEach((args) => {
    const [s1, s2, expected] = args;
    test(generateTestName(uncommonFromSentences, ...args), () => {
      const result = uncommonFromSentences(s1, s2);
      expect(result).toEqual(expected);
    });
  });
});
