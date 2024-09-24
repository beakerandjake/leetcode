import { lexicalOrder } from '../src/386.js';
import { generateTestName } from './util.js';

describe('386. Lexicographical Numbers', () => {
  [
    [13, [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]],
    [2, [1, 2]],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(lexicalOrder, ...args), () => {
      const result = lexicalOrder(n);
      expect(result).toEqual(expected);
    });
  });
});
