import { expect } from '../src/2704.js';
import { generateTestName } from './util.js';

describe('2704. To Be Or Not To Be', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(expect, ...args), () => {
      const result = expect();
      expect(result).toBe(expected);
    });
  });
});
