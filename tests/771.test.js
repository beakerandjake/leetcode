import { numJewelsInStones } from '../src/771.js';

describe('771. Jewels and Stones', () => {
  [
    ['aA', 'aAAbbbb', 3],
    ['z', 'ZZ', 0],
  ].forEach(([jewels, stones, expected]) => {
    test(`${jewels},${stones} -> ${expected}`, () => {
      const result = numJewelsInStones(jewels, stones);
      expect(result).toBe(expected);
    });
  });
});
