import { detectCapitalUse } from '../src/520.js';
import { generateTestName } from './util.js';

describe('520. Detect Capital', () => {
  [
    ['USA', true],
    ['FlaG', false],
  ].forEach((args) => {
    const [word, expected] = args;
    test(generateTestName(detectCapitalUse, ...args), () => {
      const result = detectCapitalUse(word);
      expect(result).toBe(expected);
    });
  });
});
