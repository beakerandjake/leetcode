import { maxWidthOfVerticalArea } from '../src/1637.js';
import { generateTestName } from './util.js';

describe('1637. Widest Vertical Area Between Two Points Containing No Points', () => {
  [
    [
      [
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7],
      ],
      1,
    ],
    [
      [
        [3, 1],
        [9, 0],
        [1, 0],
        [1, 4],
        [5, 3],
        [8, 8],
      ],
      3,
    ],
  ].forEach((args) => {
    const [points, expected] = args;
    test(generateTestName(maxWidthOfVerticalArea, ...args), () => {
      const result = maxWidthOfVerticalArea(points);
      expect(result).toBe(expected);
    });
  });
});
