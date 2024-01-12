import { goodNodes } from '../src/1448.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('1448. Count Good Nodes in Binary Tree', () => {
  [
    [[3, 1, 4, 3, null, 1, 5], 4],
    [[3, 3, null, 4, 2], 3],
    [[1], 1],
    [[9, null, 3, 6], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = goodNodes(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
