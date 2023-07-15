import { kthToLast } from '../../../src/interview/ch02/kthToLast.js';
import { expectListEqual, str, toList, toNodes } from './util.js';

describe('kthToLast()', () => {
  [
    [[], 0, -1],
    [[], 1, -1],
    [[], -1, -1],
    [[1], -1, -1],
    [[1], 0, 0],
    [[1, 2], 0, 1],
    [[1, 2], 1, 0],
    [[1, 2, 3], 0, 2],
    [[1, 2, 3], 1, 1],
    [[1, 2, 3], 2, 0],
    [[1, 2, 3, 4], 0, 3],
    [[1, 2, 3, 4], 1, 2],
    [[1, 2, 3, 4], 2, 1],
    [[1, 2, 3, 4], 3, 0],
    [[1, 2, 3, 4, 5, 6], 0, 5],
    [[1, 2, 3, 4, 5, 6], 1, 4],
    [[1, 2, 3, 4, 5, 6], 2, 3],
    [[1, 2, 3, 4, 5, 6], 3, 2],
    [[1, 2, 3, 4, 5, 6], 4, 1],
    [[1, 2, 3, 4, 5, 6], 5, 0],
    [[1, 2, 3, 4, 5, 6, 7], 0, 6],
    [[1, 2, 3, 4, 5, 6, 7], 1, 5],
    [[1, 2, 3, 4, 5, 6, 7], 2, 4],
    [[1, 2, 3, 4, 5, 6, 7], 3, 3],
    [[1, 2, 3, 4, 5, 6, 7], 4, 2],
    [[1, 2, 3, 4, 5, 6, 7], 5, 1],
    [[1, 2, 3, 4, 5, 6, 7], 6, 0],
  ].forEach(([before, k, nodeIndex]) => {
    const nodes = toNodes(before);
    const list = toList(nodes);
    const expected = nodes[nodeIndex];
    test(`kthToLast(${str(before)}, ${k}) = ${before[nodeIndex]}`, () => {
      const result = kthToLast(list, k);
      expect(result).toBe(expected);
    });
  });
});
