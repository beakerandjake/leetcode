import { connect } from '../../src/leetcode/116.js';
import { arrToStr } from '../util.js';
import { arrToBst, bstToArr, trimEnd } from './util.js';

describe('116. Populating Next Right Pointers In Each Node', () => {
  [
    [
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = connect(arrToBst(input));
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
