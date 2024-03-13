import { pivotInteger } from '../src/2485.js';

describe('2485. Find the Pivot Integer', () => {
  [
    [8, 6],
    [1, 1],
    [4, -1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = pivotInteger(input);
      expect(result).toBe(expected);
    });
  });
});
