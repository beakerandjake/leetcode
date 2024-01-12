import { MinStack } from '../src/155.js';
import { arrToStr } from './util.js';

describe('155. Min Stack', () => {
  [
    [
      ['push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
      [-2, 0, -3, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, -3, undefined, 0, -2],
    ],
  ].forEach(([funcs, args, expected]) => {
    const stack = new MinStack();
    test(`${arrToStr(funcs)},${arrToStr(args)} -> ${arrToStr(expected)}`, () => {
      funcs.forEach((func, i) => {
        const result = stack[func](args[i]);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
