import { largestPerimeter } from '../src/2971.js';
import { arrToStr } from './util.js';

describe('2971. Find Polygon With the Largest Perimeter', () => {
  [
    [[5, 5, 5], 15],
    [[1, 12, 1, 2, 5, 50, 3], 12],
    [[5, 5, 50], -1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = largestPerimeter(input);
      expect(result).toBe(expected);
    });
  });
});
