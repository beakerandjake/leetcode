import { maxLevelSum } from '../src/1161.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('1161. Maximum Level Sum of a Binary Tree', () => {
  [
    [[1, 7, 0, 7, -8, null, null], 2],
    [[989, null, 10250, 98693, -89388, null, null, null, -32127], 2],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxLevelSum(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
