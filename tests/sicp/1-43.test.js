import { exercise } from '../../src/sicp/1-43.js';

test.each([[5, 2, 625]])('repeated(square, %s)(%s) = %s', (n, times, expected) => {
  const result = exercise(n, times);
  expect(result).toBe(expected);
});
