import { frequencySort } from '../src/451.js';

describe('451. Sort Characters By Frequency', () => {
  [
    ['tree', 'eetr'],
    ['cccaaa', 'cccaaa'],
    ['Aabb', 'bbAa'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = frequencySort(input);
      expect(result).toBe(expected);
    });
  });
});
