import { validWordAbbreviation } from '../src/408.js';

describe('408. Valid Word Abbreviation', () => {
  [
    ['internationalization', 'i12iz4n', true],
    ['apple', 'a2e', false],
  ].forEach(([word, abbr, expected]) => {
    test(`${word},${abbr} -> ${expected}`, () => {
      const result = validWordAbbreviation(word, abbr);
      expect(result).toBe(expected);
    });
  });
});
