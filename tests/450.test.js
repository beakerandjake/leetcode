import { deleteNode } from '../src/450.js';
import { arrToStr } from './util.js';
import { bstToArr, arrToBst, trimEnd } from './util.js';

describe('450. Delete Node in a BST', () => {
  [
    [[5, 3, 6, 2, 4, null, 7], 3, [5, 4, 6, 2, null, null, 7]],
    [[5, 3, 6, 2, 4, null, 7], 5, [6, 3, 7, 2, 4]],
    [[5, 3, 6, 2, 4, null, 7], 0, [5, 3, 6, 2, 4, null, 7]],
    [[], 0, []],
  ].forEach(([input, key, expected]) => {
    test(`${arrToStr(input)},${key} -> ${arrToStr(expected)}`, () => {
      const result = deleteNode(arrToBst(input), key);
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
