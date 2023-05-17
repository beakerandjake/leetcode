import { n_fold_smooth, smooth } from '../../src/sicp/1-44.js';

const square = (x) => x * x;

test.each([[6.48074, 41.99999094766667]])(
  'smooth(square)(%s) = %s',
  (n, expected) => {
    const result = smooth(square)(n);
    expect(result).toBe(expected);
  }
);

test.each([
  [6.48074, 1, 41.99999094766667],
  [6.48074, 2, 41.99999094773333],
  [6.48074, 3, 41.99999094779999],
  [6.48074, 4, 41.99999094786666],
  [6.48074, 5, 41.99999094793333],
  [6.48074, 10, 41.999990948266635],
])('smooth(square, 0.00001)(%s) = %s', (n, times, expected) => {
  const result = n_fold_smooth(square, times)(n);
  expect(result).toBeCloseTo(expected, 13);
});
