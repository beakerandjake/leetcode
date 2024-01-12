import { summaryRanges } from '../src/leetcode/228.js';
import { arrToStr } from './util.js';

describe('228. Summary Ranges', () => {
  [
    [
      [0, 1, 2, 4, 5, 7],
      ['0->2', '4->5', '7'],
    ],
    [
      [0, 2, 3, 4, 6, 8, 9],
      ['0', '2->4', '6', '8->9'],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = summaryRanges(input);
      expect(result).toEqual(expected);
    });
  });
});
