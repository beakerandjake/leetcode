import { fractionAddition } from '../src/592.js';
import { generateTestName } from './util.js';

describe('592. Fraction Addition and Subtraction', () => {
  [
    ['-1/2+1/2', '0/1'],
    ['-1/2+1/2+1/3', '1/3'],
    ['1/3-1/2', '-1/6'],
  ].forEach((args) => {
    const [expression, expected] = args;
    test(generateTestName(fractionAddition, ...args), () => {
      const result = fractionAddition(expression);
      expect(result).toBe(expected);
    });
  });
});
