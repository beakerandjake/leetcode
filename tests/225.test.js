import { MyStack } from '../src/leetcode/225.js';
import { arrToStr } from './util.js';

describe('225. Implement Stack using Queues', () => {
  [
    [
      ['push', 'push', 'top', 'pop', 'empty'],
      [[1], [2], [], [], []],
      [undefined, undefined, 2, 2, false],
    ],
  ].forEach(([fns, args, expected]) => {
    test(`${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      const queue = new MyStack();
      fns.forEach((fn, i) => {
        const result = queue[fn](...args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
