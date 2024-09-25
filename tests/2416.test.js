import { sumPrefixScores } from '../src/2416.js';
import { generateTestName } from './util.js';

describe('2416. Sum of Prefix Scores of Strings', () => {
  [
    [
      ['abc', 'ab', 'bc', 'b'],
      [5, 4, 3, 2],
    ],
    [['abcd'], [4]],
  ].forEach((args) => {
    const [words, expected] = args;
    test(generateTestName(sumPrefixScores, ...args), () => {
      const result = sumPrefixScores(words);
      expect(result).toEqual(expected);
    });
  });
});
