import { isPrime } from '../../src/dataStructures/isPrime.js';

describe('isPrime()', () => {
  test.each([
    [1, true],
    [2, true],
    [3, true],
    [4, false],
    [5, true],
    [6, false],
    [7, true],
    [8, false],
    [9, false],
    [10, false],
    [41, true],
    [43, true],
    [47, true],
    [66, false],
    [1000, false],
    [525, false],
  ])('%s isPrime return %s', (number, expected) => {
    const result = isPrime(number);
    expect(result).toBe(expected);
  });
});
