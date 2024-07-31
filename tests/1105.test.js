import { minHeightShelves } from '../src/1105.js';
import { generateTestName } from './util.js';

describe('1105. Filling Bookcase Shelves', () => {
  [
    [
      [
        [1, 1],
        [2, 3],
        [2, 3],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 2],
      ],
      4,
      6,
    ],
    [
      [
        [1, 3],
        [2, 4],
        [3, 2],
      ],
      6,
      4,
    ],
  ].forEach((args) => {
    const [books, shelfWidth, expected] = args;
    test(generateTestName(minHeightShelves, ...args), () => {
      const result = minHeightShelves(books, shelfWidth);
      expect(result).toBe(expected);
    });
  });
});
