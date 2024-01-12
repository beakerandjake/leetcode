import { countNodes } from '../src/222.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('222. Count Complete Tree Nodes', () => {
  [
    [[1, 2, 3, 4, 5, 6], 6],
    [[], 0],
    [[1], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = countNodes(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
