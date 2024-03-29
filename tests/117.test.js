import { connect } from '../src/117.js';
import { arrToStr, arrToBst, bstToArr, trimEnd } from './util.js';

describe('117. Populating Next Right Pointers in Each Node II', () => {
  [
    [
      [1, 2, 3, 4, 5, null, 7],
      [1, 2, 3, 4, 5, null, 7],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = connect(arrToBst(input));
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
