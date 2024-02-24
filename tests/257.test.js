import { binaryTreePaths } from '../src/257.js';
import { arrToBst, arrToStr } from './util.js';

describe('257. Binary Tree Paths', () => {
  [
    // replace with real test data
    [
      [1, 2, 3, null, 5],
      ['1->2->5', '1->3'],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = binaryTreePaths(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
