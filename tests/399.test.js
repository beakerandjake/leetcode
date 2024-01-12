import { calcEquation } from '../src/leetcode/399.js';
import { arrToStr } from './util.js';

describe('399. Evaluate Division', () => {
  [
    [
      [
        ['a', 'b'],
        ['b', 'c'],
      ],
      [2.0, 3.0],
      [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
      ],
      [6.0, 0.5, -1.0, 1.0, -1.0],
    ],
    [
      [
        ['a', 'b'],
        ['b', 'c'],
        ['bc', 'cd'],
      ],
      [1.5, 2.5, 5.0],
      [
        ['a', 'c'],
        ['c', 'b'],
        ['bc', 'cd'],
        ['cd', 'bc'],
      ],
      [3.75, 0.4, 5.0, 0.2],
    ],
    [
      [['a', 'b']],
      [0.5],
      [
        ['a', 'b'],
        ['b', 'a'],
        ['a', 'c'],
        ['x', 'y'],
      ],
      [0.5, 2.0, -1.0, -1.0],
    ],
  ].forEach(([e, v, q, expected]) => {
    test(`${arrToStr(e)},${arrToStr(v)},${arrToStr(q)} -> ${expected}`, () => {
      const result = calcEquation(e, v, q);
      expect(result).toEqual(expected);
    });
  });
});
