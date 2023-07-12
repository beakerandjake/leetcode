import { rotateMatrix } from '../../../src/interview/ch01/rotateMatrix.js';

describe('rotateMatrix()', () => {
  test.each([
    [[], []],
    [[[5]], [[5]]],
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [3, 1],
        [4, 2],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4],
      ],
    ],
  ])('rotateMatrix(%j) = %j', (matrix, expected) => {
    const result = rotateMatrix(matrix);
    expect(result).toEqual(expected);
  });
});
