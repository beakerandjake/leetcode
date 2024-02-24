import { minDepth } from '../src/111.js';
import { arrToBst, arrToStr } from './util.js';

describe('111. Minimum Depth of Binary Tree', () => {
  [[[3, 9, 20, null, null, 15, 7], 2]].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = minDepth(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
