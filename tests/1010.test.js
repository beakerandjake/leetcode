import { numPairsDivisibleBy60 } from '../src/1010.js';
import { generateTestName } from './util.js';

describe('1010. Pairs of Songs With Total Durations Divisible by 60', () => {
  [
    [[30, 20, 150, 100, 40], 3],
    [[60, 60, 60], 3],
  ].forEach((args) => {
    const [time, expected] = args;
    test(generateTestName(numPairsDivisibleBy60, ...args), () => {
      const result = numPairsDivisibleBy60(time);
      expect(result).toBe(expected);
    });
  });
});
