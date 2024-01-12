import { SmallestInfiniteSet } from '../src/2336.js';
import { arrToStr } from './util.js';

describe('2336. Smallest Number in Infinite Set', () => {
  [
    // replace with real test data
    [
      [
        'addBack',
        'popSmallest',
        'popSmallest',
        'popSmallest',
        'addBack',
        'popSmallest',
        'popSmallest',
        'popSmallest',
      ],
      [[2], [], [], [], [1], [], [], []],
      [undefined, 1, 2, 3, undefined, 1, 4, 5],
    ],
  ].forEach(([fns, args, expected]) => {
    const set = new SmallestInfiniteSet();
    test(`${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      fns.forEach((fn, i) => {
        const result = set[fn](...args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
