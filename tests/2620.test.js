import { createCounter } from '../src/2620.js';
import { generateTestName } from './util.js';

describe('2620. Counter', () => {
  [
    [10, 3, [10, 11, 12]],
    [-2, 5, [-2, -1, 0, 1, 2]],
  ].forEach((args) => {
    const [n, times, expected] = args;
    test(generateTestName(createCounter, ...args), () => {
      const counter = createCounter(n);
      const result = [...Array(times)].map(() => counter());
      expect(result).toEqual(expected);
    });
  });
});
