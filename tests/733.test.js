import { floodFill } from '../src/733.js';
import { arrToStr } from './util.js';

describe('733. Flood Fill', () => {
  [
    [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    ],
  ].forEach(([image, sr, sc, color, expected]) => {
    test(`${arrToStr(image)},${sr},${sc},${color} -> ${arrToStr(expected)}`, () => {
      const result = floodFill(image, sr, sc, color);
      expect(result).toEqual(expected);
    });
  });
});
