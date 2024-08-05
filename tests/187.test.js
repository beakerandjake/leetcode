import { findRepeatedDnaSequences } from '../src/187.js';
import { generateTestName } from './util.js';

describe('187. Repeated DNA Sequences', () => {
  [
    ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', ['AAAAACCCCC', 'CCCCCAAAAA']],
    ['AAAAAAAAAAAAA', ['AAAAAAAAAA']],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(findRepeatedDnaSequences, ...args), () => {
      const result = findRepeatedDnaSequences(s);
      expect(result).toEqual(expected);
    });
  });
});
