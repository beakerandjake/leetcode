import { factorial_recursive, factorial_iterative } from '../../src/sicp/1-31.js';

const testData = [
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
];

test.each(testData)('factorial_recursive(%s) = %s', (n, expected) => {
  const result = factorial_recursive(n);
  expect(result).toBe(expected);
});

test.each(testData)('factorial_iterative(%s) = %s', (n, expected) => {
  const result = factorial_iterative(n);
  expect(result).toBe(expected);
});
