import { sumNumbers } from '../src/129.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('129. Sum Root to Leaf Numbers', () => {
  [
    [[1, 2, 3], 25],
    [[4, 9, 0, 5, 1], 1026],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = sumNumbers(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
