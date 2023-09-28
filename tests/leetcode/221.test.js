import { maximalSquare } from '../../src/leetcode/221.js';

describe('221. Maximal Square', () => {
  [
    [
      [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      4,
    ],
    [
      [
        ['0', '1'],
        ['1', '0'],
      ],
      1,
    ],
    [[['0']], 0],
    [
      [
        ['1', '1', '1', '1'],
        ['1', '1', '1', '1'],
        ['1', '1', '1', '1'],
        ['1', '1', '1', '1'],
        ['1', '1', '1', '1'],
      ],
      16,
    ],
    [
      [
        ['1', '0', '0', '0'],
        ['0', '0', '0', '0'],
        ['1', '1', '1', '1'],
        ['0', '1', '1', '1'],
        ['0', '1', '1', '1'],
      ],
      9,
    ],
    [
      [
        ['1', '1', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['0', '0', '0', '0', '0'],
        ['1', '1', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
      ],
      4,
    ],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maximalSquare(input);
      expect(result).toEqual(expected);
    });
  });
});