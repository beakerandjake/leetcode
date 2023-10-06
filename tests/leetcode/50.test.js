import { myPow } from '../../src/leetcode/50.js';

describe('50. Pow(x,n)', () => {
  [
    [2.0, 10, 1024.0],
    [2.1, 3, 9.261],
    [2.0, -2, 0.25],
    [20.0, -5.0, 0.000000313],
    [34.00515, -3, 3e-5],
    // [0.00001, 2147483647, 0],
    [0.44894, -5, 54.83508],
    [-0.82541, 12, 0.10001],
    // [0.99999, 948688, 0.00008],
  ].forEach(([x, n, expected]) => {
    test(`${x},${n} -> ${expected}`, () => {
      const result = myPow(x, n);
      expect(result).toBeCloseTo(expected);
    });
  });
});
