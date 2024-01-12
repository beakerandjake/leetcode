import { construct } from '../src/427.js';
import { arrToStr } from './util.js';

describe('427. Construct Quad Tree', () => {
  [
    [
      [
        [0, 1],
        [1, 0],
      ],
      {
        val: false,
        isLeaf: false,
        topLeft: { val: false, isLeaf: true },
        topRight: { val: true, isLeaf: true },
        bottomLeft: { val: true, isLeaf: true },
        bottomRight: { val: false, isLeaf: true },
      },
    ],
    [
      [
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
      ],
      {
        val: false,
        isLeaf: false,
        topLeft: { val: true, isLeaf: true },
        topRight: {
          val: false,
          isLeaf: false,
          topLeft: { val: false, isLeaf: true },
          topRight: { val: false, isLeaf: true },
          bottomLeft: { val: true, isLeaf: true },
          bottomRight: { val: true, isLeaf: true },
        },
        bottomLeft: { val: true, isLeaf: true },
        bottomRight: { val: false, isLeaf: true },
      },
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = construct(input);
      expect(result).toEqual(expected);
    });
  });
});
