import { rotateLeft } from '../../src/pearls/2-1-b.js';

const arr = (str) => [...str];

test.each([
  // ['', 1, ''],
  // ['a', 1, 'a'],
  ['abcdefgh', 3, 'defghabc'],
])('rotateLeft(%s, %s) = %s', (input, times, expected) => {
  const result = rotateLeft(arr(input), times);
  console.log(result);
  expect(result).toEqual(arr(expected));
});
