import { zigzagLevelOrder } from '../src/103.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
  [
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [20, 9], [15, 7]],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = zigzagLevelOrder(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
