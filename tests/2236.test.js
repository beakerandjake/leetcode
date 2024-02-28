import { checkTree } from '../src/2236.js';
import { arrToBst, arrToStr } from './util.js';

describe('2236. Root Equals Sum of Children', () => {
  [
    [[10, 4, 6], true],
    [[5, 3, 1], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = checkTree(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
