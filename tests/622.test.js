import { MyCircularQueue } from '../src/622.js';
import { arrToStr } from './util.js';

describe('622. Design Circular Queue', () => {
  [
    [
      3,
      [
        'enQueue',
        'enQueue',
        'enQueue',
        'enQueue',
        'Rear',
        'isFull',
        'deQueue',
        'enQueue',
        'Rear',
      ],
      [[1], [2], [3], [4], [], [], [], [4], []],
      [true, true, true, false, 3, true, true, true, 4],
    ],
  ].forEach(([size, fns, args, expected]) => {
    test(`${size},${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      const queue = new MyCircularQueue(size);
      fns.forEach((fn, i) => {
        const result = queue[fn](...args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
