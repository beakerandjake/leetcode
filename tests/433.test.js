import { minMutation } from '../src/leetcode/433.js';
import { arrToStr } from './util.js';

describe('433. Minimum Genetic Mutation', () => {
  [
    ['AACCGGTT', 'AACCGGTA', ['AACCGGTA'], 1],
    ['AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'], 2],
    ['AACCGGTT', 'AACCGGTA', [], -1],
  ].forEach(([src, dest, bank, expected]) => {
    test(`${src},${dest},${arrToStr(bank)} -> ${expected}`, () => {
      const result = minMutation(src, dest, bank);
      expect(result).toBe(expected);
    });
  });
});
