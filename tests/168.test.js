import { convertToTitle } from '../src/168.js';

describe('168. Excel Sheet Column Title', () => {
  [
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = convertToTitle(input);
      expect(result).toBe(expected);
    });
  });
});
