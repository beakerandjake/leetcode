import { fullJustify } from '../src/68.js';
import { generateTestName } from './util.js';

describe('68. Text Justification', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(fullJustify, ...args), () => {
      const result = fullJustify();
      expect(result).toBe(expected);
    });
  });
});
