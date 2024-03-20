import { sequentialDigits } from '../src/1291.js';
import { arrToStr } from './util.js';

describe('1291. Sequential Digits', () => {
  [
    [100, 300, [123, 234]],
    [1000, 13000, [1234, 2345, 3456, 4567, 5678, 6789, 12345]],
    [89, 234, [89, 123, 234]],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${arrToStr(expected)}`, () => {
      const result = sequentialDigits(a, b);
      expect(result).toEqual(expected);
    });
  });
});
