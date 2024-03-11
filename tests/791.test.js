import { customSortString } from '../src/791.js';

describe('791. Custom Sort String', () => {
  [
    ['cba', 'abcd', 'cbad'],
    ['bcafg', 'abcd', 'bcad'],
  ].forEach(([order, s, expected]) => {
    test(`${order},${s} -> ${expected}`, () => {
      const result = customSortString(order, s);
      expect(result).toBe(expected);
    });
  });
});
