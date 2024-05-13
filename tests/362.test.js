import { HitCounter } from '../src/362.js';
import { generateTestName } from './util.js';

describe('362. Design Hit Counter', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(HitCounter, ...args), () => {
      const result = HitCounter();
      expect(result).toBe(expected);
    });
  });
});
