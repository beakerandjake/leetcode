import { MyQueue } from '../../src/leetcode/232.js';
import { arrToStr } from '../util.js';

describe('232. Implement Queue using Stacks', () => {
  [
    [
      ['push', 'push', 'peek', 'pop', 'empty'],
      [1, 2, undefined, undefined, undefined],
      [undefined, undefined, 1, 1, false],
    ],
    [['empty'], [undefined], [true]],
  ].forEach(([fns, args, expected]) => {
    test(`${arrToStr(fns)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      const queue = new MyQueue();
      fns.forEach((fn, i) => {
        const result = queue[fn](args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
