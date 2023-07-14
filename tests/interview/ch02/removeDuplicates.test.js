import { removeDuplicates } from '../../../src/interview/ch02/removeDuplicates.js';
import { expectListEqual, str, toList, toNodes } from './util.js';

describe('removeDuplicates()', () => {
  [
    [[], []],
    [[1], [1]],
    [[1, 1], [1]],
    [[1, 1, 1], [1]],
    [[1, 1, 1, 1], [1]],
    [[1, 1, 1, 1, 1], [1]],
    [[1, 1, 1, 1, 1, 1], [1]],
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [1, 1, 1, 2],
      [1, 2],
    ],
    [
      [1, 1, 1, 2, 1],
      [1, 2],
    ],
    [
      [1, 1, 1, 2, 1, 1],
      [1, 2],
    ],
    [
      [1, 2, 1],
      [1, 2],
    ],
    [
      [1, 2, 1, 1],
      [1, 2],
    ],
    [
      [1, 2, 1, 1, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 1, 1, 3, 4],
      [1, 2, 3, 4],
    ],
    [
      [1, 1, 2, 2],
      [1, 2],
    ],
    [
      [1, 1, 2, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 1, 2, 2, 2, 1, 2, 1, 3],
      [1, 2, 3],
    ],
    [
      [1, 1, 2, 2, 3, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 77],
      [1, 2, 3, 77],
    ],
  ].forEach(([before, after]) => {
    const list = toList(toNodes(before));
    const expected = toList(toNodes(after));
    test(`removeDuplicates(${str(before)}) = ${str(after)}`, () => {
      removeDuplicates(list);
      expectListEqual(list, expected);
    });
  });
});
