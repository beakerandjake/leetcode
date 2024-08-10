import { regionsBySlashes } from '../src/959.js';
import { generateTestName } from './util.js';

describe('959. Regions Cut By Slashes', () => {
  [
    [[' /', '/ '], 2],
    [[' /', '  '], 1],
    [['/\\', '\\/'], 5],
  ].forEach((args) => {
    const [grid, expected] = args;
    test(generateTestName(regionsBySlashes, ...args), () => {
      const result = regionsBySlashes(grid);
      expect(result).toBe(expected);
    });
  });
});
