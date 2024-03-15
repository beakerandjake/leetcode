import { minimumLength } from '../src/1750.js';

describe('1750. Minimum Length of String After Deleting Similar Ends', () => {
  [
    ['ca', 2],
    ['cabaabac', 0],
    ['aabccabba', 3],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minimumLength(input);
      expect(result).toBe(expected);
    });
  });
});
