import { rangeBitwiseAnd } from '../src/201.js';

describe('201. Bitwise AND of Numbers Range', () => {
  [
    [5, 7, 4],
    [1, 2147483647, 0],
    [1073741824, 2147483647, 1073741824],
  ].forEach(([left, right, expected]) => {
    test(`${left},${right} -> ${expected}`, () => {
      const result = rangeBitwiseAnd(left, right);
      expect(result).toBe(expected);
    });
  });
});
