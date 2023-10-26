import { exist } from '../../src/leetcode/79.js';
import { arrToStr } from '../util.js';

describe('79. Word Search', () => {
  [
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'ABCCED',
      true,
    ],
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'SEE',
      true,
    ],
    [
      [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ],
      'ABCB',
      false,
    ],
    [[['a', 'a']], 'aa', true],
  ].forEach(([board, word, expected]) => {
    test(`${arrToStr(board)},${word} -> ${expected}`, () => {
      const result = exist(board, word);
      expect(result).toBe(expected);
    });
  });
});
