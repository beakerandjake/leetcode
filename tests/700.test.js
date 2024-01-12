import { searchBST } from '../src/leetcode/700.js';
import { arrToStr } from './util.js';
import { arrToBst } from './leetcode/util.js';

describe('700. Search in a Binary Tree', () => {
  [
    [[4, 2, 7, 1, 3], 2, 2],
    [[4, 2, 7, 1, 3], 5, null],
  ].forEach(([nodes, search, expected]) => {
    test(`${arrToStr(nodes)},${search} -> ${expected}`, () => {
      const result = searchBST(arrToBst(nodes), search);
      expect(result?.val || null).toBe(expected);
    });
  });
});
