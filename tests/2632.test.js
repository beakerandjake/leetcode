import { curry } from '../src/2632.js';
import { generateTestName } from './util.js';

describe('2632. Curry', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(curry, ...args), () => {
      const result = curry();
      expect(result).toBe(expected);
    });
  });
});
