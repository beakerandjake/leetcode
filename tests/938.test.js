import { rangeSumBST } from '../src/938.js';
import { arrToBst, arrToStr } from './util.js';

describe('938. Range Sum of BST', () => {
  [
    [[10, 5, 15, 3, 7, null, 18], 7, 15, 32],
    [[10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10, 23],
  ].forEach(([input, low, high, expected]) => {
    test(`${arrToStr(input)},${low},${high} -> ${expected}`, () => {
      const result = rangeSumBST(arrToBst(input), low, high);
      expect(result).toBe(expected);
    });
  });
});
