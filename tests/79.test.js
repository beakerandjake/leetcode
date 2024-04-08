import { exist } from '../src/79.js';
import { generateTestName } from './util.js';

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
    [[['A']], 'A', true],
  ].forEach((args) => {
    const [board, word, expected] = args;
    test(generateTestName(exist, ...args), () => {
      const result = exist(board, word);
      expect(result).toBe(expected);
    });
  });
});
