import { expect as fnToTest } from '../src/2704.js';
import { generateTestName } from './util.js';

describe('2704. To Be Or Not To Be', () => {
  [
    [5, 'toBe', 5, true],
    [5, 'toBe', null, 'Not Equal'],
    [5, 'notToBe', null, true],
  ].forEach((args) => {
    const [lhs, equalityFn, rhs, expected] = args;
    test(generateTestName(expect, ...args), () => {
      if (typeof expected === 'string') {
        expect(() => fnToTest(lhs)[equalityFn](rhs)).toThrow(expected);
      } else {
        const result = fnToTest(lhs)[equalityFn](rhs);
        expect(result).toBe(expected);
      }
    });
  });
});
