import { checkInclusion } from '../src/567.js';

describe('567. Permutation in String', () => {
  [
    ['ab', 'eidbaooo', true],
    ['ab', 'eidboaoo', false],
    ['listen', 'silently', true],
    ['dinitrophenylhydrazine', 'acetylphenylhydrazine', false],
    ['adc', 'dcda', true],
  ].forEach(([s1, s2, expected]) => {
    test(`${s1},${s2} -> ${expected}`, () => {
      const result = checkInclusion(s1, s2);
      expect(result).toBe(expected);
    });
  });
});
