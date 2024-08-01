import { curry } from '../src/2632.js';
import { generateTestName } from './util.js';

describe('2632. Curry', () => {
  [
    [(a, b, c) => a + b + c, [[1], [2], [3]], 6],
    [(a, b, c) => a + b + c, [[1, 2], [3]], 6],
  ].forEach((args) => {
    const [fn, input, expected] = args;
    test(generateTestName(curry, ...args), () => {
      const result = input.reduce((acc, x) => acc(...x), curry(fn));
      expect(result).toBe(expected);
    });
  });
});
