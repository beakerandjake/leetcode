import { canConstruct } from '../../src/leetcode/383.js';

describe('383. Ransom Note', () => {
  [
    ['a', 'b', false],
    ['aa', 'ab', false],
    ['aa', 'aab', true],
  ].forEach(([note, magazine, expected]) => {
    test(`${note},${magazine} -> ${expected}`, () => {
      const result = canConstruct(note, magazine);
      expect(result).toBe(expected);
    });
  });
});
