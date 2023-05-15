import {
  sum_recursive,
  sum_iterative,
  product_recursive,
  product_iterative,
} from '../../src/sicp/1-32.js';

const sumTestData = [
  [0, 1, 1],
  [1, 3, 6],
  [2, 7, 27],
  [3, 19, 187],
];

const productTestData = [
  [0, 1, 0],
  [1, 3, 6],
  [2, 7, 5040],
  [3, 19, 60822550204416000],
];

test.each(sumTestData)('sum_recursive(%s, %s) = %s', (a, b, expected) => {
  const result = sum_recursive(a, b);
  expect(result).toBe(expected);
});

test.each(productTestData)('product_recursive(%s, %s) = %s', (a, b, expected) => {
  const result = product_recursive(a, b);
  expect(result).toBe(expected);
});

test.each(sumTestData)('sum_iterative(%s, %s) = %s', (a, b, expected) => {
  const result = sum_iterative(a, b);
  expect(result).toBe(expected);
});

test.each(productTestData)('product_iterative(%s, %s) = %s', (a, b, expected) => {
  const result = product_iterative(a, b);
  expect(result).toBe(expected);
});
