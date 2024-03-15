import { isEvenOddTree } from '../src/1609.js';
import { arrToBst, arrToStr } from './util.js';

describe('1609. Even Odd Tree', () => {
  [
    [[1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2], true],
    [[5, 4, 2, 3, 3, 7], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = isEvenOddTree(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
