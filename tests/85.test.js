import { maximalRectangle } from '../src/85.js';
import { generateTestName } from './util.js';

describe('85. Maximal Rectangle', () => {
  [
    [
      [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      6,
    ],
    // [
    //   [
    //     ['0', '0', '0'],
    //     ['0', '1', '0'],
    //     ['0', '0', '0'],
    //   ],
    //   1,
    // ],
    // [
    //   [
    //     ['0', '1', '0'],
    //     ['0', '1', '0'],
    //     ['0', '1', '0'],
    //   ],
    //   3,
    // ],
    // [
    //   [
    //     ['0', '1', '0'],
    //     ['1', '1', '0'],
    //     ['0', '1', '0'],
    //   ],
    //   3,
    // ],
    // [
    //   [
    //     ['0', '1', '0'],
    //     ['1', '1', '1'],
    //     ['0', '0', '0'],
    //   ],
    //   3,
    // ],
    // [[['0']], 0],
    // [[['1']], 1],
  ].forEach((args) => {
    const [matrix, expected] = args;
    test(generateTestName(maximalRectangle, ...args), () => {
      const result = maximalRectangle(matrix);
      expect(result).toBe(expected);
    });
  });
});
