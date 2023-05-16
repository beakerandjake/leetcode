import { exercise } from '../../src/sicp/1-41.js';

test.each([[5, 21]])('double(double(double)(inc)(%s) = %s', (n, expected) => {
  const result = exercise(n);
  expect(result).toBe(expected);
});
