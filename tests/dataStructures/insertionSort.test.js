import { insertionSort } from '../../src/dataStructures/insertionSort.js';

test.each([
  [[], []],
  [[1], [1]],
  [
    [1, 2],
    [1, 2],
  ],
  [
    [3, 2, 1],
    [1, 2, 3],
  ],
  [
    [66, 33, 22, 55],
    [22, 33, 55, 66],
  ],
  [
    [97, 2, 33, 48, 12, 30, 291],
    [2, 12, 30, 33, 48, 97, 291],
  ],
])('%s returns %s', (input, expected) => {
  expect(insertionSort(input)).toEqual(expected);
});
