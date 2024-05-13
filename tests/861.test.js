import { matrixScore } from '../src/861.js';
import { generateTestName } from './util.js';

describe('861. Score After Flipping Matrix', () => {
  [
    [
      [
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
      ],
      39,
    ],
    [[[0]], 1],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(matrixScore, ...args), () => {
      const result = matrixScore(grid);
      expect(result).toBe(expected);
    });
  });
});
