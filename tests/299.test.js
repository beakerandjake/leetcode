import { getHint } from '../src/299.js';
import { generateTestName } from './util.js';

describe('299. Bulls and Cows', () => {
  [
    ['1807', '7810', '1A3B'],
    ['1123', '0111', '1A1B'],
    ['1122', '1222', '3A0B'],
  ].forEach((args) => {
    const [secret, guess, expected] = args;
    test(generateTestName(getHint, ...args), () => {
      const result = getHint(secret, guess);
      expect(result).toBe(expected);
    });
  });
});
