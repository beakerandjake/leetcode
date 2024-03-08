import { getConcatenation } from '../src/1929.js';
import { arrToStr } from './util.js';

describe('1929. Concatenation of Array', () => {
  [
    // replace with real test data
    [
      [1, 2, 1],
      [1, 2, 1, 1, 2, 1],
    ],
    [
      [1, 3, 2, 1],
      [1, 3, 2, 1, 1, 3, 2, 1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = getConcatenation(input);
      expect(result).toEqual(expected);
    });
  });
});
