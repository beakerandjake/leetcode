import { zeroMatrix } from '../../../src/interview/ch01/zeroMatrix.js';

describe('zeroMatrix()', () => {
  test.each([
    [[], []],
    [[[0]], [[0]]],
    [
      [
        [0, 2, 6],
        [3, 4, 7],
      ],
      [
        [0, 0, 0],
        [0, 4, 7],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
      ],
      [
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9],
        [10, 0, 12],
        [13, 0, 15],
      ],
    ],
    [
      [
        [0, 2, 0, 4, 55],
        [5, 6, 7, 8, 22],
        [9, 10, 11, 12, 77],
        [13, 14, 15, 0, 88],
      ],
      [
        [0, 0, 0, 0, 0],
        [0, 6, 0, 0, 22],
        [0, 10, 0, 0, 77],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 0, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0],
      ],
      [
        [1, 0, 3, 0],
        [0, 0, 0, 0],
        [9, 0, 11, 0],
        [0, 0, 0, 0],
      ],
    ],
    [
      [
        [1, 2, 3, 4],
        [0, 0, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0],
      ],
      [
        [0, 0, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 11, 0],
        [0, 0, 0, 0],
      ],
    ],
  ])('zeroMatrix(%j) = %j', (matrix, expected) => {
    const result = zeroMatrix(matrix);
    expect(result).toEqual(expected);
  });
});
