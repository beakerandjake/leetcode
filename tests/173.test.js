import { BSTIterator } from '../src/173.js';
import { arrToStr, arrToBst } from './util.js';

describe('173. Binary Search Tree Iterator', () => {
  [
    [
      [7, 3, 15, null, null, 9, 20],
      [
        'next',
        'next',
        'hasNext',
        'next',
        'hasNext',
        'next',
        'hasNext',
        'next',
        'hasNext',
      ],
      [3, 7, true, 9, true, 15, true, 20, false],
    ],
  ].forEach(([tree, funcs, expected]) => {
    test(`${arrToStr(tree)} -> ${expected}`, () => {
      const iterator = new BSTIterator(arrToBst(tree));
      funcs.forEach((func, i) => {
        const result = iterator[func]();
        expect(result).toBe(expected[i]);
      });
    });
  });
});
