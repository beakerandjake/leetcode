import { minReorder } from '../src/1466.js';
import { arrToStr } from './util.js';

describe('1466. Reorder Routes to Make All Paths Lead to the City Zero', () => {
  [
    [
      6,
      [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5],
      ],
      3,
    ],
    [
      5,
      [
        [1, 0],
        [1, 2],
        [3, 2],
        [3, 4],
      ],
      2,
    ],
    [
      3,
      [
        [1, 0],
        [2, 0],
      ],
      0,
    ],
    [
      4,
      [
        [0, 1],
        [2, 0],
        [3, 2],
      ],
      1,
    ],
  ].forEach(([n, connections, expected]) => {
    test(`${n},${arrToStr(connections)} -> ${expected}`, () => {
      const result = minReorder(n, connections);
      expect(result).toBe(expected);
    });
  });
});
