import { cloneGraph } from '../../src/leetcode/133.js';
import { arrToStr } from '../util.js';
import { arrToGraph, graphToArr } from './util.js';

describe('133. Clone Graph', () => {
  [
    [
      [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
      [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = cloneGraph(arrToGraph(input));
      expect(graphToArr(result)).toBe(expected);
    });
  });
});
