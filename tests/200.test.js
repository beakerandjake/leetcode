import { numIslands } from '../src/leetcode/200.js';
import { arrToStr } from './util.js';

describe('200. Number of Islands', () => {
  [
    [
      [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
      1,
    ],
    [
      [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ],
      3,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = numIslands(input);
      expect(result).toBe(expected);
    });
  });
});
