import { findContentChildren } from '../src/455.js';
import { generateTestName } from './util.js';

describe('455. Assign Cookies', () => {
  [
    [[1, 2, 3], [1, 1], 1],
    [[1, 2], [1, 2, 3], 2],
    [[10, 9, 8, 7], [5, 6, 7, 8], 2],
  ].forEach((args) => {
    const [g, s, expected] = args;
    test(generateTestName(findContentChildren, ...args), () => {
      const result = findContentChildren(g, s);
      expect(result).toBe(expected);
    });
  });
});
